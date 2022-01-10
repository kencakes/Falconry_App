import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAchievementPageRoutingModule } from './create-achievement-routing.module';

import { CreateAchievementPage } from './create-achievement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateAchievementPageRoutingModule
  ],
  declarations: [CreateAchievementPage]
})
export class CreateAchievementPageModule {}
