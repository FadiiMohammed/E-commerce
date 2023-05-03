import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor(private _httpClient: HttpClient) {}
  getAllBrands(): Observable<any> {
    return this._httpClient.get(
      'https://route-ecommerce.onrender.com/api/v1/brands'
    );
  }

  getSpecificBrand(brandID: string): Observable<any> {
    return this._httpClient.get(
      `https://route-ecommerce.onrender.com/api/v1/brands/${brandID}`
    );
  }
}
