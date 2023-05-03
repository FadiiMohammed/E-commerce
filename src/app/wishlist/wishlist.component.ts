import { MainSliderComponent } from './../main-slider/main-slider.component';
import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';
import { Wishlist } from '../wishlist';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  wishlistData: Wishlist[] = [];
  newArr: Wishlist[] = [];
  constructor(
    private _wishlistService: WishlistService,
    private _cartService: CartService
  ) {}
  ngOnInit(): void {
    this.getWishlist();
  }
  getWishlist() {
    this._wishlistService.getWishlist().subscribe({
      next: (res) => {
        console.log(res.data);
        this.wishlistData = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  removeWishlist(ID: string) {
    this._wishlistService.removeWishlist(ID).subscribe({
      next: (res) => {
        console.log(res.data);
        this.newArr = this.wishlistData.filter((object) => {
          return object.id !== ID;
        });
        this.wishlistData = this.newArr;
        this._wishlistService.numOfWishlist.next(res.data.length);
      },
      error: (err) => {
        console.log(err);
      },
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
