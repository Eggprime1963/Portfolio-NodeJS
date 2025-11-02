# Portfolio Website

A modern, responsive portfolio website built with React and Node.js featuring Google Maps integration and automatic email notifications.

## Features

- **React Frontend with TypeScript** - Modern, component-based architecture
- **Node.js Backend** - Express server with email functionality
- **Google Maps Integration** - Interactive map with custom markers
- **Contact Form with Email Notifications** - Automatic email sending with confirmation system
- **Responsive Design** - Works perfectly on all devices
- **Tailwind CSS** - Modern styling framework
- **Email Confirmation System** - Users can choose to receive confirmation emails

## Tech Stack

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Google Maps JavaScript API
- Axios for API calls

### Backend
- Node.js
- Express.js
- Nodemailer for email functionality
- CORS for cross-origin requests
- dotenv for environment variables

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Gmail account for email functionality

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Variables**
   
   Copy the example environment files and update them with your actual values:
   
   **Server:**
   ```bash
   cd server
   cp .env.example .env
   ```
   
   Edit `server/.env` with your actual values:
   ```
   PORT=5000
   NODE_ENV=development
   GMAIL_USER=your-email@gmail.com
   GMAIL_PASS=your-app-password
   GOOGLE_MAPS_API_KEY=your-google-maps-api-key
   CORS_ORIGIN=http://localhost:3000
   ```
   
   **Client:**
   ```bash
   cd client
   cp .env.example .env
   ```
   
   Edit `client/.env` with your actual values:
   ```
   REACT_APP_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
   REACT_APP_API_URL=http://localhost:5000
   REACT_APP_APP_NAME=Portfolio Website
   REACT_APP_CONTACT_EMAIL=your-email@gmail.com
   REACT_APP_MAP_CENTER_LAT=40.7128
   REACT_APP_MAP_CENTER_LNG=-74.0060
   REACT_APP_MAP_ZOOM=13
   ```
   
   **⚠️ Important:** Never commit `.env` files to version control. They are already included in `.gitignore`.

### Running the Application

1. **Start the backend server**
   ```bash
   cd server
   npm run dev
   ```

2. **Start the frontend (in a new terminal)**
   ```bash
   cd client
   npm start
   ```

3. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## Contact Form Features

The contact form includes:

- **Required Fields**: Name, Email, Subject, Message
- **Confirmation Checkbox**: Users can opt-in for email confirmations
- **Automatic Notifications**: 
  - If checkbox is checked: Sends confirmation email to user and notification to owner
  - If checkbox is not checked: Only sends notification to owner
- **Email Templates**: Professional HTML email templates
- **Validation**: Client and server-side validation
- **Error Handling**: User-friendly error messages

## Google Maps Integration

- Interactive map with custom styling
- Location marker
- Responsive design
- API key integration
- Customizable location coordinates

## Email Configuration

The application uses Gmail SMTP for sending emails. Make sure to:

1. Enable "Less secure app access" or use App Passwords
2. Configure the correct email credentials in the server `.env` file
3. Test email functionality before deploying

## Customization

### Update Personal Information

1. Edit `client/src/components/Hero.tsx` - Update name and title
2. Edit `client/src/components/About.tsx` - Update bio and experience
3. Edit `client/src/components/Skills.tsx` - Update skills and proficiency
4. Edit `client/src/components/Projects.tsx` - Add your projects
5. Edit `client/src/components/Contact.tsx` - Update contact information

### Update Google Maps Location

1. Edit `client/src/components/GoogleMap.tsx`
2. Update the `center` coordinates to your location
3. Update the marker position

### Update Email Settings

1. Edit `server/index.js`
2. Update email templates and SMTP configuration
3. Test email functionality

## Deployment

### Frontend (Netlify/Vercel)
1. Build the React app: `npm run build`
2. Deploy the `build` folder to your hosting service
3. Update environment variables on the hosting platform

### Backend (Heroku/Railway)
1. Push the server code to your hosting service
2. Set environment variables
3. Update the API URL in the frontend

## Security Notes

- **Environment Variables**: All sensitive data is stored in `.env` files which are excluded from version control
- **Never commit API keys or passwords** to version control
- **Gmail App Passwords**: Use App Passwords instead of your regular Gmail password for better security
- **API Keys**: Restrict your Google Maps API key to specific domains/IPs in production
- **CORS**: CORS is configured to only allow requests from your frontend domain
- **Rate Limiting**: Consider implementing rate limiting for the contact form API in production
- **HTTPS**: Always use HTTPS in production environments

### Setting up Gmail App Password

1. Enable 2-factor authentication on your Gmail account
2. Go to your Google Account settings
3. Navigate to "Security" → "App passwords"
4. Generate a new app password for "Mail"
5. Use this app password in your `GMAIL_PASS` environment variable

## Git Security

The following files are automatically ignored by Git (included in `.gitignore`):
- `.env` files (all environments)
- `node_modules/` directories
- Build outputs and cache files
- Editor-specific files

Always verify that sensitive files are not tracked:
```bash
git status
# Should not show any .env files
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support or questions, please contact: jamesdpkn.commerce@gmail.com
