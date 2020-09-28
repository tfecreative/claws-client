# <img src="https://i.ibb.co/3N7Nztz/claw.png" alt="claw" height="40"> Claws Client

## ... Claws?

Discover claw machines nearby and share your favorite local spots with others.


<img src="https://user-images.githubusercontent.com/62036740/94477274-a7b4bd80-019f-11eb-9a9e-0b622fd30c45.png" height="550" alt="Claws Screenshot">&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://user-images.githubusercontent.com/62036740/94477277-a84d5400-019f-11eb-8024-feb3fcfaa11a.png" height="550" alt="Claws Screenshot">

## Project

Claws web application built with TypeScript and React. Client uses Redux with Redux Saga and includes unit tests as well as end-to-end tests for core functionality.

⚠️**Notes**⚠️

This project is a demo and not meant for production. Client API Key must be
set and restrictions applied.

### Structure

This project features a module structure for react components as well as redux and redux sagas. Styles are mostly component-based, but some variables and mixins are available for improved consistency. In the file tree below, see the Home module and Core store for examples of the structure to be used for continued development.

``` 
📦src
 ┣ 📂App
 ┃ ┣ 📜App.scss
 ┃ ┣ 📜App.tsx
 ┃ ┗ 📜Routes.tsx
 ┣ 📂Home
 ┃ ┣ 📜Home.tsx
 ┃ ┗ 📜index.ts
 ┣ 📂store
 ┃ ┣ 📂core
 ┃ ┃ ┣ 📜actions.ts
 ┃ ┃ ┣ 📜reducers.ts
 ┃ ┃ ┣ 📜sagas.ts
 ┃ ┃ ┗ 📜types.ts
 ┃ ┣ 📂middleware
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂reducers
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂sagas
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂types
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜store.config.ts
 ┣ 📂styles
 ┃ ┣ 📂mixins
 ┃ ┃ ┣ ...
 ┃ ┃ ┗ 📜mixins.scss
 ┃ ┣ 📂typography
 ┃ ┃ ┗ 📜typography.scss
 ┃ ┣ 📂variables
 ┃ ┃ ┣ 📜...
 ┃ ┃ ┗ 📜variables.scss
 ┃ ┣ vendors
 ┃ ┃ ┗ ...
 ┃ ┃ ┗ vendors.scss
 ┃ ┗ 📜_main.scss
 ┣ 📜index.scss
 ┣ 📜index.tsx
 ┣ 📜serviceWorker.ts
 ```

## Status

This project is currently in development.

## Next

**Claw Machine Details**
Claw machine details modal to display location details when a marker on the map is clicked.

****
Claw machine details modal to display location details when a marker on the map is clicked.

## Build

``` 
$ yarn build
```

## Run

``` 
$ yarn start
```

## Test

### Unit Tests

``` 
$ yarn test
```

### E2E Tests

``` 
$ yarn cypress
```

Run e2e tests with cypress.

## Attributions

* Claw Machine Vectors by [Vecteezy](https://www.vecteezy.com/free-vector/claw-machine)
* Icons made by [Freepik](https://www.flaticon.com/authors/freepik) from [www.flaticon.com](https://www.flaticon.com/)
