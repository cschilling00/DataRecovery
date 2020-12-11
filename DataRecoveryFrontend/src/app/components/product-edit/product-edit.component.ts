import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../shared/models/product";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ModalDismissReasons, NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ProductService} from "../../shared/services/product.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  @Input() product: Product;
  @Input() create: boolean;
  @Output() productUpdated = new EventEmitter<boolean>();
  editProduct: Product;
  EditForm: FormGroup;
  closeResult = '';

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private productService: ProductService) { }

  ngOnInit(): void {
    this.EditForm = new FormGroup({
      id: new FormControl(null, [Validators.required]),
      productName: new FormControl(null, [Validators.required]),
      price: new FormControl(null),
      category: new FormControl(null),
    });
    this.EditForm.patchValue(this.product);
  }

  createProduct(){
    this.product = (this.EditForm.value as Product);
    console.log(this.product);
    this.productService.createProduct(this.product).subscribe( data => {
      console.log(data);
      this.productUpdated.emit(true);
    });
    this.activeModal.close();
  }

  updateProduct() {
    console.log('product: ' + JSON.stringify(this.product));
    this.editProduct = this.product;
    this.editProduct = (this.EditForm.value as Product);
    console.log('editProduct: ' + JSON.stringify(this.editProduct));
    console.log("Product id: " + this.product.id);
    this.productService.updateProduct(Number(this.product.id), this.editProduct).subscribe( data => {
      console.log("Updated Product: " + data);
      this.productUpdated.emit(true);
    } );
    this.activeModal.close();
  }

  deleteProduct(modal){
    modal.close();
    this.editProduct = (this.EditForm.value as Product);
    this.productService.deleteProduct(Number(this.product.id)).subscribe( data => {
      console.log(data);
      this.productUpdated.emit(true);
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

}
