import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-trello-section',
  templateUrl: './layout.component.html'
})

export class TrelloTaskLayoutComponent {
  isSideBar: Boolean = true;

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      this.isSideBar = !(this.router.url.split('?')[0] === '/sign-in' || router.url === '/registration');
    });
  }
}
