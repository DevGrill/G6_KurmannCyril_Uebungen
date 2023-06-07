import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation-detail',
  templateUrl: './navigation-detail.page.html',
  styleUrls: ['./navigation-detail.page.scss'],
})
export class NavigationDetailPage implements OnInit {
  parameter: string = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.parameter = params['value'];
    });
  }
}
