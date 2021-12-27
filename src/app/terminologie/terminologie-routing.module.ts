import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerminologiePage } from './terminologie.page';


const routes: Routes = [
  {
    path: '',
    component: TerminologiePage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class TerminologiePageRoutingModule {}
