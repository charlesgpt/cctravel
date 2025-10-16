# C&C Travel Hub Deployment Guide

## 🎯 Quick Deployment Summary

**Domain:** cctravelhub.xyz  
**Server IP:** 35.192.15.69  
**Instance:** instace2 (us-central1-c)  
**GitHub Repo:** https://github.com/charlesgpt/cctravel.git

## 📋 Manual Deployment Steps

### 1. Connect to Your Server
```bash
gcloud compute ssh instace2 --zone=us-central1-c
```

### 2. Install Required Software
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18 (LTS)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs nginx git

# Verify installations
node --version
npm --version
nginx -v
```

### 3. Clone and Build the Project
```bash
# Clone repository
sudo mkdir -p /var/www
sudo git clone https://github.com/charlesgpt/cctravel.git /var/www/cctravel
sudo chown -R $USER:$USER /var/www/cctravel
cd /var/www/cctravel

# Install dependencies
npm install

# Build the project
npm run build
```

### 4. Configure Nginx
```bash
# Create Nginx configuration
sudo nano /etc/nginx/sites-available/cctravel
```

**Copy this configuration:**
```nginx
server {
    listen 80;
    server_name cctravelhub.xyz www.cctravelhub.xyz;
    
    root /var/www/cctravel/dist;
    index index.html;
    
    # Handle React Router
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
}
```

### 5. Enable the Site
```bash
# Enable the site
sudo ln -sf /etc/nginx/sites-available/cctravel /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
sudo systemctl enable nginx
```

### 6. Configure Firewall
```bash
# Allow HTTP/HTTPS traffic
sudo ufw allow 'Nginx Full'
sudo ufw allow ssh
sudo ufw --force enable
```

## ✅ Verification

After deployment, test these URLs:
- http://cctravelhub.xyz
- http://www.cctravelhub.xyz

## 🔒 Optional: SSL Certificate (Recommended)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d cctravelhub.xyz -d www.cctravelhub.xyz

# Auto-renewal (already set up by certbot)
sudo systemctl status certbot.timer
```

## 🔄 Future Updates

To update the website:
```bash
cd /var/www/cctravel
git pull origin main
npm install
npm run build
sudo systemctl reload nginx
```

## 📧 Email Configuration

1. Sign up for [Resend](https://resend.com)
2. Verify your domain: cctravelhub.xyz
3. Get your API key
4. Add environment variables to your deployment

## 🎉 Success!

Your luxury travel website is now live at:
- **http://cctravelhub.xyz**
- **http://www.cctravelhub.xyz**

The website features:
- ✨ Stunning luxury design with animations
- 📱 Fully responsive mobile experience
- 🌍 Auto-rotating destination showcase
- 💬 WhatsApp integration (+971 58 524 2945)
- 📧 Contact forms (info@cctravelhub.xyz)
- 🎨 Premium UI with glass morphism effects
