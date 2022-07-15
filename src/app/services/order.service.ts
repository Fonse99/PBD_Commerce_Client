import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderModel } from '../models/Order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get("http://localhost:9800/api/orders/all");
  }

  getAllFromToday(){
    return this.http.get("http://localhost:9800/api/orders/all");
  }

  add(newOrder: OrderModel){
    return this.http.post("http://localhost:9800/api/orders/add", newOrder);
  }

}
