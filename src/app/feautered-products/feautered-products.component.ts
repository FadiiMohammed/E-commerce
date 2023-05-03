import { Wishlist } from './../wishlist';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-feautered-products',
  templateUrl: './feautered-products.component.html',
  styleUrls: ['./feautered-products.component.css'],
})
export class FeauteredProductsComponent implements OnInit {
  searchTerm: string = '';
  allProducts: Product[] = [];
  WishlistDataIds: string[] = [];
  productInWishlist: Product[] = [];
  constructor(
    private _productsService: ProductsService,
    private _wishlistService: WishlistService
  ) {}
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this._productsService.getProducts().subscribe({
      next: (res) => {
        console.log(res.data);
        this.WishlistDataIds = this._wishlistService.WishlistData.map((obj) => {
          return obj._id;
        });
        this.allProducts = res.data;
      },
    });
  }
}
