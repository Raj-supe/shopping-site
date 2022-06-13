import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productList : any ;
  public filterCategory : any;
  categoryItems: any;
  constructor(private api : ApiService, private cartService : CartService) { }

  ngOnInit(): void {
    this.api.getProductItem()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((item:any) => {
        if(item ==="women's clothing" || item ==="men's clothing"){
          item ="fashion"
        }
        Object.assign(item,{quantity:1,total:item.price});
      });
    });

    this.api.getCategoryItem()
    .subscribe(categoryItemData=>{
      this.categoryItems = categoryItemData;
    });
  }

  addTocart(item: any){
    this.cartService.addtoCart(item);
  }

  filterItemsByCategory(category: string) {
    this.filterCategory = this.productList.filter((item: any) => {
      if(item.category == category || category==''){
           return item;
      }
    })
  }

}
