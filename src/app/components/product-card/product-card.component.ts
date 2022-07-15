import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product =
    {
      barcode: "1234564534",
      detail : {
        price: 33.0,
        quantity: 3
      },
      name: "Default Title",
      image: "./img/shopping.png"
    };
  constructor() { }

  ngOnInit(): void {

  }

  getTotalAmount(): number {
    return (this.product.detail.quantity * this.product.detail.price);
  }

}
