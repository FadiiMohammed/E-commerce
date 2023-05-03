import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  getProductId: string = '';
  productDetails: Product = {} as Product;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: true,
  };
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productService: ProductsService,
    private _cartService: CartService
  ) {
    this._activatedRoute.paramMap.subscribe((res: any) => {
      console.log(res.params.id);
      this.getProductId = res.params.id;
    });
  }
  ngOnInit(): void {
    this.getProductDetails(this.getProductId);
  }
  getProductDetails(id: string) {
    this._productService.getProductById(id).subscribe({
      next: (res) => {
        console.log(res.data);
        this.productDetails = res.data;
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
