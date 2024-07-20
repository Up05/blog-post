@echo off
cls
if exists "public\lib\UNZIP THIS.zip" ( 
  if not exists "public\lib\ace" (
    tar -x "public\lib\UNZIP THIS.zip"
    echo "Unzipped libraries..." 
  )
)
npm install
"C:\Program Files\Firefox Developer Edition\firefox.exe" -new-tab --url localhost:3100
node "public\backend\index.js"
@echo on