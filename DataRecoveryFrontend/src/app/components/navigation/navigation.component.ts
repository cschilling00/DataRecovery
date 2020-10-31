import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public currentRoute: string;
  public isMenuCollapsed = true;
  constructor(private router: Router) {
    router.events.subscribe(val => {
      this.currentRoute = location.pathname;
    });
  }

  ngOnInit(): void {
  }

}
