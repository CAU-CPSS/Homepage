#!/bin/bash
# 봇 코드를 고친 뒤 서버에 반영할 때 쓴다.
# 홈페이지 배포인 next/deploy.sh 는 봇을 재시작하지 않는다. (서로 독립)
set -e

BOT_DIR="/var/www/Homepage/news-bot"

if [ "$EUID" -eq 0 ]; then
    echo "Error: Do not run as root."
    exit 1
fi

cd "$BOT_DIR"

echo "[1/4] Pulling from GitHub..."
git pull origin next-migration

echo "[2/4] Installing dependencies..."
npm ci

echo "[3/4] Checking .env..."
if [ ! -f .env ]; then
    echo "Error: news-bot/.env 가 없습니다. .env.example 을 복사해서 채우세요."
    exit 1
fi

echo "[4/4] Restarting bot..."
if pm2 list | grep -q "news-bot"; then
    pm2 restart news-bot --update-env
else
    pm2 start npm --name "news-bot" -- start
fi
pm2 save

echo "Bot deployment completed successfully."
