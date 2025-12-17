# SAI Construction - Frontend

Modern, responsive frontend for SAI Construction website built with React, TypeScript, and Vite.

## 🚀 Features

- Modern, responsive design
- Contact form with real-time validation
- Integration with backend API for email notifications
- Fast build times with Vite
- TypeScript for type safety
- Component-based architecture

## 📋 Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

## 🛠️ Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/sai-construction-frontend.git
   cd sai-construction-frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   ```bash
   cp .env.example .env
   ```

4. **Edit `.env` file** with your backend API URL:
   ```env
   VITE_API_URL=http://localhost:5000
   ```

## 🏃 Running the Application

### Development
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
frontend/
├── components/          # React components
│   ├── Contact.tsx     # Contact form component
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── Services.tsx    # Services section
│   ├── Footer.tsx      # Footer component
│   └── ui/             # Reusable UI components
│       ├── Section.tsx
│       ├── Button.tsx
│       └── Card.tsx
├── App.tsx             # Main app component
├── index.tsx           # Entry point
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
├── types.ts            # TypeScript type definitions
├── package.json        # Dependencies
└── .env.example        # Environment variables template
```

## 🔧 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `http://localhost:5000` |

## 🚀 Deployment

### Deploy to Vercel

1. **Push code to GitHub**

2. **Import project in Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

3. **Configure build settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Add environment variable**:
   - Key: `VITE_API_URL`
   - Value: `https://your-backend-api.com`

5. **Deploy!**

### Deploy to Netlify

1. **Push code to GitHub**

2. **Create new site in Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository

3. **Configure build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **Add environment variable**:
   - Go to Site settings → Environment variables
   - Add `VITE_API_URL` with your backend URL

5. **Deploy!**

### Deploy to GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update `package.json`**:
   ```json
   {
     "scripts": {
       "deploy": "vite build && gh-pages -d dist"
     }
   }
   ```

3. **Update `vite.config.ts`**:
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/',
     // ... other config
   });
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

## 🎨 Customization

### Update Colors
Edit the Tailwind CSS classes in components to match your brand colors.

### Update Contact Information
Edit `components/Contact.tsx` to update phone number and email.

### Update Services
Edit `components/Services.tsx` to add/remove services.

## 🔗 Backend Integration

This frontend connects to the SAI Construction backend API. Make sure to:

1. **Set the correct API URL** in `.env`:
   ```env
   VITE_API_URL=https://your-backend-api.com
   ```

2. **Ensure backend CORS is configured** to allow requests from your frontend domain

3. **Test the connection** by submitting the contact form

## 🐛 Troubleshooting

### "Unable to send enquiry" Error

**Cause**: Cannot connect to backend API

**Solutions**:
- Verify `VITE_API_URL` is set correctly in `.env`
- Ensure backend server is running
- Check browser console for CORS errors
- Verify backend URL is accessible

### Build Errors

**Cause**: Missing dependencies or TypeScript errors

**Solutions**:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check for TypeScript errors
npm run build
```

### Environment Variables Not Working

**Cause**: Vite requires `VITE_` prefix for environment variables

**Solution**: Ensure all environment variables start with `VITE_`:
```env
VITE_API_URL=http://localhost:5000  ✅
API_URL=http://localhost:5000        ❌
```

## 📝 License

MIT

## 👥 Support

For issues or questions, please open an issue on GitHub.

---

**Backend Repository**: [sai-construction-backend](https://github.com/yourusername/sai-construction-backend)
