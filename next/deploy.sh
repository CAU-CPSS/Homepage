#!/bin/bash
set -e

NEXT_DIR="/var/www/Homepage/next"
WEB_ROOT="/var/www/html"
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

echo "[4/4] Deploying..."
rm -rf "$WEB_ROOT"
mkdir -p "$WEB_ROOT"
cp -R out/* "$WEB_ROOT"
sudo systemctl reload nginx

echo "Done successfully."