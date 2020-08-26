# AngularGiphy

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.25.

## Project Description

The project is a Single Page Application that uses the Gipher API. The project is organised into various modules which encapsulates a seperate functionality. 
The user is redirected to Trending page, which displays the top 25 Trending giphs fetched from the Trending endpoint of the Gipher API. The user can search using a keyword and get top 25 most relevant Giphs. 
A user needs to Login in order to view and modify the Favorites list. The favorites path is gaurded and only an authenticated user with a 'bearerToken' can login into the application.

App module is the main module which consists of the following 
1. Card - Card Component is a dumb component and a child of Search Component, Trending Component and Favorites component.
2. Dashboard - dashboard is the default route for the SPA, which consists of a router module to display the Trending Giphs
3. Favorites - Favorites module consists of Favorite Components to display the favorite giphs as selected by the authenticated user. This route is guarded to prevent unauthorized access. It uses Card Component to render them into cards.
4. Footer - Footer Component consists of the application footer with social media links and a subscription form.
5. Header - Header Component consists of the application header with logo and links to Trending, Search, Favorites and login
6. Login - Login Module consists of the login component which provides a login form
A user is authenticated to view and modify the favorite list.
7. Models - models consists of Giphy model and LoginUser model
8. SearchGiphs - SearchGiph displays the searched Giphs and uses Card Component to render them into cards.
9. Trending Giphs - It displays the Trending Giphs and uses Card Component to render them into cards.
10. Services ->
Authentication Service - authenticates user, generates token and other functionalities.
Giphs Service - manages GET, POST request to Gipher API and local server
Router Service - manages routing to other components 
11. CanActivateRouteGuard - It guards favorites from unauthenticated access and prevents deep link access.

## Running the application

1. run `npm install` to install various dependencies
2. run `npm build`
3. run `json-server --watch -server.json` to run the local server on Localhost:3000
4. run `ng e2e` to execute end to end test cases.
5. run `ng serve` to run the application frontend on port 4200.
6. use the credentials (meghna, pass) for login

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


