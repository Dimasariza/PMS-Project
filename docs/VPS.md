# Setup for VPS
Currently, this is for dev setup.

### Environment:

| | |
|---|---|
|Service    | DigitalOcean              |
| Image     | Ubuntu 22.10 x64          |
| Size      | 1 vCPU, 1GB / 10GB Disk   |
| Region    | Singapore (SGP1)          |


### Initial Setup
```bash
sudo apt update
sudo apt upgrade
sudo apt install git
```

### Install MySQL
1. Install MySQL
   ```bash
   sudo apt install mysql-server -y
   ```

2. Make sure every user should login to MYSQL with a password
   ```bash
   mysql -u root -p
   show databases;
   use mysql;
   update user set plugin='mysql_native_password' where user='root';
   flush privileges;
   exit;
   ```

3. Setup secure installation
   ```bash
   sudo mysql_secure_installation
   ```
   And then just follow the step by mysql installation.

   After setup for password, for the rest of questions, type "y" for YES


4. Test installation
   ```bash
   sudo mysql -u root -p
   ```
   And then type the password

5. Create database for the project
   ```bash
   CREATE DATABASE pms_db;
   ```

### Install Nginx
1. Install Nginx
   ```bash
   sudo apt install nginx
   ```

2. Copy your ip address, and paste it to a new browser page. If there is "Welcome to nginx" page, you're good to go.

3. Clone the project to `/var/www`
   ```bash
   cd /var/www
   git clone -b backend https://github.com/Dimasariza/PMS-Project.git
   cd PMS-Project
   ```

### Install Composer
1. Install the required packages
   ```bash
   sudo apt install php-cli unzip -y
   ```

2. Install composer
   ```bash
   cd ~
   curl -sS https://getcomposer.org/installer -o /tmp/composer-setup.php
   ```

3. Make composer as a system-wide command named `composer`, under `/usr/local/bin`
   ```bash
   sudo php /tmp/composer-setup.php --install-dir=/usr/local/bin --filename=composer
   ```

### Install PHP
1. Install php
   ```bash
   sudo apt install php -y
   ```

2. Remove apache2
   ```bash
   sudo apt remove apache2
   ```

3. Install php dependencies
   ```bash
   sudo apt install php-mbstring php-xml php-bcmath php-curl
   ```

### Setup Project
1. Go to `src` inside `/var/www/PMS-Project` (clone in `/var/www` if the project is not exists)
   ```bash
   cd /var/www/PMS-Project
   cd src
   ```
2. Run composer install
   ```bash
   composer install
   ```

3. Save `.env.example` as current .env
   ```bash
   cp .env.example .env
   ```

4. Generate key for .env
   ```bash
   php artisan key:generate
   ```

5. Install fpm & mysql deps
   ```bash
   sudo apt install php8.1-fpm php8.1-mysql
   ```
   (Install the correct php version by typing `php --version` before installing fpm)

### Modify Nginx Configuration
**Note**: This is not a best practice, you should do like `sites-available` and point it to `sites-enabled`

1. Move to `/etc/nginx`
   ```bash
   cd /etc/nginx
   ```
2. Move to `sites-available`
   ```bash
   cd sites-available/
   ```

3. Make a file and edit in nano/vim
   ```bash
   nano staging.pms.com
   ```

4. Copy this. Edit the `server_name`. Save and exit the editor.
   ```nginx
   server {
       listen 80;
       server_name <YOUR_IP_OR_URL>;

       root /var/www/PMS-Project/src/public;
       index index.php;

       error_page 403 /403.json;
       location /403.json {
           internal;
           add_header 'Content-Type' 'application/json charset=UTF-8';
           return 403 '{"statusCode":403,"message":"Forbidden"}';
       }

       location / {
           try_files $uri $uri/ /index.php?$query_string;
       }

       location ~ \.php$ {
           try_files $uri = 404;
           fastcgi_pass unix:/run/php/php8.1-fpm.sock;
           fastcgi_index index.php;
           fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
           include fastcgi_params;
       }
   }
   ```

5. Create a symbolic link to `sites-enabled`
   ```bash
   sudo ln -s /etc/nginx/sites-available/<YOUR_PROJECT_NAME> /etc/nginx/sites-enabled
   ```

6. Give write access to storage and cache
   ```bash
   sudo chown -R www-data.www-data /var/www/PMS-Project/src/storage
   sudo chown -R www-data.www-data /var/www/PMS-Project/src/bootstrap/cache

7. Restart nginx
   ```bash
   sudo systemctl restart nginx
   ```