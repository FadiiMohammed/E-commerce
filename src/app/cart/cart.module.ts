import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CartFilterPipe } from './cart-filter.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AllordersComponent } from './allorders/allorders.component';
import { DropdownModule } from 'primeng/dropdown';
@NgModule({
  declarations: [
    CartComponent,
    CartFilterPipe,
    CheckoutComponent,
    AllordersComponent,
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    ReactiveFormsModule,
    DropdownModule,
  ],
})
export class CartModule {}
