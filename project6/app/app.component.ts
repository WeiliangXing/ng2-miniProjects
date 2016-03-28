import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeaderComponent} from './header.component';
import {CatalogComponent} from './catalog/catalog.component';

@Component({
    selector: 'app',
    template: `
    <header-component></header-component>
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES, HeaderComponent]
})

@RouteConfig([
    {path: '/catalog', component: CatalogComponent, name: 'Catalog'}
])

export class AppComponent {
}
