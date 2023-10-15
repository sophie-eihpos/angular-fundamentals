import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
      .nav.navbar-nav { font-size: 15px; }
      #searchForm { margin-right: 100px; }
      @media (max-width: 1200px) { #searchForm { display: none; }}
      li > a.active { color: #F97924; }
    `,
  ],
})
export class NavBarComponent {

  // make it public so that html can reference it directly
  authService: AuthService;

  constructor() {
    // angular 16 - inject service without constructor
    this.authService = inject(AuthService);
  }
}
