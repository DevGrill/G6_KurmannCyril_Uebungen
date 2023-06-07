import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PipePage } from './pipe.page';

const routes: Routes = [
  {
    path: '',
    component: PipePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PipePageRoutingModule {}
