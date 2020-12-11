import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AdminService} from '../../shared/services/admin.service';
import {Admin} from '../../shared/models/admin';
import {FaqService} from '../../shared/services/faq.service';
import {Faq} from '../../shared/models/faq';
import {ProductService} from '../../shared/services/product.service';
import {Product} from '../../shared/models/product';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FaqEditComponent} from "../faq-edit/faq-edit.component";
import {ProductEditComponent} from "../product-edit/product-edit.component";
import {AdminEditComponent} from "../admin-edit/admin-edit.component";

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.scss']
})
export class StaticComponent implements OnInit {

  public admins: Admin[];
  public admin: Admin;
  public faqs: Faq[];
  public products: Product[];
  public closeResult = '';

  constructor(public router: Router, private adminService: AdminService, private faqService: FaqService,
              private modalService: NgbModal, private  productService: ProductService) { }

  ngOnInit(): void {
    this.adminService.getAdmins().subscribe(admins => {
      this.admins = admins;
      console.log(this.admins);
    });

    this.faqService.getFaqs().subscribe(faqs => {
      this.faqs = faqs;
    });

    this.productService.getProducts().subscribe(products => {
      this.products = products;
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

  createAdmin() {
    const modalRef = this.modalService.open(AdminEditComponent, {size: 'xl'});
    const admin: Admin = {} as Admin;
    modalRef.componentInstance.create = true;
    modalRef.componentInstance.admin = admin;
    modalRef.componentInstance.adminUpdated.subscribe((data) => {
      if (data === true) {window.location.reload(); }
    });
  }

  editAdmin(admin: Admin){
    const  modalRef = this.modalService.open(AdminEditComponent, {size: 'l'});
    modalRef.componentInstance.admin = admin;
    modalRef.componentInstance.create = false;
    modalRef.componentInstance.adminUpdated.subscribe((data) => {
      if (data === true) {
        window.location.reload();
      }
    });
  }

  createFAQ() {
    const modalRef = this.modalService.open(FaqEditComponent, {size: 'xl'});
    const faq: Faq = {} as Faq;
    modalRef.componentInstance.create = true;
    modalRef.componentInstance.faq = faq;
    modalRef.componentInstance.faqUpdated.subscribe((data) => {
      if (data === true) {window.location.reload(); }
    });
  }

  editFaq(faq: Faq) {
    const  modalRef = this.modalService.open(FaqEditComponent, {size: 'l'});
    modalRef.componentInstance.faq = faq;
    modalRef.componentInstance.create = false;
    modalRef.componentInstance.faqUpdated.subscribe((data) => {
      if (data === true) {
        window.location.reload();
      }
    });
  }

  createProduct() {
    const modalRef = this.modalService.open(ProductEditComponent, {size: 'xl'});
    const product: Product = {} as Product;
    modalRef.componentInstance.create = true;
    modalRef.componentInstance.product = product;
    modalRef.componentInstance.productUpdated.subscribe((data) => {
      if (data === true) {window.location.reload(); }
    });
  }

  editProduct(product: Product) {
    const  modalRef = this.modalService.open(ProductEditComponent, {size: 'l'});
    modalRef.componentInstance.product = product;
    modalRef.componentInstance.create = false;
    modalRef.componentInstance.productUpdated.subscribe((data) => {
      if (data === true) {
        window.location.reload();
      }
    });
  }



}
