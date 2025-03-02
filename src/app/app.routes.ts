import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductComponent } from './product/product.component';
import { DetailsComponent } from './product/details/details.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    // here we specify the routs for all of our components
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutUsComponent},
    { path: 'products', component:ProductComponent},
    { path: 'details/:id', component:DetailsComponent},
    { path: 'cart', component:CartComponent}
];

