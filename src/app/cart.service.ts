import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private  cart: Product[] = [];

  addToCart(product: Product): void {
    const existingProduct = this.cart.find((item) => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
      this.cart.push({ ...product });
    }
  }
  
  getCartItems(): Product[] {
    return this.cart;
  }


  updateQuantity(productId: number, quantity: number): void {
    const product = this.cart.find((item) => item.id === productId);
    if (product && quantity > 0) {
      product.quantity = quantity;
    } else if (quantity <= 0) {
      this.removeFromCart(productId);
    }
  }

  removeFromCart(productId: number): void {
      this.cart = this.cart.filter((item) => item.id !== productId);
  }

  getCartTotal(): number {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  

}
