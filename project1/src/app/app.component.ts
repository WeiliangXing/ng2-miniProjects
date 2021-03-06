// import {Component, OnInit} from "angular2/core";
// import {RouteConfig, RouterLink, ROUTER_DIRECTIVES} from "angular2/router";
//
// import {TaskListComponent} from "./todo/components/task-list.component";
// import {AboutComponent} from "./about/components/about.components";
//
// @Component({
//     selector: "app",
//     templateUrl: "./app/app.html",
//     directives: [TaskListComponent, AboutComponent, RouterLink, ROUTER_DIRECTIVES]
// })
// @RouteConfig([
//     {path: '/tasks', component: TaskListComponent, as: 'TaskList'},
//     {path: '/about', component: AboutComponent, as: 'About'}
// ])
// export class AppComponent implements OnInit {
//     ngOnInit() {
//         console.log("Application component initialized ...");
//     }
// }
import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
@Component({
    selector: "app",
    templateUrl: "./app/app.html"
})
export class AppComponent implements OnInit {
    ngOnInit() {
        console.log("Application component initialized ...");
    }
}
