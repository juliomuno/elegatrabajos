import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresenciaPageRoutingModule } from './presencia-routing.module';

import { PresenciaPage } from './presencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresenciaPageRoutingModule
  ],
  declarations: [PresenciaPage]
})
export class PresenciaPageModule {}
