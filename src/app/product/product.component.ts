import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Product } from '../product.model';
import { PRODUCTS } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  //import array of products from products.ts
  products : Product[]= PRODUCTS;

  constructor(private cartService: CartService){}

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
    console.log(this.cartService);
    
  }

}
