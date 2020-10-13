import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  constructor() { }
  cartPage = true;
  checkoutOne = false;
  checkoutTwo = false;
  checkoutThree = false;
  checkoutFour = false;
  ngOnInit() {
  }
  checkout() {
    this.cartPage = false;
    this.checkoutOne = true;
  }
  gotoCart() {
    this.cartPage = true;
    this.checkoutOne = false;
  }
  gotoBasket() {
    this.cartPage = true;
    this.checkoutOne = false;
    this.checkoutTwo = false;
    this.checkoutThree = false;
    this.checkoutFour = false;
  }
  gotoDelivery() {
    this.cartPage = false;
    this.checkoutOne = false;
    this.checkoutTwo = true;
    this.checkoutThree = false;
    this.checkoutFour = false;
  }
  gotoAddress() {
    this.cartPage = false;
    this.checkoutOne = true;
    this.checkoutTwo = false;
    this.checkoutThree = false;
    this.checkoutFour = false;
  }
  gotoPayment() {
    this.cartPage = false;
    this.checkoutOne = false;
    this.checkoutTwo = false;
    this.checkoutThree = true;
    this.checkoutFour = false;
  }
  backtoShipping() {
    this.cartPage = false;
    this.checkoutOne = false;
    this.checkoutTwo = true;
    this.checkoutThree = false;
    this.checkoutFour = false;
  }
  gotoOrderReview() {
    this.cartPage = false;
    this.checkoutOne = false;
    this.checkoutTwo = false;
    this.checkoutThree = false;
    this.checkoutFour = true;
  }
  backToPayment() {
    this.cartPage = false;
    this.checkoutOne = false;
    this.checkoutTwo = false;
    this.checkoutThree = true;
    this.checkoutFour = false;
  }

}
