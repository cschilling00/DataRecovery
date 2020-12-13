import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Faq} from '../../shared/models/faq';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ModalDismissReasons, NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {OrderService} from '../../shared/services/order.service';
import {Order} from '../../shared/models/order';
import {State} from '../../shared/models/state';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.scss']
})
export class OrderEditComponent implements OnInit {
  @Input() order: Order;
  @Output() orderUpdated = new EventEmitter<boolean>();
  editOrder: Order;
  orderStates = State;
  EditForm: FormGroup;
  closeResult = '';
  selectionState: Array<string>;

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private orderService: OrderService) { }

  ngOnInit(): void {
    this.EditForm = new FormGroup({
    //   orderId: new FormControl(null, [Validators.required]),
    //   product: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required]),
    });
    // this.EditForm.patchValue(this.order);
    console.log(this.order);
    const keys = Object.keys(this.orderStates);
  }

  updateOrder() {
    console.log('order: ' + JSON.stringify(this.order));
    this.editOrder = this.order;
    this.editOrder = (this.EditForm.value as Order);
    console.log('editOrder: ' + JSON.stringify(this.editOrder));
    console.log('Order id: ' + this.order.id);
    this.orderService.updateOrder(Number(this.order.id), this.editOrder).subscribe( data => {
      console.log('Updated Order: ' + data);
      this.orderUpdated.emit(true);
    } );
    this.activeModal.close();
  }

  deleteOrder(modal){
    modal.close();
    this.editOrder = (this.EditForm.value as Order);
    this.orderService.deleteOrder(Number(this.order.id)).subscribe( data => {
      console.log(data);
      this.orderUpdated.emit(true);
    });
    this.activeModal.close();
  }

  openConfirm(deleteModal){
    this.modalService.open(deleteModal, {centered: true, size: 'sm', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  keys(): Array<string> {
    const keys = Object.keys(this.orderStates);
    return keys;
  }

}
