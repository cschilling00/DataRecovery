import {Product} from './product';
import {Customer} from './customer';

export class Order {
  id: string;
  customer: Customer;
  product: Product;
  trackingId: string;
  orderDate: Date;
}
