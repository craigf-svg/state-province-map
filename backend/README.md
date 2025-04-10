# Backend for State and Province Info

This backend provides an API for managing states and provinces information using PHP and MySQL. Environment variables are handled with phpdotenv. To set up, install dependencies with Composer, configure your .env file, and start the server to access the endpoints.

Install your dependencies using `composer install`

If running locally, run your PHP server from this folder using `php -S localhost:8000`

## Database Format

Make sure your `states` and `provinces` MySQL tables have columns as

- `id INT PK NN`
- `name VARCHAR(45) NN`
- `abbreviation VARCHAR(2) NN`
- `land_mass DECIMAL(10,2) NN`
- `density DECIMAL(10,2) NN`

## API Documentation
- **GET /api/states** - Fetch U.S. states with landmasses.

- **GET /api/provinces** - Fetch Canadian provinces with landmasses.

Both endpoints return the data sorted in descending order by landmass.