import { Component, OnInit } from '@angular/core';
import { Person } from '../../types';

@Component({
  selector: 'app-objekte',
  templateUrl: './objekte.page.html',
  styleUrls: ['./objekte.page.scss'],
})
export class ObjektePage implements OnInit {
  person: Person = { name: 'Muster', vorname: 'Max' };

  constructor() {}

  ngOnInit() {}
}
