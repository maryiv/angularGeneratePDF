import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-section',
  templateUrl: './layout.component.html'
})

export class CustomTaskLayoutComponent implements OnInit {
  isSideBar: Boolean = true;

  /** @inheritdoc */
  constructor(private router: Router) {
    router.events.subscribe((val) => {
      this.isSideBar = !(this.router.url.split('?')[0] === '/sign-in' || router.url === '/registration');
    });
  }

  /** @inheritdoc */
  ngOnInit() {
    // TODO: add logic
  }
}
