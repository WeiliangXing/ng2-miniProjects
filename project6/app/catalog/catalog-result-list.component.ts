import {Component, OnInit, OnDestroy, EventEmitter} from 'angular2/core';
import {ProductModel} from './product.model';
import {ProductService} from './product.service';

@Component({
    selector: 'catalog-result-list-component',
    template: `
    <div class="col-md-10">
        <div class="row">
        <div class="col-md-12">
            Matching Products: {{productCount}}
            <hr>
        </div>
        </div>
        <div class="row" *ngFor="#product of products">
            <div class="col-md-12">
                <h1>{{product.name}}</h1>
                <div>Rating: {{product.rating}}</div>
                <div>Price: {{product.price}}</div>
            </div>
            <div class="col-md-12">
                <hr>
            </div>
        </div>
    </div>
    `
})

export class CatalogResultListComponent implements OnInit, OnDestroy {
    private subscriber: EventEmitter<ProductModel[]>;

    products: ProductModel[] = [];
    productCount: number = 0;

    constructor(private _service: ProductService) {
    }

    /**
     * update variables used in the template (change detection)
     */
    private updateProducts(products: ProductModel[]) {
        this.productCount = products.length;
        this.products = products.slice(0, 20);
    }

    ngOnInit() {
        /**
         * subscribe to the update event of ProductService to keep result-list in sync
         */
        this.subscriber = this._service.serviceEvent$.subscribe((products: ProductModel[])=> {
            this.updateProducts(products);
        });

        /**
         * load all products to display the initial list
         */
        this._service.load().then((products: ProductModel[])=> {
            this.updateProducts(products);
        });
    }

    ngOnDestroy() {
        /**
         * unsubscribe from ProductService event
         */
        this.subscriber.unsubscribe();
    }
}
