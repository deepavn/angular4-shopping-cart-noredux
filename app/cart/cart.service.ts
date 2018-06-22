import { Injectable, Inject } from '@angular/core'
import { LoadState, SaveState } from '../shared/local-storage'
import { AppState } from '../core/app-state'
import { Cart } from './cart.model'
import { CartItem } from './cart-item.model'
import { ProductService } from '../products/product.service'
import { Product } from '../products/product.model'

@Injectable()
export class CartService {
    myData: Cart
    constructor(private productService: ProductService) {
        this.myData = <Cart>{ cartItems: [], totalItems: 0, totalPrice: 0 }
    }


    getCart(): Cart {

        console.log(this.myData)
        // this.myData.cartItems = this.productService.getSelectedProducts()
        this.myData.totalItems = this.myData.cartItems.length
        let totalp = 0;
        this.myData.cartItems.forEach(data => totalp = totalp + (data.price * data.quantity))
        this.myData.totalPrice = totalp

        return this.myData
    }

    reset() {

    }

    deleteItem(DelItem: CartItem) {
        this.myData.cartItems.splice(this.myData.cartItems.indexOf(DelItem), 1);
        this.getCart()
    }

    addToCart(AddItem: CartItem) {
        console.log(this.myData)

        let ind: number = this.myData.cartItems.findIndex(i => i.id === AddItem.id)
        console.log(ind)
        if (ind >= 0) {

            this.myData.cartItems[ind].quantity = this.myData.cartItems[ind].quantity + 1


        }
        else
            (
                this.myData.cartItems.push(AddItem)
            )
        this.getCart()
    }

    removeFromCart(RemItem: CartItem) {
        console.log(RemItem)

        let ind: number = this.myData.cartItems.findIndex(i => i.id === RemItem.id)
        if (this.myData.cartItems[ind].quantity > 1) {

            console.log(ind)
            if (ind >= 0) {

                let myQ = this.myData.cartItems[ind].quantity - 1
                if (myQ > 0)
                    this.myData.cartItems[ind].quantity = myQ
                else
                    this.deleteItem(RemItem)
            }
            else
                (
                    this.myData.cartItems.push(RemItem)
                )
            this.getCart()
        }
    }
}