import { Injectable, Inject } from '@angular/core'
import { Product } from './product.model'
import { ProductCategory } from './product-category.model'
import { productCategories } from './product-category.data'
import { products } from './product.data'
import { Http, Response, HttpModule } from '@angular/http';
//import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable()
export class ProductService {

  constructor(private http: Http) {

  }
  mySelectedProducts: Product[] = []
 
  getAllProducts(): Product[] {
    return products;

  }

  getSelectedProducts(): Product[] {
    return this.mySelectedProducts
  }

  setSelectedProducts(myProduct: Product) {
    this.mySelectedProducts.push(myProduct)
  }

  getProductDetails(myProductId: number): Product {
    let pList: Product[] = products
    let myProduct: Product = pList.find(item => item.productId === myProductId)
    if (myProduct)
      return myProduct
    else
      undefined
  }

  getProductCategoryDetails(myCategoryId: number): ProductCategory {
    let cList: ProductCategory[] = productCategories
    let myCategory: ProductCategory = cList.find(item => item.productCategoryId === myCategoryId)
    if (myCategory)
      return myCategory
    else
      undefined
  }

}

