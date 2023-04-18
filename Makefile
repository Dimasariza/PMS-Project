build:
	docker-compose build --no-cache --force-rm

stop:
	docker-compose stop

up:
	docker-compose up -d

migrate:
	docker exec laravel-app bash -c "php artisan migrate"

migrate-fresh:
	docker exec laravel-app bash -c "php artisan migrate:fresh"
