import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateLogbookPageRoutingModule } from './update-logbook-routing.module';

import { UpdateLogbookPage } from './update-logbook.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateLogbookPageRoutingModule
  ],
  declarations: [UpdateLogbookPage]
})
export class UpdateLogbookPageModule {}
