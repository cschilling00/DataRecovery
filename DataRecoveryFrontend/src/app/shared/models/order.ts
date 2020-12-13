import {Product} from './product';
import {Customer} from './customer';
import {State} from './state';

export class Order {
  id: string;
  customer: Customer;
  customerId: number;
  product: Product;
  productId: number;
  trackingId: string;
  orderDate: Date;
  state: State ;
}
