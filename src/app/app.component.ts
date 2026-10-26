import { AboutUsComponent } from './about-us/about-us.component';

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { SliderComponent } from './slider/slider.component';
import { LeadersComponent } from './leaders/leaders.component';
import { ServiceComponent } from './service/service.component';
import { FooterComponent } from './footer/footer.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegisterComponent, LogInComponent, NavComponent, HomeComponent, OurProductsComponent, SliderComponent, AboutUsComponent, LeadersComponent, ServiceComponent,FooterComponent,SingleproductComponent,CategoriesComponent,CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'finalProject';
}
