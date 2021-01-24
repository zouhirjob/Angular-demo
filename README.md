# DemoWbcLib

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

ng new demo-wbc-lib --createApplication=false --interactive=false
ng generate application web-component
ng generate library ui-shared

npm install @ngx-translate/core @ngx-translate/http-loader rxjs --save







##  Librairie angular
D'après mon expérience, il existe 2 cas d'utilisation courants pour les bibliothèques angulaires:

- Création des composants réutilisables pour le partage entre les applications.
- Création d'une fonctionnalité/service partagée 

Bien que l'utilisation d'une librairie est bien claire et necessaire dans notre projet, il faut bien analyse avant meme de commencer a faire la librairie, il faut bien commencer dans le projet et diterminer que le besoin est bien claire que on a le meme besoin dans un autre projet. nous pouvons toujours écrire des besoin dans le cadre d'un module angular partagé au sein de votre application et les extraire dans une bibliothèque si nécessaire.

## Création d'une Librairie angular
Nous allons deja cree une Librairie Angular pour le theme et les composantes de menu et header, ainsi qu'une application de démonstration pour utiliser cette Librairie. 

Nous pouvons créer une autre avec les commandes suivantes:

ng new demo-wbc-lib --createApplication=false --interactive=false
ng generate application web-component
ng generate library ui-shared


Si vous ouvrer la structure generer vous aller trouver un dossier de projets contenant un sous-dossier pour chacune de la librarie ( ui-shared) et l'application (web-component) que nous venons de générer.

Pour builder la Librairie : 

ng build ui-shared

Si nous regardons dans le dossier dist, nous verrons le resultat du build de la librairie et qu'à l'intérieur nous avons un certain nombre de dossiers différents contenant l'application dans différents formats de modules adaptés à différents consommateurs, ainsi qu'un dossier contenant Définitions TypeScript.

- bundles - format du module UMD.
- esm5 - format de module qui utilise principalement es5, mais aussi la syntaxe d'import / export d'es6.
- esm2015 - format de module qui utilise es2015 / es6.
- fesm5 - version aplatie de esm5.
- fesm2015 - version aplatie de peerDependencies esm2015.
- lib - Définitions TypeScript pour la bibliothèque.
Ce format s'appelle Angular Package Format, et c'est le format utilisé comme sortie de ng-packagr, l'outil utilisé par Angular CLI pour builder la librairie. (https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/preview)

Structurer de la Librairie Angular
Le contenu de la bibliothèque ressemble actuellement à ceci:

**

Ensuite, nous ajouterons un composant, un pipe et une directive.Nous suivrons la facon de creer un composant par module 
- cela permettra à une application consommatrice d'importer uniquement les modules de la librairie qui l'intéressent, puis pour tous les autres modules non utiliser il seront pas ajouter dans le bundle final (tree shaken during the build process)* Je recommande vivement de le faire, car cela fera vraiment une différence dans la taille des bundles d'applications tout au long du l'application evolue.

ng generate module components/em-header
ng generate component components/em-header

ng generate module pipes/credit-card
ng generate pipe pipes/credit-card/credit-card

ng generate module pipes/account-number
ng generate pipe pipes/account-number/account-number

ng generate module directives/em-tooltip
ng generate directive directives/em-tooltip/em-tooltip



Bien sûr, cette structure peut être ajustée, mais l'éléments importants:

Avoir un composant par module pour (tree shaken) des modules / composants inutilisés.

L'exception à cela est que les composants qui sont toujours utilisés ensemble doivent être conservés dans le même module.


Ensuite, nous devons ajouter chacun des composants que nous avons créés aux export de son module:

il faut mettre a jour public_api.ts pour exporter tous les fichiers de la bibliothèque que nous souhaitons exposer


Utilisation de la librairie dans le demo ou toute autre application
Pendant le développement, la meilleure façon de consommer notre bibliothèque est d'utiliser 
 - npm link
 Cela nous permettra de créer un lien symbolique depuis un répertoire node_modules de notre application vers le build de la librairie dans le dossier dist.

cd dist / ui-shared
npm link

Depuis le dossier racine du projet depuis n'importe où sur notre machine locale. 
npm link ui-shared

build la librairie avec un watch 

ng build ui-shared --watch

ng build demo

en même temps exécutons ng serve dans une autre terminal.
ng serve

Cela nous permettra de développer dans l'application et (une ou plusieurs) librairie liées simultanément, et de voir l'application se recompiler à chaque modification du code source de la bibliothèque.


https://medium.com/angular-in-depth/improve-spa-performance-by-splitting-your-angular-libraries-in-multiple-chunks-8c68103692d0



https://guide-angular.wishtack.io/angular/testing/unit-testing/unit-test-synchrone

Mise en place d’un test unitaire avec Angular
Angular (Angular Cli) génère automatiquement un fichier de test, à chaque fois que nous ajoutons un Component, un Service.
Chaque fichier de test respecte le format : {nom du fichier}.spec.ts.

Il suffit d'utiliser les 3 fonctions suivantes pour implémenter un premier test :
describe : pour définir une suite (ou groupe) de "specs".
it : pour définir une "spec" (ou un test).
expect : pour implémenter les assertions.

Tester un Service
Nous allons tester que notre service renvoie bien les éléments de notre menu a construire.

Or, notre service appelle une API. API qui va être requêter via du HTTP, et donc depuis le HttpClient d’Angular.





Jasmine
Jasmine https://jasmine.github.io/ est un framework (produit par Pivotal https://pivotal.io/, cf. https://www.pivotaltracker.com) extensible dédié aux tests sur "browser" et sur NodeJS.

C'est le JUnit du JavaScript.

Il inclut tout le nécessaire pour :

définir des suites de tests (fonctions describe et it),

implémenter des assertions de toute sorte (fonction expect),

implémenter rapidement des "Spies" (alias mocks) (fonctions createSpy, createSpyObj et spyOn).

Documentation et Introduction
https://jasmine.github.io/api/3.6/global

​https://jasmine.github.io/tutorials/your_first_suite


https://guide-angular.wishtack.io/angular/testing/unit-testing/unit-test-synchrone

https://stackblitz.com/edit/angular-tooltip-directive?file=app%2Ftooltip.directive.ts