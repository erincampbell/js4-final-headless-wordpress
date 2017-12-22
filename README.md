Allhomes News headless React feed with Wordpress backend (for pages, more so than posts, which are a feed from domain.com.au/news)

It's a very basic version, with the intent to continue building on and progressing.

## WordPress Backend
The Wordpress backend is available after running `yarn start` in the root folder:
* The WordPress admin is at [http://localhost:8080/wp-admin/](http://localhost:8080/wp-admin/) default login credentials `js4` / `finalAssignment!`

### Run the app (frontend)

* cd into the frontend folder and run `yarn build` after running `yarn` to install all dependencies
* run `yarn start` to run page

### Import Data

The news feed comes from domain.com.au/news via the API:

### Current Status

* News page exists with feed from domain.com.au/news
* Using Allhomes header and footer components

### Next Steps

* Wordpress page and posts re-routing correctly
* Images in feed
* Get categories working
* Find best way to build with CSS
* Then fix up and improve CSS
* React router page redirects for posts
* Further design elements
* SEO elements
* Refactor
* Deploy

### Issues

* Getting external component style files to be included
