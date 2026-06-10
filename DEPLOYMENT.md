# Deployment Guide

This document provides step-by-step instructions for deploying the Speelans AI platform to various hosting providers.

## 🚀 Vercel (Recommended)

### Prerequisites
- Vercel account
- GitHub repository with your code

### Steps
1. **Connect Repository**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Environment Variables**
   Add these variables in Vercel Dashboard → Settings → Environment Variables:
   ```
   DATABASE_URL=your-supabase-database-url
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
   STRIPE_SECRET_KEY=your-stripe-secret-key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
   STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
   DAILY_API_KEY=your-daily-api-key
   RESEND_API_KEY=your-resend-api-key
   ADMIN_PASSPHRASE=your-secure-passphrase
   NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
   ```

3. **Deploy**
   - Vercel will automatically build and deploy
   - Your app will be available at `https://your-project.vercel.app`

## 🐳 Docker Deployment

### Local Docker
```bash
# Build the image
docker build -t speelans-ai .

# Run the container
docker run -p 3000:3000 --env-file .env.local speelans-ai
```

### Docker Compose
```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f app

# Stop services
docker-compose down
```

## ☁️ Railway

1. **Create Railway Account**
   - Sign up at [Railway.app](https://railway.app)

2. **Deploy from GitHub**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Add Environment Variables**
   - Go to Variables tab
   - Add all required environment variables

4. **Configure Domain**
   - Railway provides a domain automatically
   - Update `NEXT_PUBLIC_APP_URL` to match

## 🌊 Render

1. **Create Render Account**
   - Sign up at [Render.com](https://render.com)

2. **Create Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository

3. **Configure Build**
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
   - Environment: Node

4. **Add Environment Variables**
   - Go to Environment tab
   - Add all required variables

## 🚁 Heroku

1. **Install Heroku CLI**
   ```bash
   npm install -g heroku
   ```

2. **Login and Create App**
   ```bash
   heroku login
   heroku create your-app-name
   ```

3. **Set Environment Variables**
   ```bash
   heroku config:set DATABASE_URL=your-database-url
   heroku config:set NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   # ... add all other variables
   ```

4. **Deploy**
   ```bash
   git push heroku main
   ```

## 🌐 Netlify

1. **Connect Repository**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Choose your repository

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Add Environment Variables**
   - Go to Site settings → Environment variables
   - Add all required variables

## 📡 Digital Ocean App Platform

1. **Create App**
   - Go to Digital Ocean dashboard
   - Click "Create" → "Apps"
   - Connect your GitHub repository

2. **Configure**
   - Build Command: `npm run build`
   - Run Command: `npm start`
   - HTTP Port: 3000

3. **Environment Variables**
   - Add all required variables in the Environment section

## 🔧 General Server Setup

For VPS or dedicated server deployment:

### Prerequisites
- Ubuntu 20.04+ or similar Linux distribution
- Node.js 18+
- Nginx (optional, for reverse proxy)
- SSL certificate (Let's Encrypt recommended)

### Installation Steps

1. **Update System**
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

2. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Clone and Setup**
   ```bash
   git clone <your-repo-url>
   cd MISAUTIS
   npm install
   ```

4. **Environment Configuration**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your production values
   ```

5. **Build Application**
   ```bash
   npm run build
   ```

6. **Install PM2 (Process Manager)**
   ```bash
   npm install -g pm2
   ```

7. **Start Application**
   ```bash
   pm2 start npm --name "speelans-ai" -- start
   pm2 save
   pm2 startup
   ```

### Nginx Configuration (Optional)

Create `/etc/nginx/sites-available/speelans-ai`:
```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/speelans-ai /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### SSL Certificate with Let's Encrypt
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

## 🔍 Troubleshooting

### Common Issues

1. **Build Errors**
   - Ensure all environment variables are set
   - Check Node.js version compatibility
   - Run `npm run db:generate` if Prisma errors occur

2. **Database Connection Issues**
   - Verify DATABASE_URL format
   - Check Supabase connection limits
   - Ensure IP whitelist includes your server

3. **Environment Variables**
   - Double-check all required variables are set
   - Verify no trailing spaces in values
   - Ensure production URLs are correct

4. **Performance Issues**
   - Enable gzip compression
   - Configure CDN for static assets
   - Optimize images and fonts

## 📊 Monitoring

### Health Check Endpoint
The application includes a health check at `/api/health`

### Logs
- Vercel: Dashboard → Functions → View logs
- Railway: Dashboard → Deployments → View logs
- PM2: `pm2 logs speelans-ai`

### Performance Monitoring
Consider integrating:
- Vercel Analytics
- Sentry for error tracking
- LogRocket for user session replay