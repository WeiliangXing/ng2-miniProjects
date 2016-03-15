npm # ng2-miniProjects
The collection of miniProjects written in ng2

## project 1: project1 
quick start project with ng2 + gulp
### Notes:
1. Compiled files will be saved intto build/app in tsconfig.ts
2. bs-config.json will config live-lint server to serve content from build directory
3. gulpfile.ts will be tasks to compile, copies assets to build directory
4. need build project by npm run clean & npm run build
5. npm run server

## project 2: project2
Http client(REST Web Services) with ng-2
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

## project 3: project3
Real time twitter search in ng2 with Pusher
