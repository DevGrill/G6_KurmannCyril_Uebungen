import { Component, OnInit } from '@angular/core';
import { Frucht, Frucht2 } from '../../types';

@Component({
  selector: 'app-array',
  templateUrl: './array.page.html',
  styleUrls: ['./array.page.scss'],
})
export class ArrayPage implements OnInit {
  fruechte: Frucht[] = [
    { name: 'Orange' },
    { name: 'Banane' },
    { name: 'Apfel' },
  ];

  fruechte2: Frucht2[] = [
    {
      name: 'Orange',
      imgUrl:
        'https://www.boeschbodenspies.com/wp-content/uploads/2017/08/orange.png',
    },
    {
      name: 'Banane',
      imgUrl:
        'https://www.barthfruit.ch/custom/images/contentBilder/big/img_0658_banane.jpg',
    },
    {
      name: 'Apfel',
      imgUrl: 'https://www.swissfruit.ch/wp-content/uploads/2021/06/gala.jpg',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
