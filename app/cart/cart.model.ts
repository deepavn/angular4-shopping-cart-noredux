import { CartItem} from './cart-item.model'
import { Product } from '../products/product.model'
export interface Cart  {
    cartItems: CartItem[];
    totalItems: number;
    totalPrice: number; 
    
}