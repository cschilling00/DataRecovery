import { Component, OnInit } from '@angular/core';
import {Faq} from '../../shared/models/faq';
import {Observable} from 'rxjs';
import {FaqService} from '../../shared/services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  faqs: Faq[];
  faqs$: Observable<Faq[]>;
  public isCollapsed = true;

  constructor(private backendService: FaqService) { }

  ngOnInit(): void {

    this.faqs$ = this.backendService.getFaqs();
    this.backendService.getFaqs().
    subscribe(data => {
      this.faqs = data;
      console.log(data);
      console.log(this.faqs);

    });
  }


}
