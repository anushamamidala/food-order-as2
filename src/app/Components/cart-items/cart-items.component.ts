import { Component, OnInit } from '@angular/core';
import { Feed } from 'src/app/Models/feed';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {
  cartItems: Feed[] = [];
  totalPrice:any;
  constructor() { }

  ngOnInit(): void {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems'));
    this.totalPrice = 0;
    if(this.cartItems.length > 0){
      for(let i = 0; i< this.cartItems.length;i++){
        this.totalPrice += this.cartItems[i].price.price;
      }
    }
    
  }
}
