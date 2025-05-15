import { Component, OnInit } from '@angular/core';
import { Product } from '../../product.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PRODUCTS } from '../../products';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-details',
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  product: Product | undefined;

constructor(private route: ActivatedRoute, private cartService: CartService ) {}

ngOnInit(): void {
  const productId = Number(this.route.snapshot.params['id' ]);
  this.product = PRODUCTS.find((p) => p.id === productId);
 }

 addToCart(){
  if(this.product)
  this.cartService.addToCart(this.product)
}


}
