import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateAchievementPageRoutingModule } from './update-achievement-routing.module';

import { UpdateAchievementPage } from './update-achievement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateAchievementPageRoutingModule
  ],
  declarations: [UpdateAchievementPage]
})
export class UpdateAchievementPageModule {}
