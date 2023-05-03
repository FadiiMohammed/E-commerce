import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../cart/cart.service';
import { MessageService } from 'primeng/api';
import { WishlistService } from '../wishlist.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [MessageService],
})
export class ProductsComponent implements OnInit {
  changeIconColor: BehaviorSubject<boolean> = new BehaviorSubject(false);
  productInWishlist: Product[] = [];
  @Input() product: Product = {} as Product;
  constructor(
    private _cartService: CartService,
    private messageService: MessageService,
    private _wishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    
  }
  addToWishlist(id: string) {
    this._wishlistService.addToWishlist(id).subscribe({
      next: (res) => {
        console.log(res.data.length);
        this.productAdded();
        this.product.existInWishlist = true;
        this._wishlistService.numOfWishlist.next(res.data.length);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  removeFromWishlist(id: string) {
    this._wishlistService.removeWishlist(id).subscribe({
      next: (res) => {
        this.product.existInWishlist = false;
        this.productRemoved();
        this._wishlistService.numOfWishlist.next(res.data.length);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  productAdded() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Product added successfully to your wishlist',
    });
  }
  productRemoved() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Product removed successfully from your wishlist',
    });
  }
  addProduct(id: string) {
    this._cartService.addToCart(id).subscribe({
      next: (res) => {
        console.log(res);
        this._cartService.numOfCartItems.next(res.numOfCartItems);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
