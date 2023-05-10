build:
	docker-compose build --no-cache --force-rm

stop:
	docker-compose stop

up:
	docker-compose up -d

app:
	docker exec -it laravel-app

migrate:
	docker exec laravel-app bash -c "php artisan migrate"

migrate-fresh:
	docker exec laravel-app bash -c "php artisan migrate:fresh"

seed:
	docker exec laravel-app bash -c "php artisan db:seed"

migrate-fresh-seed:
	docker exec laravel-app bash -c "php artisan migrate:fresh --seed"

scribe:
	docker exec laravel-app bash -c "php artisan scribe:generate --verbose"