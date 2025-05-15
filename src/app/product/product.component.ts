import { Component, OnInit } from '@angular/core';
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
export class ProductComponent  implements OnInit{
  //import array of products from products.ts
  products : Product[]= PRODUCTS;
  productsHeader : string = "Products";

  constructor(private cartService: CartService){}

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
    console.log(this.cartService);
    
  }

  categories = ['smartphone', 'notebook', 'headphone', 'smartwatch'];
  brands = ['Apple', 'Samsung', 'Huawei', 'Xiaomi', 'Google', 'Sony', 'Bose', 'Sennheiser', 'Acer', 'HP'];

  selectedCategories: string[] = [];
  selectedBrands: string[] = [];
  filteredProducts: Product[] = [];

  ngOnInit() {
    this.filteredProducts = [...this.products]; // Start with all products
    this.updateProductsHeader();
  }

toggleCategoryFilter(category: string) {
    const index = this.selectedCategories.indexOf(category);
    if (index === -1) {
        this.selectedCategories.push(category);
    } else {
        this.selectedCategories.splice(index, 1);
    }
    this.applyFilters();
}

toggleBrandFilter(brand: string) {
    const index = this.selectedBrands.indexOf(brand);
    if (index === -1) {
        this.selectedBrands.push(brand);
    } else {
        this.selectedBrands.splice(index, 1);
    }
    this.applyFilters();
}

applyFilters() {
  this.filteredProducts = this.products.filter(product => {
      const categoryMatch = this.selectedCategories.length === 0 || this.selectedCategories.includes(product.category);
      const brandMatch = this.selectedBrands.length === 0 || this.selectedBrands.includes(product.brand);
      return categoryMatch && brandMatch;
  });

  this.updateProductsHeader();
}

updateProductsHeader() {
  if (this.selectedCategories.length === 1) {
      this.productsHeader = this.capitalizeFirstLetter(this.selectedCategories[0]) + 's';  // e.g., Smartphone -> Smartphones
  } else if (this.selectedCategories.length > 1) {
      this.productsHeader = 'Selected Categories';
  } else {
      this.productsHeader = 'All Products';
  }
}

capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
}