@echo off
echo 🚀 Setting up Portfolio environment variables...

REM Create server .env if it doesn't exist
if not exist "server\.env" (
    echo 📝 Creating server\.env from example...
    copy "server\.env.example" "server\.env"
    echo ✅ Server .env created. Please edit server\.env with your actual values.
) else (
    echo ⚠️  Server .env already exists.
)

REM Create client .env if it doesn't exist
if not exist "client\.env" (
    echo 📝 Creating client\.env from example...
    copy "client\.env.example" "client\.env"
    echo ✅ Client .env created. Please edit client\.env with your actual values.
) else (
    echo ⚠️  Client .env already exists.
)

echo.
echo 🔒 Security Reminder:
echo    - Never commit .env files to git
echo    - Use Gmail App Passwords instead of regular passwords
echo    - Restrict Google Maps API key to your domains
echo.
echo 📋 Next steps:
echo    1. Edit server\.env with your Gmail credentials
echo    2. Edit client\.env with your Google Maps API key
echo    3. Run 'npm install' in both server\ and client\ directories
echo    4. Start the servers with 'npm run dev' (server) and 'npm start' (client)
echo.
echo ✨ Setup complete! Happy coding!
pause
