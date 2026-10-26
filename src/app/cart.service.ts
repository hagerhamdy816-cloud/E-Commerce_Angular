import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface Product {
  id: number
  title: string
  price: number
  quantity?: number
  category?: string
  image?: string
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Product[] = []
  private cartSubject = new BehaviorSubject<Product[]>([])
  private messageSubject = new BehaviorSubject<string>('');

  getCart() {
    return this.cartSubject.asObservable()
  }

  getMessage() {
    return this.messageSubject.asObservable()
  }

  addToCart(product: Product) {
    let item = this.cart.find(p => p.id === product.id)
    if (item) {
      item.quantity = (item.quantity || 1) + 1
    } else {
      this.cart.push({ ...product, quantity: 1 })
    }
    this.cartSubject.next([...this.cart])
    this.messageSubject.next(`${product.title} added to cart!`)
  }

  removeFromCart(productId: number) {
    const product = this.cart.find(p => p.id === productId);
    if (product) {
      this.cart = this.cart.filter(p => p.id !== productId);
      this.cartSubject.next([...this.cart]);
      this.messageSubject.next(`${product.title} removed from cart!`);
    }
  }

  clearCart() {
    this.cart = []
    this.cartSubject.next([...this.cart])
    this.messageSubject.next('Cart cleared!')
  }


  // constructor() { }
}
