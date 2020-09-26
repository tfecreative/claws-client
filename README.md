# <img src="https://i.ibb.co/3N7Nztz/claw.png" alt="claw" height="40"> Claws Client

## ... Claws?

Discover claw machines nearby and share your favorite local spots with others.

## Project

Claws web application built with TypeScript and React. Client uses Redux with Redux Saga and includes unit tests as well as end-to-end tests for core functionality.

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
 ┃ ┗ 📜_main.scss
 ┣ 📜index.scss
 ┣ 📜index.tsx
 ┣ 📜serviceWorker.ts
 ```

## Status

This project is currently in development.

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
