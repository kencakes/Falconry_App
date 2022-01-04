import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegislationPageRoutingModule } from './legislation-routing.module';

import { LegislationPage } from './legislation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegislationPageRoutingModule
  ],
  declarations: [LegislationPage]
})
export class LegislationPageModule {}
