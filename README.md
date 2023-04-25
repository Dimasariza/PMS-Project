# PMS PROJECT Backend

## Note
- If you want to running it without a docker, just run in `/src` file with usual setup.
- Run `php artisan migrate:fresh --seed` after cloning in `/src`

### Prerequisites
- Docker 
- MinGW for Makefile (optional)

### Run
- Clone this repo branch
- run `docker-compose up -d`
- Copy .env.example as .env and change DB section to this

```bash
DB_CONNECTION=mysql
DB_HOST=mysql_db
DB_PORT=3306
DB_DATABASE=pms_project_db
DB_USERNAME=root
DB_PASSWORD=root
```

### Troubleshooting
1. If you get exception UnexpectedValueException:

   ```bash
   UnexpectedValueException
   The stream or file "/var/www/html/storage/logs/laravel.log" could not be opened in append mode: Failed to open stream: Permission denied 
   ```
   
   Open laravel docker container as a root and then do this command in `/var/www/html`
   
   ```bash
   docker exec -it --user=root laravel-app bash
   ```
   
   ```bash
   chown -R www-data:www-data *
   ```

   If it's still not working, try this
   ```bash
   chmod -R 777 storage/
   ```

<br>

2. If you get exception MissingAppKeyException:

   ```bash
   Illuminate\Encryption\MissingAppKeyException
   No application encryption key has been specified. 
   ```

   Open laravel docker container as a root and then do this command in `/var/www/html`

   ```bash
   docker exec -it --user=root laravel-app bash
   ```

   ```bash
   php artisan key:generate
   ```

<br>

3. If you get 403 forbidden from Apache

   Create file `.htaccess` in `src` root folder and copy this

   ```bash
   RewriteEngine On
   RewriteCond %{REQUEST_URI} !^/public/
   RewriteRule ^(.*)$ /public/$1 [L,QSA]
   ```
