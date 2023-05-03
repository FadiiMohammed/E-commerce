import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private _htppClient: HttpClient) {}

  getCategories(): Observable<any> {
    return this._htppClient.get(
      'https://route-ecommerce.onrender.com/api/v1/categories'
    );
  }

  getSpecificCategory(categoryId: string): Observable<any> {
    return this._htppClient.get(
      `https://route-ecommerce.onrender.com/api/v1/categories/${categoryId}`
    );
  }
}
