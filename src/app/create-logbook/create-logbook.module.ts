import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateLogbookPageRoutingModule } from './create-logbook-routing.module';

import { CreateLogbookPage } from './create-logbook.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateLogbookPageRoutingModule
  ],
  declarations: [CreateLogbookPage]
})
export class CreateLogbookPageModule {}
