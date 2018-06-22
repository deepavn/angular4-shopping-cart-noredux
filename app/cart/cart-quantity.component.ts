
import { Component, OnInit, Input, Output, Pipe, PipeTransform } from '@angular/core'



import { CartItem } from './cart-item.model';
import { CartService } from '../cart/cart.service';

@Component({
    selector: 'cartItem-quantity',
    templateUrl: './cart-quantity.html'
})



export class CartQuantityComponent implements OnInit {
    @Input() childShopItem: CartItem

    shopItem: CartItem


    constructor(private cartService: CartService) {
        console.log(this.childShopItem)
    }

    increment() {
        this.cartService.addToCart(this.childShopItem)
    }

    decrement() {
        this.cartService.removeFromCart(this.childShopItem)
    }

    ngOnInit() {


    }

    resetItems() {

    }
}