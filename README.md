# Comics

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.0.

## Homework Assignment prerequisites

1. clone project or check out latest master.
2. install dependencies using `npm install`
3. launch JSON backend server with `json-server db.json` in one process. It must stay up for DB to run.
4. run CLI dev server with `npm start` in other process. It must stay up for dev rebuilds and live server to workk.

## Homework Assignment

1. Move comics list to own module. Name of the module is up to you. Use ComicsList for example. 

    1.1. generate new module using `ng g module comics-list`
    
    1.2. Move HTML from app.component.html
    
    1.3. Move comics list related code form app.component.ts

    1.4. app.component.html now should contain only two <app-*> web components. The jumbotron with nested form is already there. 
    
2. For a level-up:

    2.1. Move business logic to own - comic list service.

    2.2. Add the new item to existing list. Tip: 
    
                    ```
                    get comics() {
                        return this.comicsListService.comics
                    }
                    
                    ```

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
