import { Component, OnInit } from '@angular/core';
import { BrandService } from './brand.service';
import { Brand } from './brand';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css'],
})
export class BrandsComponent implements OnInit {
  brandsData: Brand[] = [];
  constructor(private _brandService: BrandService) {}
  ngOnInit(): void {
    this.getAllBrands();
  }
  getAllBrands() {
    this._brandService.getAllBrands().subscribe({
      next: (res) => {
        this.brandsData = res.data;
        console.log(this.brandsData);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
