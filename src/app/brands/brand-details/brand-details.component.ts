import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from '../brand.service';
import { Brand } from '../brand';

@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.css'],
})
export class BrandDetailsComponent implements OnInit {
  getBrandId: string = '';
  brandDetails: Brand = {} as Brand;

  constructor(
    private _brandService: BrandService,
    private _avtivatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this._avtivatedRoute.paramMap.subscribe((res: any) => {
      this.getBrandId = res.params.Id;
      console.log(this.getBrandId);
    });
    this.getSpecificBrand();
  }

  getSpecificBrand() {
    this._brandService.getSpecificBrand(this.getBrandId).subscribe({
      next: (res) => {
        this.brandDetails = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
