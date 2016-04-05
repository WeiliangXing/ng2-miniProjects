npm # ng2-miniProjects
The collection of miniProjects written in ng2 

## project 1: project1 
quick start project with ng2 + gulp with update and refactored version
### Notes:
1. Compiled files will be saved intto build/app in tsconfig.ts
2. bs-config.json will config live-lint server to serve content from build directory
3. gulpfile.ts will be tasks to compile, copies assets to build directory
4. need build project by npm run clean & npm run build
5. npm run server
### Reference:
https://www.webcodegeeks.com/javascript/angular-js/quickstart-angular2-typescript-gulp/

## project 2: project2
Http client(REST Web Services) with ng-2 with update and refactored version
### Notes:
Set backend:use LoopBack
1. npm install -g strongloop
2. create new loop project: slc loopback
3. in new folder: slc loopback:model
? Enter the model name: bookmark
? Select the data-source to attach bookmark to: db (memory)
? Select model's base class PersistedModel
? Expose bookmark via the REST API? Yes
? Custom plural form (used to build REST URL):
? Common model or server only? common
4. node . : start backend server
5. add new in post of bookmark in browser
6. Now all data in localhost:3000/api/bookmarks
### Reference:
https://www.youtube.com/watch?v=0RIrdFfy9t4

## project 3: project3
Real time twitter search in ng2 with Pusher with update and refactored version

### Issue:
Cannot stream from twitter by pusher; potential issue: unclear mechanism of how to make pusher webhook works.
1. issue: pusher webhook seems not hook any tweets, thus no stream shown. Need learn more about how coonect to pusher.
### Reference:
https://github.com/pusher-community/realtime-twitter-search-angular2


## project 4: project4
Rock paper scissors game in ng2 with update and refactored version.
1. This is a project practising EventEmitter
### Reference:
http://angular-craft.com/building-a-rock-paper-scissors-game-with-angular-2/

## project 5: project5
Minesweeper game in ng2 with update and refactored version.
### NOTE:
need npm install immutable
### Issue:
tile.get() is not working; unclear its mechanism with Immutable.JS.
### Reference:
http://www.jvandemo.com/how-to-build-minesweeper-using-angular-2-and-immutable-js/


## project 6: project6
The project to build a mini e-commerce web
Here learn how to filter data and update multiple views

### Reference:
http://blog.devcross.net/2016/03/13/angular-2-create-a-simple-ecommerce-site/

## project 7: project7
The project to build admin site
Here learn advanced layout and animation techinques.

### Reference:
https://github.com/start-angular/ani-angular-2/blob/master/README.md

## project 8 : project8
The project use gulp to make structured fie arrangement.
dev source files in /dev; compiled scss/js files are in corresponding folders.
the project aims for weather report; in development.
### Reference:

https://github.com/mschwarzmueller/angular2-weather-app-tut

