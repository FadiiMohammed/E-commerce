import { CartService } from '../cart/cart.service';
import { WishlistService } from '../wishlist.service';
import { AuthService } from './../signup/core/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isLoggedIn = false;
  numOfCartItems: number = 0;
  numOfWishlist: number = 0;

  constructor(
    private _authService: AuthService,
    private _CartService: CartService,
    private _wishlistService: WishlistService
  ) {
    this._authService.userData.subscribe((res) => {
      if (res) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });

    _CartService.numOfCartItems.subscribe((res) => {
      this.numOfCartItems = res;
    });

    _wishlistService.numOfWishlist.subscribe({
      next: (res) => {
        this.numOfWishlist = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  logOut() {
    this._authService.logOut();
  }
}
