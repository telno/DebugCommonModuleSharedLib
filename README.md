# Debugging for issue with shared Angular library


## This repro project was constructed following these steps:


- ng new CommonLibWorkspace --no-create-application
- cd CommonLibWorkspace
- ng generate library MyFancyLib
* Add CommonModule to imports of my-fancy-lib.module.ts
* Add *ngIf statement to component in MyFancyLib
- ng build


- cd ..
- ng new WebAppTest
- yarn add file:../CommonLibWorkspace/dist/my-fancy-lib
- add MyFancyLibModule to app.module.ts
- add <lib-MyFancyLib></lib-MyFancyLib> to app.component.html
- ng serve

Result:

Page fails to render, and browser’s console says “NG0303: Can't bind to 'ngIf' since it isn't a known property of ‘p’.”

