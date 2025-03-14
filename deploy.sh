#!/bin/bash

LR='\033[1;31m'
LG='\033[1;32m'
LB='\033[1;34m'
LY='\033[1;33m'
LW='\033[1;37m'
NC='\033[0m'

# Greeting Message
echo ""
echo -e "${LB}###############################################"
echo "######## CPSS HOMEPAGE DEPLOYMENT TOOL ########"
echo -e "###############################################${NC}"
echo ""
echo -e "${LR}NOTE${LW}: DO NOT RUN THIS TOOL AS ROOT${NC}"
echo ""

# 1. Remove directories and files
echo -e "${LY}[Step 1]${LW} Removing old files...${NC}"
rm -r ../_app/ ../images/
rm ../index.html ../favicon.png
echo -e "${LG}==>${LW} Successfully removed.${NC}"
echo ""

# 2. Pull from github
echo -e "${LY}[Step 2]${LW} Fetching new stuffs from GitHub...${NC}"
git pull origin svelte > /dev/null 2>&1

if [ $? -ne 0 ]; then
	echo "An error has occured while running git pull."
	exit 1
fi
echo -e "${LG}==>${LW} Successfully pulled from GitHub.${NC}"
echo ""

# 3. Run build operation
echo -e "${LY}[Step 3]${LW} Running build...${NC}"
npm run build > /dev/null 2>&1

if [ $? -ne 0 ]; then
	echo "An error has occured while building."
	exit 1
fi
echo -e "${LG}==>${LW} Successfully built.${NC}"
echo ""

# 4. Publish
echo -e "${LY}[Step 4]${LW} Publishing webpage...${NC}"
cp -R build/* ..
sudo systemctl reload nginx

if [ $? -ne 0 ]; then
	echo "An error has occured while restarting NginX."
	exit 1
fi
echo -e "${LG}==>${LW} Successfully published. You are ready to go!${NC}"
