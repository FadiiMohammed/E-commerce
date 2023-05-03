import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandsRoutingModule } from './brands-routing.module';
import { BrandsComponent } from './brands.component';
import { HttpClientModule } from '@angular/common/http';
import { BrandDetailsComponent } from './brand-details/brand-details.component';

@NgModule({
  declarations: [BrandsComponent, BrandDetailsComponent],
  imports: [CommonModule, BrandsRoutingModule, HttpClientModule],
})
export class BrandsModule {}
