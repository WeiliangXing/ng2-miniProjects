import {Component} from 'angular2/core';
import {SidebarComponent} from './sidebar.component';
import {CatalogResultListComponent} from './catalog-result-list.component';
import {ProductService} from './product.service';

@Component({
    template: `
    <div class="container-fluid">
        <div class="row">
            <div class="jumbotron"></div>
            <sidebar-component></sidebar-component>
            <catalog-result-list-component></catalog-result-list-component>
        </div>
    </div>
    `,
    directives: [SidebarComponent, CatalogResultListComponent],
    providers: [ProductService]
})

export class CatalogComponent {
}
