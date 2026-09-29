@echo off
title Swachh Mitra Server
echo ==========================================
echo Starting Swachh Mitra Local Server...
echo ==========================================
echo.
echo URL: http://localhost:3000
echo.
echo Browser opening automatically...
start http://localhost:3000
echo.
echo (Do not close this window while using the app)
echo.
python -m http.server 3000
pause
