import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from '../category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 8,
      },
    },
    nav: true,
  };
  constructor(private _productService: ProductsService) {}

  ngOnInit(): void {
    this.allCategories();
  }
  allCategories() {
    this._productService.allCategories().subscribe((res) => {
      this.categories = res.data;
      console.log(this.categories);
    });
  }
}
