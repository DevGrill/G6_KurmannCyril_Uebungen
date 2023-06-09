import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'navigation',
    pathMatch: 'full',
  },
  {
    path: 'navigation',
    loadChildren: () =>
      import('./navigation/navigation.module').then(
        (m) => m.NavigationPageModule
      ),
  },
  {
    path: 'navigation-detail/:value',
    loadChildren: () =>
      import('./navigation-detail/navigation-detail.module').then(
        (m) => m.NavigationDetailPageModule
      ),
  },
  {
    path: 'navigation-detail',
    loadChildren: () =>
      import('./navigation-detail/navigation-detail.module').then(
        (m) => m.NavigationDetailPageModule
      ),
  },
  {
    path: 'zahlen',
    loadChildren: () =>
      import('./zahlen/zahlen.module').then((m) => m.ZahlenPageModule),
  },
  {
    path: 'string',
    loadChildren: () =>
      import('./string/string.module').then((m) => m.StringPageModule),
  },
  {
    path: 'objekte',
    loadChildren: () =>
      import('./objekte/objekte.module').then((m) => m.ObjektePageModule),
  },
  {
    path: 'array',
    loadChildren: () =>
      import('./array/array.module').then((m) => m.ArrayPageModule),
  },
  {
    path: 'data-binding',
    loadChildren: () =>
      import('./data-binding/data-binding.module').then(
        (m) => m.DataBindingPageModule
      ),
  },
  {
    path: 'rechner',
    loadChildren: () =>
      import('./rechner/rechner.module').then((m) => m.RechnerPageModule),
  },
  {
    path: 'filters',
    loadChildren: () => import('./filters/filters.module').then( m => m.FiltersPageModule)
  },
  {
    path: 'pipe',
    loadChildren: () => import('./pipe/pipe.module').then( m => m.PipePageModule)
  },
  {
    path: 'alerts',
    loadChildren: () => import('./alerts/alerts.module').then( m => m.AlertsPageModule)
  },
  {
    path: 'newsletter',
    loadChildren: () => import('./newsletter/newsletter.module').then( m => m.NewsletterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
