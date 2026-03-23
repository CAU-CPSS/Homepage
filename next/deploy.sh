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

echo "[2/5] Installing dependencies..."
npm ci

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