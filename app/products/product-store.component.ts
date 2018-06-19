import { Component, OnInit } from '@angular/core'
import { Product } from './product.model'
import { products } from './product.data'
import { ProductService } from "./product.service"
import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'products-store',
    templateUrl: './product-store.html'
})

export class ProductStoreComponent implements OnInit {
    constructor(private productService: ProductService) {
    }

    products$: Product []
    myProductsFromHttp: Product[] = []

    ngOnInit(): void {

        /* This section shows that you can get products data from external server, using httpClient Module
            The Angular http.get returns an RxJS Observable        
            ***************************** 
   ***************************** */

        this.products$ = this.productService.getAllProducts()

   
    }
}





