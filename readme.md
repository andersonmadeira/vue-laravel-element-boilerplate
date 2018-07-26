# vue-laravel-element-boilerplate

### Before you dive into

This is intended to be a modern boilerplate for web apps. It features a custom webpack setup built from scratch having simplicity in mind. If you love VueJS and Laravel and you need an small but eficient boilerplate to quickly start your brand new app, you're in the right place.

#### Dependencies

Some major dependencies are listed below:

##### Back end:

| Name | Version |
| ------ | ----- |
| PHP | >= 5.6.30 |
| MySQL | Ver 14.14 Distrib 5.5.46 |
| Lavavel | 5.4 |

##### Front end

| Name | Version |
| ------ | ----- | ----- |
| Node | >= 8.x |
| Vue | >= 2.x |
| Webpack | >= 4.x |
| Babel | >= 6.x |

For more dependencies please check composer.json (back) and package.json (front)

## Installation

Clone the repo

#### Back end

1. Install all deps with:
   - `composer install`
2. Copy `.env.example` to `.env`:
   - `php -r "file_exists('.env') || copy('.env.example', '.env');"`
3. Update `.env` vars
   - `vim .env`
4. Generate the app key:
   - `php artisan key:generate`

#### Front end

1. Install deps:
  - `npm install`
2. On the `.env` file, set your api url (aka the url where your backend is located). In some setups this may be equal to your APP_URL:
  - `API_URL=http://localhost:8080/`

## Development

#### Back end

To run your api app just serve your app:

`php artisan serve`

Save the url you'll get for later.

#### Front end

Just run:

`npm run dev`

This will give you a fresh webpack dev server with hot reload enabled

## Testing

#### Back end

You can define unit and feature test with artisan and then run all them with:

`vendor\bin\phpunit`

## Deploy

To deploy your app just do all the steps already known for the front, and then build the front to the public folder with:

`npm run build`
