import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss'],
})
export class FiltersPage implements OnInit {
  uppercase: string = 'HIER STEHT EIN GROSSER TEXT';
  lowercase: string = 'hier steht ein kleiner text';
  date: Date = new Date();

  constructor() {}

  ngOnInit() {}
}
