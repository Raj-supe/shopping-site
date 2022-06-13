import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  productUrl: string = "https://fakestoreapi.com/products";
  categoryUrl: string = "https://fakestoreapi.com/products/categories";

  constructor(private http : HttpClient) { }

  getProductItem(){
    return this.http.get<any>(this.productUrl)
  }

  getCategoryItem() {
    return this.http.get<any>(this.categoryUrl)
  }
}
