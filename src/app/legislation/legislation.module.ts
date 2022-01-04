import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegislationPageRoutingModule } from './legislation-routing.module';

import { LegislationPage } from './legislation.page';

import { File } from '@ionic-native/file/ngx';
import { HTTP } from '@ionic-native/http/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegislationPageRoutingModule
  ],
  declarations: [LegislationPage],
  providers: [File, HTTP]
})
export class LegislationPageModule {}
