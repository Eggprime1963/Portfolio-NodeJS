#!/bin/bash

# Portfolio Environment Setup Script

echo "🚀 Setting up Portfolio environment variables..."

# Create server .env if it doesn't exist
if [ ! -f "server/.env" ]; then
    echo "📝 Creating server/.env from example..."
    cp server/.env.example server/.env
    echo "✅ Server .env created. Please edit server/.env with your actual values."
else
    echo "⚠️  Server .env already exists."
fi

# Create client .env if it doesn't exist
if [ ! -f "client/.env" ]; then
    echo "📝 Creating client/.env from example..."
    cp client/.env.example client/.env
    echo "✅ Client .env created. Please edit client/.env with your actual values."
else
    echo "⚠️  Client .env already exists."
fi

echo ""
echo "🔒 Security Reminder:"
echo "   - Never commit .env files to git"
echo "   - Use Gmail App Passwords instead of regular passwords"
echo "   - Restrict Google Maps API key to your domains"
echo ""
echo "📋 Next steps:"
echo "   1. Edit server/.env with your Gmail credentials"
echo "   2. Edit client/.env with your Google Maps API key"
echo "   3. Run 'npm install' in both server/ and client/ directories"
echo "   4. Start the servers with 'npm run dev' (server) and 'npm start' (client)"
echo ""
echo "✨ Setup complete! Happy coding!"
