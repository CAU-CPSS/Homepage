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
if pm2 list | grep -q "next-app"; then
    pm2 reload next-app -update-env
else
    pm2 start npm --name "next-app" -- start
fi

pm2 save

echo "Deployment completed successfully."