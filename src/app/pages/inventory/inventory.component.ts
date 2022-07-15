import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  products: any = [];
  productToSave: Product = {
    barcode: "",
    name: "",

    image: "",
    measurement: "",
    detail: {
      costPrice: 0,
      dueDate: "",
      price: 0.0,
      quantity: 0,
      provider: {
        name: "",
        phone: ""
      }
    }
  };

  constructor(
    private productService: ProductsService
  ) {

  }

  ngOnInit(): void {
    // this.productService.getAllProducts().subscribe(data => {
    //   this.products = data as Product[];
    // })
  }

  showProducts() {
    console.log(this.products);
  }

  sendData() {

    this.productService
      .saveNewProduct(this.productToSave)
      .subscribe(data => {

        console
          .log(`Added the product ${this.productToSave.name}`)
      })

    this.productService.getAllProducts().subscribe(p => {
      this.products = p;
    });
  }
}
