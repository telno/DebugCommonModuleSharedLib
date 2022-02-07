# Debugging for issue with shared Angular library

## Update: this issue was resolved by:
- adding "preserveSymlinks: true" to the package.json like so:
```
"build": {
   "builder": "@angular-builders/custom-webpack:browser",
   "options": {
       "preserveSymlinks": true
   }
}
```
- using yarn/npm link command instead of adding dependency in package.json via file://...
- deleting the module cache under ~/.angular/cache

## This repro project was constructed following these steps:


### Create common library

- ng new CommonLibWorkspace --no-create-application
- cd CommonLibWorkspace
- ng generate library MyFancyLib
	- Add CommonModule to imports of my-fancy-lib.module.ts
	- Add *ngIf statement to component in MyFancyLib
- ng build

### Create Angular Web App

- cd ..
- ng new WebAppTest
- yarn add file:../CommonLibWorkspace/dist/my-fancy-lib
- add MyFancyLibModule to app.module.ts
- add <lib-MyFancyLib></lib-MyFancyLib> to app.component.html
- ng serve

## Result:

Page fails to render, and browser’s console says “NG0303: Can't bind to 'ngIf' since it isn't a known property of ‘p’.”

