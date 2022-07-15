import { Component, OnInit } from '@angular/core';
import { elementAt, retry } from 'rxjs';
import { OrderModel } from 'src/app/models/Order.model';
import { Product } from 'src/app/models/Product.model';
import { OrderService } from 'src/app/services/order.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  products: any[] = [];
  todayOrders: OrderModel[] = []
  value: string = "";

  constructor(
    private productService: ProductsService,
    private orderService: OrderService
  ) {
  }
  ngOnInit(): void {
    this.getAllSales();
  }

  getProductByBarcode(barcode: string) {

    console.log(this.products)
    return this.productService.getByBarcode(barcode)
      .subscribe(data => {

        let newProduct = data as Product;

        if (!this.findExistingProduct(newProduct.barcode)) {
          newProduct.detail.quantity = 1;
          this.products.push(newProduct);
        } else {
          let index = this.products.findIndex(product => product.barcode === barcode);
          let product = this.products[index] as Product;

          product.detail.quantity++;
          this.products[index] = product;
        }

      });

  }

  getAllSales() {
    return this.orderService.getAll().subscribe(data => {
      this.todayOrders = data as OrderModel[];
    })
  }

  clean() {
    this.products = [];
  }
  sendData() {

    let order: OrderModel = {
      amount: this.getTotalAmount(),
      date: Date.now().toString(),
      details: this.products.map(p => {
        return {
          barcode: p.barcode,
          quantity: p.detail.quantity
        }
      })
    }

    console.log(order.details[0].barcode);

    this.orderService.add(order).subscribe(data => {
      console.log(`Was saved your order: ${data}`);
    });
    this.todayOrders.push(order);
    this.clean();
  }
  getTotalAmount(): number {
    let amount = 0;

    this.products.forEach(product => {
      amount += product.detail.quantity * product.detail.price;
    });
    return amount;
  }

  setValue(value: string) {
    this.value = value;
    this.getProductByBarcode(this.value);
    this.getTotalAmount();
    console.log(this.findExistingProduct(value));
  }

  findExistingProduct(barcode: string) {
    return this.products.find(element => element.barcode == barcode) !== undefined
  }
}
