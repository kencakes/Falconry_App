import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogbookTestPage } from './logbook-test.page';

const routes: Routes = [
  {
    path: '',
    component: LogbookTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogbookTestPageRoutingModule {}
