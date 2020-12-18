import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public currentRoute: string;
  public isMenuCollapsed = true;
  public showToast = true;
  faWhatsapp = faWhatsapp
  @ViewChild(HomeComponent) homeRef;
  constructor(private router: Router) {
    router.events.subscribe(val => {
      this.currentRoute = location.pathname;
    });
  }

  ngOnInit(): void {
  }

  scrollToPrice() {
    const el = document.getElementById('priceList');
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
  scrollToContact() {
    document.getElementById('contactSelect').click();
    const el = document.getElementById('scrollAnchorContactForm');
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });

  }
}
