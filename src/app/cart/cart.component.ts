import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartModel } from './cart.model';

@Component({
  selector: 'nic-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {


  cartImage: string;
  @Input() cart: CartModel;
  @Input() index: number;
  @Input() selected: boolean;
  @Output() whenShow = new EventEmitter<string>();
  @Output() whenFocus = new EventEmitter();

}
