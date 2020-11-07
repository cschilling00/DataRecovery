import {Product} from './product';
import {Customer} from './customer';

export class Order {
  _id: string;
  customer: Customer;
  product: Product;
  trackingId: string;
  orderDate: Date;
}
