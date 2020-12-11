import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {NewsService} from "../../shared/services/news.service";
import {News} from "../../shared/models/news";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private newsService: NewsService) { }
  public innerWidth: any;
  public newsList: News[];
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.newsService.getNews().subscribe(data => {
      this.newsList = data;
    })
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }
}
