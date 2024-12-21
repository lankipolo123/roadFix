import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnGoingPageRoutingModule } from './on-going-routing.module';

import { OnGoingPage } from './on-going.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnGoingPageRoutingModule
  ],
  declarations: [OnGoingPage]
})
export class OnGoingPageModule {}
