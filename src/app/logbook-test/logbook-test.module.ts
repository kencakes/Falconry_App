import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogbookTestPageRoutingModule } from './logbook-test-routing.module';

import { LogbookTestPage } from './logbook-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogbookTestPageRoutingModule
  ],
  declarations: [LogbookTestPage]
})
export class LogbookTestPageModule {}
