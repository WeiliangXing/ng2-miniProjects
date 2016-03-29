import {Injectable, EventEmitter} from 'angular2/core';
import {ProductModel} from './product.model';
import {ProductGenerator} from './product.generator';

@Injectable()
export class ProductService {
    products: ProductModel[] = [];
    serviceEvent$: EventEmitter<ProductModel[]> = new EventEmitter();

    constructor() {
        this.products = ProductGenerator.getProducts();
    }

    /**
     * returns a Promise and pass the full list of products in to the resolve function
     */
    load(): Promise<ProductModel[]> {
        return Promise.resolve(this.products);
    }

    /**
     * filter products and emit event for all subscribers
     * @param filters string[]
     */
    filter(filters: string[]): void {
        /**
         * if no filters are passed in to the function, emit the event with the full list of products
         */
        if (filters.length === 0) {
            this.serviceEvent$.emit(this.products);
        }
        /**
         * if filters are passed in to the function, emit the event with a filtered subset of the products
         */
        else {
            this.serviceEvent$.emit(this.products.filter((product)=> {
                let productHasAllFilters = true;

                /**
                 * every input filter has to match the products filters to get in the result-list
                 */
                filters.map((feature)=> {
                    if (product.filters.indexOf(feature) > -1 && productHasAllFilters === true) {
                        productHasAllFilters = true;
                    } else {
                        productHasAllFilters = false;
                    }
                });

                return productHasAllFilters;
            }));
        }
    }
}
