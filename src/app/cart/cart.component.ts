import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartService } from '../cart.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-cart',
  imports: [RouterOutlet],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  cartItems: Product[] = [];

  total: number = 0;
  discount: number = 0;


  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.loadCart();
  }
  
  loadCart(): void {
    this.cartItems = this.cartService.getCartItems();
    this.updateTotal();
  }

  updateQuantity(productId: number, event: Event): void {
    const quantity = Number(( event.target as HTMLInputElement).value);
    this.cartService.updateQuantity(productId, quantity);
    this.loadCart();
  }


  removeItem(productId: number): void {
      this.cartService.removeFromCart(productId);
      this.loadCart();
  }

  updateTotal(): void {
    this.total = this.cartService.getCartTotal();
 }

 calculateDiscount(): number{
  if (this.total>1000){
    this.discount=0.15;
  }else{
    this.discount=0;
  }
  return this.discount
 }

}
