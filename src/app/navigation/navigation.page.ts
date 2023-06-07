import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.page.html',
  styleUrls: ['./navigation.page.scss'],
})
export class NavigationPage implements OnInit {
  value: string = '';
  constructor(private router: Router) {}

  ngOnInit() {
    this.value = '';
  }

  routeWithValue() {
    this.router.navigate(['/navigation-detail', this.value]);
  }

  routeByURL() {
    this.router.navigateByUrl('/navigation-detail');
  }
}
