import { CartModel } from './cart/cart.model';
import { Component } from '@angular/core';

@Component({
  selector: 'nic-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  selectedIndex = 0;

  slides: CartModel[] = [
    new CartModel('Max travel 2', 'red', 10),
    new CartModel('Match Skills', 'green', 9),
    new CartModel('Working Territories', 'blue', 9),
    new CartModel('Max travel 2 - 2', 'red', 10),
    new CartModel('Match Skills - 2', 'green', 9),
    new CartModel('Working Territories - 2', 'blue', 9),
    new CartModel('Max travel 2 - 3', 'red', 10),
    new CartModel('Match Skills - 3', 'green', 9),
    new CartModel('Working Territories - 3', 'blue', 9),
    new CartModel('Max travel 2 - 4', 'red', 10),
    new CartModel('Match Skills - 4', 'green', 9),
    new CartModel('Working Territories - 4', 'blue', 9),
    new CartModel('Max travel 2 - 5', 'red', 10),
    new CartModel('Match Skills - 5', 'green', 9),
    new CartModel('Working Territories - 5', 'blue', 9),
  ];


  printTitle(title: string): void {
    console.log(`%c${title}`, 'color: lime; background-color: black; padding: 20px 40px;');
  }



}
