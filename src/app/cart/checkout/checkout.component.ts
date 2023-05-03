import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  isLoading: boolean = false;
  paymentUrl: string = '';
  cartId: string = '';

  shippingAddress: FormGroup = new FormGroup({
    details: new FormControl(''),
    phone: new FormControl(''),
    city: new FormControl(''),
  });

  constructor(
    private _cartService: CartService,
    private _activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((res: any) => {
      this.cartId = res.params.id;
    });
  }

  handleOnline() {
    this.isLoading = true;
    this._cartService
      .generateOnlinePayment(this.cartId, this.shippingAddress.value)
      .subscribe({
        next: (res) => {
          this.isLoading = false;
          window.location.href = res.session.url;
        },
        error: (err) => {
          this.isLoading = false;
          console.log(err);
        },
      });
  }
}
