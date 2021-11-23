# module-federetion-multirepo-microfrontends

This is an example of a **Angular** microfrontends on **multirepo** implemented with **Module Federation**.
> P.S Use branch 3 until i merge them to main

## How to run
- Run `npm install` or `npm i` on following folders
  -  `shell`
  -  `homepage`
  -  `reports`
  -  `auth-lib`
- Run `npm start` in the same folders, **EXEPT** `auth-lib` and in general the libraries

## Features Implemented -- OR NOT!
- [x] :tada: Create Basic microfrontends 
- [x] :tada: Connect them with routing (reports MF have nested routing too)
- [x] :tada: Communicate between apps with shared library
- [ ] UI Component Library to share between apps
- [ ] Add React application
- [ ] Share data between **React** and **Angular** apps 
- [ ] Better Documentation 

## Refs
- @angular-architects/module-federation https://www.npmjs.com/package/@angular-architects/module-federation
- Module Federation Examples https://github.com/module-federation/module-federation-examples
- Micro Frontend, Module Federation with Manfred Steyer https://www.youtube.com/watch?v=XP2TXi8g1AM
