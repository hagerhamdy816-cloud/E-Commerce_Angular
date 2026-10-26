import { LogInComponent } from './log-in/log-in.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { OurProductsComponent } from './our-products/our-products.component';
// import { SliderComponent } from './slider/slider.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LeadersComponent } from './leaders/leaders.component';
import { ServiceComponent } from './service/service.component';
import { FooterComponent } from './footer/footer.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';
import { gaurdsGuard } from './gaurds.guard';
// import { gaurdsGuard } from './gaurds.guard';


export const routes: Routes = [
    { path: '', redirectTo: '/logIn', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, canActivate:[gaurdsGuard] },
    // { path: 'slider', component: SliderComponent,canActivate: [gaurdsGuard] },
    { path: 'slider', component: AboutUsComponent,canActivate: [gaurdsGuard] },
    { path: 'leaders', component: LeadersComponent,canActivate: [gaurdsGuard] },
    { path: 'service', component: ServiceComponent,canActivate: [gaurdsGuard] },
    { path: 'footer', component: FooterComponent },
    { path: 'our-products', component: OurProductsComponent,canActivate: [gaurdsGuard] },
    { path: 'product/:id', component: SingleproductComponent,canActivate: [gaurdsGuard] },
    { path: 'categories', component: CategoriesComponent,canActivate: [gaurdsGuard] },
    { path: 'cart', component: CartComponent,canActivate: [gaurdsGuard] },
    { path: 'register', component: RegisterComponent },
    { path: 'logIn', component: LogInComponent }

];
