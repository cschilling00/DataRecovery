import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Faq} from "../../shared/models/faq";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ModalDismissReasons, NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FaqService} from "../../shared/services/faq.service";

@Component({
  selector: 'app-faq-edit',
  templateUrl: './faq-edit.component.html',
  styleUrls: ['./faq-edit.component.scss']
})
export class FaqEditComponent implements OnInit {
  @Input() faq: Faq;
  @Input() create: boolean;
  @Output() faqUpdated = new EventEmitter<boolean>();
  editFaq: Faq;
  EditForm: FormGroup;
  closeResult = '';

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private faqService: FaqService) { }

  ngOnInit(): void {
    this.EditForm = new FormGroup({
      faqId: new FormControl(null, [Validators.required]),
      question: new FormControl(null, [Validators.required]),
      answer: new FormControl(null),
    });
    this.EditForm.patchValue(this.faq);
  }

  createFaq(){
    this.faq = (this.EditForm.value as Faq);
    console.log(this.faq);
    this.faqService.createFaq(this.faq).subscribe( data => {
      console.log(data);
      this.faqUpdated.emit(true);
    });
    this.activeModal.close();
  }

  updateFaq() {
    console.log('faq: ' + JSON.stringify(this.faq));
    this.editFaq = this.faq;
    this.editFaq = (this.EditForm.value as Faq);
    console.log('editFaq: ' + JSON.stringify(this.editFaq));
    console.log("Faq id: " + this.faq.id);
    this.faqService.updateFaq(Number(this.faq.id), this.editFaq).subscribe( data => {
      console.log("Updated Faq: " + data);
      this.faqUpdated.emit(true);
    } );
    this.activeModal.close();
  }

  deleteFaq(modal){
    modal.close();
    this.editFaq = (this.EditForm.value as Faq);
    this.faqService.deleteFaq(Number(this.faq.id)).subscribe( data => {
      console.log(data);
      this.faqUpdated.emit(true);
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
