import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoriesComponent } from '../categories/categories.component';
import { CartService } from '../cart.service';

export interface Product {
  id: number
  title: string
  price: number
  quantity?: number
  category?: string
  image?: string
}


@Component({
  selector: 'app-our-products',
  standalone: true,
  imports: [CommonModule, FormsModule, CategoriesComponent],
  templateUrl: './our-products.component.html',
  styleUrl: './our-products.component.css'
})
export class OurProductsComponent implements OnInit {
  products: Product[] = []
  cartMessage: string = ''
  allProducts: Product[] = []
  sortOrder: string = 'desc'
  selectedCategory: string = 'all'
  searchTerm: string = ''
  constructor(private _DataService: DataService, private _Router: Router, private route: ActivatedRoute, private _CartService: CartService) {
    // this.loadProducts();
  }

  ngOnInit() {

    this._CartService.getMessage().subscribe(message => {
      this.cartMessage = message;
      if (this.cartMessage) {
        setTimeout(() => {
          this.cartMessage = '';
        }, 5000);
      }
    });


    this.loadProducts();
    this.loadProducts();

    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['search'] || '';
      this.filterProducts();
    });
  }
  loadProducts() {
    this._DataService.getData().subscribe((res: Product[]) => {
      this.allProducts = res || [];
      this.filterProducts();
    })
  }

  filterProducts() {
    let filteredProducts = this.selectedCategory === 'all'
      ? [...this.allProducts]
      : this.allProducts.filter(product => product.category === this.selectedCategory);

    if (this.searchTerm.trim() !== '') {
      filteredProducts = filteredProducts.filter(product =>
        product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    this.products = filteredProducts.sort((a, b) =>
      this.sortOrder === 'asc' ? a.price - b.price : b.price - a.price
    );
  }


  // filterProducts() {
  //   let filteredProducts = this.selectedCategory === 'all'
  //     ? [...this.allProducts]
  //     : this.allProducts.filter(product => product.category === this.selectedCategory);

  //   this.products = filteredProducts.sort((a, b) =>
  //     this.sortOrder === 'asc' ? a.price - b.price : b.price - a.price
  //   );
  // }


  onCategorySelected(category: string) {
    this.selectedCategory = category;
    this.filterProducts();
  }

  // sortProducts() {
  //   this.products = [...this.products].sort((a, b) => {
  //     return this.sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
  //   });
  // }


  // sortProducts() {
  //   this.products = [...this.allProducts].sort((a, b) => {
  //     let priceA = a.price;
  //     let priceB = b.price;
  //     return this.sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
  //   })
  // }

  getSingleData(id: number) {
    this._Router.navigate(['/product', id])
  }

  addToCart(product: Product) {
    this._CartService.addToCart(product);
  }

  removeFromCart(productId: number) {
    this._CartService.removeFromCart(productId); 
  }

  clearCart() {
    this._CartService.clearCart();   
  }
}

