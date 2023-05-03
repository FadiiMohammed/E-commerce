import { Wishlist } from './wishlist';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  numOfWishlist: BehaviorSubject<number> = new BehaviorSubject(0);
  WishlistData: any[] = [];
  constructor(private _httpClient: HttpClient) {
    this.getWishlist().subscribe((res) => {
      this.numOfWishlist.next(res.data.length);
      this.WishlistData = res.data;
    });
  }
  addToWishlist(productId: string): Observable<any> {
    return this._httpClient.post(
      'https://route-ecommerce.onrender.com/api/v1/wishlist',
      { productId: productId }
    );
  }

  getWishlist(): Observable<any> {
    return this._httpClient.get(
      'https://route-ecommerce.onrender.com/api/v1/wishlist'
    );
  }

  removeWishlist(productId: string): Observable<any> {
    return this._httpClient.delete(
      `https://route-ecommerce.onrender.com/api/v1/wishlist/${productId}`
    );
  }
}
