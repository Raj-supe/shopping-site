import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public totalItem : number = 0;
  public subTotal !: number;
  constructor(private cartService : CartService,private router:Router) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.totalItem = res.length;
      this.subTotal = this.cartService.getTotalPrice();
    })
  }

  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }

  removeAllItems(){
    this.cartService.removeAllCart();
    this.router.navigate(['products']);
  }

  increaseItem(item: any){
    item.quantity =  item.quantity + 1;
  }

  decreaseItem(item: any){
    item.quantity =  item.quantity - 1;
  }

}
