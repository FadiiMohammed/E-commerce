import { Product } from './../product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  token: string | null = localStorage.getItem('userToken');
  numOfCartItems: BehaviorSubject<number> = new BehaviorSubject(0);
  constructor(private _httpClient: HttpClient) {
    this.getCart().subscribe((res) => {
      this.numOfCartItems.next(res.numOfCartItems);
    });
  }

  addToCart(productId: string): Observable<any> {
    return this._httpClient.post(
      'https://route-ecommerce.onrender.com/api/v1/cart',
      { productId: productId }
    );
  }

  getCart(): Observable<any> {
    return this._httpClient.get(
      'https://route-ecommerce.onrender.com/api/v1/cart'
    );
  }

  updateCart(productId: string, count: number): Observable<any> {
    return this._httpClient.put(
      ` https://route-ecommerce.onrender.com/api/v1/cart/${productId}`,
      {
        count: count,
      }
    );
  }

  removeCart(productId: string): Observable<any> {
    return this._httpClient.delete(
      `https://route-ecommerce.onrender.com/api/v1/cart/${productId}`
    );
  }

  clearCart(): Observable<any> {
    return this._httpClient.delete(
      'https://route-ecommerce.onrender.com/api/v1/cart'
    );
  }

  generateOnlinePayment(cartId: string, shippingAddress: any): Observable<any> {
    return this._httpClient.post(
      `https://route-ecommerce.onrender.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
      { shippingAddress: shippingAddress }
    );
  }

  getUserOrders(): Observable<any> {
    return this._httpClient.get(
      `https://route-ecommerce.onrender.com/api/v1/orders/`
    );
  }
}
