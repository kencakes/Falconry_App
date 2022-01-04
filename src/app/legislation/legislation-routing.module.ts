import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegislationPage } from './legislation.page';

const routes: Routes = [
  {
    path: '',
    component: LegislationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegislationPageRoutingModule {}
