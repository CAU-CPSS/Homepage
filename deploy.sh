#!/bin/bash

# Greeting Message
echo ""
echo "###############################################"
echo "######## CPSS HOMEPAGE DEPLOYMENT TOOL ########"
echo "###############################################"
echo ""


# 1. Remove directories and files
echo "[Step 1] Removing old files..."
rm -r ../_app/ ../images/
rm ../index.html ../favicon.png
echo "Successfully removed."
echo ""

# 2. Pull from github
echo "[Step 2] Fetching new stuffs from GitHub..."
git pull origin svelte > /dev/null 2>&1

if [ $? -ne 0 ]; then
	echo "An error has occured while running git pull."
	exit 1
fi
echo "Successfully pulled from GitHub."
echo ""

# 3. Run build operation
echo "[Step 3] Running build..."
npm run build > /dev/null 2>&1

if [ $? -ne 0 ]; then
	echo "An error has occured while building."
	exit 1
fi
echo "Successfully built."
echo ""

# 4. Publish
echo "[Step 4] Publishing webpage..."
cp -R build/* ..
sudo systemctl reload nginx

if [ $? -ne 0 ]; then
	echo "An error has occured while restarting NginX. Are you root?"
	exit 1
fi
echo "Successfully published. You are ready to go!"
