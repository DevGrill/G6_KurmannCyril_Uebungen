import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'Navigation',
      url: '/navigation',
      icon: 'navigate',
    },
    {
      title: 'Navigation Detail',
      url: '/navigation-detail',
      icon: 'navigate',
    },
    {
      title: 'Zahlen',
      url: '/zahlen',
      icon: 'calculator',
    },
    {
      title: 'String',
      url: '/string',

      icon: 'text',
    },
    {
      title: 'Objekte',
      url: '/objekte',
      icon: 'cube',
    },
    {
      title: 'Array',
      url: '/array',
      icon: 'list',
    },
    {
      title: 'Data Binding',
      url: '/data-binding',
      icon: 'list',
    },
    {
      title: 'Rechner',
      url: '/rechner',
      icon: 'calculator',
    },
    {
      title: 'Filters',
      url: '/filters',
      icon: 'list',
    },
    {
      title: 'Pipe',
      url: '/pipe',
      icon: 'list',
    },
    {
      title: 'Alerts',
      url: '/alerts',
      icon: 'alert',
    }
  ];
  constructor() {}
}
