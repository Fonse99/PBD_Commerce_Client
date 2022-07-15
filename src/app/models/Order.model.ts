export class OrderModel {
  _id?: String = "";
  date: String = "";
  amount: number = 0.0;
  details: OrderDetailModel[] = [];
}

export class OrderDetailModel {
  quantity: number = 0.0;
  barcode: String = "";
}
