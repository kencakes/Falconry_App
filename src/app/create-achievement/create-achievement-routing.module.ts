import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAchievementPage } from './create-achievement.page';

const routes: Routes = [
  {
    path: '',
    component: CreateAchievementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateAchievementPageRoutingModule {}
