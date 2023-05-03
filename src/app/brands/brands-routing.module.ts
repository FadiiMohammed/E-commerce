import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from './brands.component';
import { BrandDetailsComponent } from './brand-details/brand-details.component';

const routes: Routes = [
  { path: '', component: BrandsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrandsRoutingModule {}
