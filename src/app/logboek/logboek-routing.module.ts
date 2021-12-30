import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogboekPage } from './logboek.page';

const routes: Routes = [
  {
    path: '',
    component: LogboekPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogboekPageRoutingModule {}
