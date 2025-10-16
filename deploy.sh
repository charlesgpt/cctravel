#!/bin/bash

# C&C Travel Hub Deployment Script
# This script deploys the React application to a Google Cloud instance

set -e

echo "🚀 Starting C&C Travel Hub deployment..."

# Update system packages
echo "📦 Updating system packages..."
sudo apt update
sudo apt install -y nginx git nodejs npm

# Install Node.js 18 (LTS)
echo "📦 Installing Node.js 18..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone or update repository
REPO_DIR="/var/www/cctravel"
if [ -d "$REPO_DIR" ]; then
    echo "📁 Updating existing repository..."
    cd $REPO_DIR
    git pull origin main
else
    echo "📁 Cloning repository..."
    sudo mkdir -p /var/www
    sudo git clone https://github.com/charlesgpt/cctravel.git $REPO_DIR
    sudo chown -R $USER:$USER $REPO_DIR
    cd $REPO_DIR
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the application
echo "🔨 Building application..."
npm run build

# Configure Nginx
echo "🌐 Configuring Nginx..."
sudo tee /etc/nginx/sites-available/cctravel > /dev/null <<EOF
server {
    listen 80;
    server_name cctravelhub.xyz www.cctravelhub.xyz;
    
    root /var/www/cctravel/dist;
    index index.html;
    
    # Handle React Router
    location / {
        try_files \$uri \$uri/ /index.html;
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
EOF

# Enable the site
sudo ln -sf /etc/nginx/sites-available/cctravel /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
echo "🔧 Testing Nginx configuration..."
sudo nginx -t

# Restart Nginx
echo "🔄 Restarting Nginx..."
sudo systemctl restart nginx
sudo systemctl enable nginx

# Set up firewall
echo "🔒 Configuring firewall..."
sudo ufw allow 'Nginx Full'
sudo ufw allow ssh
sudo ufw --force enable

echo "✅ Deployment completed successfully!"
echo "🌐 Your website should now be available at:"
echo "   http://cctravelhub.xyz"
echo "   http://www.cctravelhub.xyz"
echo ""
echo "📝 Next steps:"
echo "   1. Set up SSL certificate with Let's Encrypt (recommended)"
echo "   2. Configure email service (Resend API)"
echo "   3. Set up monitoring and backups"
