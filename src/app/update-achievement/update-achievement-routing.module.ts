import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateAchievementPage } from './update-achievement.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateAchievementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateAchievementPageRoutingModule {}
