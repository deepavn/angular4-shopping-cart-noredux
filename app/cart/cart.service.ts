import { Injectable, Inject } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { LoadState, SaveState } from '../shared/local-storage'
import { AppState } from '../core/app-state'
import { Cart } from './cart.model'
import { CartItem } from './cart-item.model'


@Injectable()
export class CartService {

   
    getCart(): Cart {

        let myData: Cart;
      
        return myData
    }

    reset() {

    }

    deleteItem(DelItem) {

    }

    addToCart(AddItem) {

    }

    removeFromCart(RemItem) {
        
    }
}