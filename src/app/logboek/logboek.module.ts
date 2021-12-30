import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogboekPageRoutingModule } from './logboek-routing.module';

import { LogboekPage } from './logboek.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogboekPageRoutingModule
  ],
  declarations: [LogboekPage]
})
export class LogboekPageModule {}
