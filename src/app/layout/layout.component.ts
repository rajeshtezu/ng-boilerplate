import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RoutePath } from '../constant/routes';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (!localStorage.getItem('user')) {
      this.router.navigateByUrl(RoutePath.LOGIN);
    }
  }
}
