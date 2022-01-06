import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmailResetPageRoutingModule } from './email-reset-routing.module';

import { EmailResetPage } from './email-reset.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmailResetPageRoutingModule
  ],
  declarations: [EmailResetPage]
})
export class EmailResetPageModule {}
