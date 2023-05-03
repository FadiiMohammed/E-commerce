import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Cart } from '../cart';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartDetails: Cart = {} as Cart;
  ownerId: BehaviorSubject<string> = new BehaviorSubject('');
  constructor(private _cartService: CartService) {}
  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this._cartService.getCart().subscribe({
      next: (res) => {
        this.cartDetails = res;
        console.log(res.data.cartOwner);
        return this.ownerId.next(res.data.cartOwner);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  updateCart(id: string, count: number) {
    this._cartService.updateCart(id, count).subscribe({
      next: (res) => {
        this.cartDetails = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  removeCart(id: string) {
    this._cartService.removeCart(id).subscribe({
      next: (res) => {
        this.cartDetails = res;
        this._cartService.numOfCartItems.next(res.numOfCartItems);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  clearCart() {
    this._cartService.clearCart().subscribe({
      next: (res) => {
        this.cartDetails = res;
        this._cartService.numOfCartItems.next(res.numOfCartItems);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
