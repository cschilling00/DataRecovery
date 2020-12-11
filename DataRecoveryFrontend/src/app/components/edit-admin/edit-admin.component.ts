import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Admin} from '../../shared/models/admin';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../../shared/services/admin.service';
import {ModalDismissReasons, NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.scss']
})
export class EditAdminComponent implements OnInit {

  @Input() admin: Admin;
  @Input() create: boolean;
  @Output() adminUpdated = new EventEmitter<boolean>();
  editAdmin: Admin;
  EditForm: FormGroup;
  closeResult = '';

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private adminService: AdminService) { }

  ngOnInit(): void {
    this.EditForm = new FormGroup({
      adminId: new FormControl(null, [Validators.required]),
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null),
    });
    this.EditForm.patchValue(this.admin);
  }

  createAdmin(){
    this.admin = (this.EditForm.value as Admin);
    console.log(this.admin);
    this.adminService.createAdmin(this.admin).subscribe( data => {
      console.log(data);
      this.adminUpdated.emit(true);
    });
    this.activeModal.close();
  }

  updateAdmin() {
    console.log('admin: ' + JSON.stringify(this.admin));
    this.editAdmin = this.admin;
    this.editAdmin = (this.EditForm.value as Admin);
    console.log('editAdmin: ' + JSON.stringify(this.editAdmin));
    console.log("Admin id: " + this.admin.id);
    this.adminService.updateAdmin(Number(this.admin.id), this.editAdmin).subscribe( data => {
      console.log("Updated Admin: " + data);
      this.adminUpdated.emit(true);
    } );
    this.activeModal.close();
  }

  deleteAdmin(modal){
    modal.close();
    this.editAdmin = (this.EditForm.value as Admin);
    this.adminService.updateAdmin(Number(this.admin.id), this.editAdmin).subscribe( data => {
      console.log(data);
      this.adminUpdated.emit(true);
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
