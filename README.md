# Homework Assignment

1. check out project
2. install dependencies using `npm install`
3. launch JSON backend server with `json-server db.json`
4. run CLI dev server with `npm start`
3. add missing functionality to "Add new comic form". Expected flow:

    5.1. type title for the new comic
    
    5.2. press "Add" button
    
    5.2. Execute addComic() method on AppComponent class
    
    5.4. Make new POST method in the RestService
    
    5.5. If everything is fine, you will receive REST server response with the new comic
     
    5.6. Update list to show the new comic (hint - either call "get" again, reload page or use array method `unshift()`)
    
6. For a level-up if it's easy:

    6.1. Add editor for "comic.description.p.img.title"
    
    6.2. Add image "comic.description.p.img.src" and "comic.description.p.img.title" for the newComic form
  

# Comics

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
