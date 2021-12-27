import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerminologiePageRoutingModule } from './terminologie-routing.module';

import { TerminologiePage } from './terminologie.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerminologiePageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [TerminologiePage]
})
export class TerminologiePageModule {}
