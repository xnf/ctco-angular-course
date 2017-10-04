# Comics

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.0.

## Homework Assignment prerequisites

1. clone project or check out latest master.
2. install dependencies using `npm install`
3. launch JSON backend server with `json-server db.json` in one process. It must stay up for DB to run.
4. run CLI dev server with `npm start` in other process. It must stay up for dev rebuilds and live server to workk.

## Homework Assignment

1. "Show upload form" button is broken now and shows modal popup instead of new form. 

    1.1. Move "new comic" form to the modal popup. 
    
    1.2. Close the popup after new comic was added. 
         Tip: use this to access modal in code
         
         @ViewChild('newComicModal') newComicModal: Modal
         // ...
            this.newComicModal.close()
         // ...
          
2. Add "required" to the "image url" field as well.
    
    2.1. Display "Please specify image url" when field is pristine
    
    2.2. Display error message "Image url is required!" when field was touched and is still invalid

    2.3. Set button class to "btn-default" when form is not valid and to 'btn-success' when form is valid

3. Move "Add new" to own component. You may put it same "comics-list" module that was created in last homework. 

    3.1. generate new component using `ng g c add-comic-form`
    
    3.2. Move HTML from app.component.html
    
    3.3. Move comics creation related code form app.component.ts

    3.4. app.component.html now should contain only jumbotron, comic list and this new component
    

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
