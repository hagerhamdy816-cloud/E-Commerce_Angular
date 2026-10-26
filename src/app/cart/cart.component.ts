import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService, Product } from '../cart.service';
import { SubjectLike, Subscribable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit, OnDestroy {

  cart: Product[] = [];
  private cartSubscription!: Subscription;

  constructor(private _CartService: CartService) {
    // this._CartService.getCart().subscribe((cart) => {
    //   this.cart = cart;
    // });
  }

  ngOnInit() {
    this.cartSubscription = this._CartService.getCart().subscribe(cart => {
      this.cart = cart;
    });
  }

  removeFromCart(productId: number) {
    this._CartService.removeFromCart(productId);
  }

  clearCart() {
    this._CartService.clearCart();
  }

  ngOnDestroy() {
    this.cartSubscription?.unsubscribe();
  }

  // ngOnDestroy() {
  //   if (this.cartSubscription) {
  //     this.cartSubscription.unsubscribe();
  //   }
  // }

}
