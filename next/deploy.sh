#!/bin/bash
set -e

NEXT_DIR="/var/www/Homepage/next"
BRANCH="next-migration"

if [ "$EUID" -eq 0 ]; then
    echo "Error: Do not run as root."
    exit 1
fi

cd "$NEXT_DIR"

echo "[1/4] Pulling from GitHub..."
git pull origin "$BRANCH"

echo "[2/4] Installing dependencies..."
npm ci

echo "[3/4] Building..."
npm run build

echo "[4/4] Restarting Next server..."
pm2 stop next-app 2>/dev/null || true
sudo fuser -k 3000/tcp 2>/dev/null || true
pm2 restart next-app 2>/dev/null || pm2 start npm --name "next-app" -- start

echo "Done successfully."