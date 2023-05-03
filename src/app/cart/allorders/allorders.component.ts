import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../cart.service';
import { AllOrders } from '../all-orders';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css'],
})
export class AllordersComponent implements OnInit, OnDestroy {
  allOrders: AllOrders[] = [];
  cartOwner: string = '';
  private getOrder: any;
  constructor(private _cartService: CartService) {}

  ngOnInit(): void {
    this.getUserOrders();
  }

  getUserOrders() {
    this.getOrder = this._cartService.getUserOrders().subscribe({
      next: (res) => {
        console.log(res.data);
        this.allOrders = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  ngOnDestroy(): void {
    this.getOrder.unsubscribe();
  }
}
