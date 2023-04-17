import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RoutePath } from '../constant/routes';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      localStorage.clear();
      this.router.navigateByUrl(RoutePath.LOGIN);
    }, 2000);
  }
}
