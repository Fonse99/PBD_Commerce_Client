import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get('http://localhost:9600/api/product/all');
  }

  getByBarcode(barcode: string) {
    return this.http.get(`http://localhost:9600/api/product/byBarcode/?barcode=${barcode}`);
  }

  saveNewProduct(newProduct: Product) {
    return this.http.post('http://localhost:9600/api/product/add',newProduct);
  }

  editProduct(changedProduct: Product){
    return this.http.put('http://localhost:9600/api/product/edit', changedProduct);
  }
}
