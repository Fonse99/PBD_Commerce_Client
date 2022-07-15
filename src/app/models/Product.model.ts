export class Product {
  image?: string = "../components/product-card/img/shopping.png";
  name: string = "";
  barcode: string = "";
  measurement: string = "";
  detail: ProductDetail = new ProductDetail();
}

export class ProductDetail {
  provider: Provider = new Provider();
  price: number = 0.0;
  quantity: number = 0;
  costPrice: number = 0.0;
  dueDate: string = "";
}

export class Provider {
  name: string = "";
  phone: string = "";
}
