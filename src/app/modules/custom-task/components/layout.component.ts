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
      console.log('!!!', this.router.url);
      // this.isSideBar = !(this.router.url.split('?')[0] === '/sign-in' || router.url === '/registration');
    });
  }

  /** @inheritdoc */
  ngOnInit() {
    console.log('I\'m here!!!', this.isSideBar);
  }
}
