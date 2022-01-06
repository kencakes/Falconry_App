import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateLogbookPage } from './update-logbook.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateLogbookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateLogbookPageRoutingModule {}
