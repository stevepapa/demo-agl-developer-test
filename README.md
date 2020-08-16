
# Demo (AGL Developer Test)

## About  
This is a small application built using Angular 10.0.6 to demonstrate consumption and parsing of a JSON API.

Rather than writing a single rxjs/groupBy function to produce the desired result I have attempted to demonstrate using some more of the available Angular functionality.

### Architecture and design

- All routes send the user to /cats which is the PageCatsComponent
- PageCatsComponent initialises with the loadData function, loading an array of people from PeopleService
- This people object is then reduced to a list of pets while injecting a key of the owner's gender
- The PageCatsComponent then passes this list of pets as inputs to two instances of ListPetsComponent
- The ListPetsComponent then processes the list using a FilterPetsPipe
- FilterPetsPipe takes the list of pets then filters results based on the defined args and also sorts alphabetically

*@(Recommended)TODO, some tests have been added but optimally would recommend increasing test coverage. Could also add error handling for API, etc.*

## Install
This project was built using;
- NodeJS v12.16.2 
- NPM 6.14.4
- Angular CLI 10.0.6

### Installing Angular CLI 
`npm install -g @angular/cli`

### Install dependencies
After you have cloned the project run the following command in the root directory to install modules. `npm install`

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

  
### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
  

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).  



### Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).



### Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


