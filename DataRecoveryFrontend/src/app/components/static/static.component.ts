import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AdminService} from '../../shared/services/admin.service';
import {Admin} from '../../shared/models/admin';
import {FaqService} from '../../shared/services/faq.service';
import {Faq} from '../../shared/models/faq';
import {ProductService} from '../../shared/services/product.service';
import {Product} from '../../shared/models/product';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EditAdminComponent} from '../edit-admin/edit-admin.component';

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

  createAdmin() {
    const modalRef = this.modalService.open(EditAdminComponent, {size: 'xl'});
    const admin: Admin = {} as Admin;
    modalRef.componentInstance.create = true;
    modalRef.componentInstance.admin = admin;
    modalRef.componentInstance.adminUpdated.subscribe((data) => {
      if (data === true) {window.location.reload(); }
    });
  }

  open(admin: Admin){
    const  modalRef = this.modalService.open(EditAdminComponent, {size: 'l'});
    modalRef.componentInstance.admin = admin;
    modalRef.componentInstance.create = false;
    modalRef.componentInstance.adminUpdated.subscribe((data) => {
      if (data === true) {
        window.location.reload();
      }
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

  editProduct(i: number, product: Product) {
    this.productService.updateProduct(i, product).subscribe(products => {

    });
  }

  editFaq(i: number, faq) {
    this.faqService.updateFaq(i, faq).subscribe(faqs => {

    });
  }

  deleteFAQ() {
    console.log("delete");
  }
  deleteProduct() {
    console.log("delete");
  }
  deleteAdmin() {
    console.log("delete");
  }


  createProduct() {
    console.log("create");
  }
  createFAQ() {
    console.log("create");
  }



}
