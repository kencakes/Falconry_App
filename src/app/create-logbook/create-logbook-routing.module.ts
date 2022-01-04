import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateLogbookPage } from './create-logbook.page';

const routes: Routes = [
  {
    path: '',
    component: CreateLogbookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateLogbookPageRoutingModule {}
