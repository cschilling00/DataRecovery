import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {News} from '../../shared/models/news';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NewsService} from '../../shared/services/news.service';
import {ModalDismissReasons, NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.scss']
})
export class NewsEditComponent implements OnInit {

  @Input() news: News;
  @Input() create: boolean;
  @Output() newsUpdated = new EventEmitter<boolean>();
  editNews: News;
  EditForm: FormGroup;
  closeResult = '';

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private newsService: NewsService) { }

  ngOnInit(): void {
    this.EditForm = new FormGroup({
      id: new FormControl(null, [Validators.required]),
      title: new FormControl(null, [Validators.required]),
      text: new FormControl(null),
    });
    this.EditForm.patchValue(this.news);
  }

  createNews(){
    this.news = (this.EditForm.value as News);
    console.log(this.news);
    this.newsService.createNews(this.news).subscribe( data => {
      console.log(data);
      this.newsUpdated.emit(true);
    });
    this.activeModal.close();
  }

  updateNews() {
    console.log('news: ' + JSON.stringify(this.news));
    this.editNews = this.news;
    this.editNews = (this.EditForm.value as News);
    console.log('editNews: ' + JSON.stringify(this.editNews));
    console.log("News id: " + this.news.id);
    this.newsService.updateNews(Number(this.news.id), this.editNews).subscribe( data => {
      console.log("Updated News: " + data);
      this.newsUpdated.emit(true);
    } );
    this.activeModal.close();
  }

  deleteNews(modal){
    modal.close();
    this.editNews = (this.EditForm.value as News);
    this.newsService.updateNews(Number(this.news.id), this.editNews).subscribe( data => {
      console.log(data);
      this.newsUpdated.emit(true);
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
