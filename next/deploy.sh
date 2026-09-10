#!/bin/bash
set -e

NEXT_DIR="/var/www/Homepage/next"
BRANCH="next-migration"

if [ "$EUID" -eq 0 ]; then
    echo "Error: Do not run as root."
    exit 1
fi

cd "$NEXT_DIR"

echo "[1/5] Pulling from GitHub..."
git pull origin "$BRANCH"

echo "[2/5] Checking dependencies..."
#
# npm ci 는 node_modules 를 통째로 지우고 처음부터 다시 설치한다.
# 이 서버는 회선이 0.5MB/s 남짓이고 node_modules 가 800MB 가 넘어서,
# 의존성이 그대로인데도 매번 돌리면 배포 하나에 수십 분이 걸린다.
#
# 그래서 package-lock.json 이 바뀌었을 때만 설치한다.
# 지문은 node_modules 안에 두어, node_modules 를 지우면 자연히 무효가 된다.
#
LOCK_HASH=$(sha256sum package-lock.json | cut -d' ' -f1)
LOCK_STAMP="node_modules/.deploy-lock-hash"

if [ -d node_modules ] && [ -f "$LOCK_STAMP" ] && [ "$(cat "$LOCK_STAMP")" = "$LOCK_HASH" ]; then
    echo "      package-lock.json unchanged - skipping install."
else
    echo "      Dependencies changed - running npm ci..."
    # --prefer-offline: 로컬 캐시(~/.npm)를 먼저 쓴다. 느린 회선에서 큰 차이가 난다.
    npm ci --prefer-offline --no-audit --no-fund
    # set -e 가 걸려 있으므로, 설치가 끝난 뒤 지문 기록에 실패해 배포가
    # 멈추는 일이 없도록 디렉터리를 확인하고 쓴다.
    mkdir -p node_modules
    echo "$LOCK_HASH" > "$LOCK_STAMP"
fi

echo "[3/5] Clearing old build..."
rm -rf .next

echo "[4/5] Building..."
npm run build

echo "[5/5] Restarting Next server..."
fuser -k 3000/tcp 2>/dev/null || true

if pm2 list | grep -q "next-app"; then
    pm2 stop next-app
    pm2 delete next-app
fi

pm2 start npm --name "next-app" -- start
pm2 save

echo "Deployment completed successfully."