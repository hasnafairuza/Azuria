import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservedPage } from './reserved';

@NgModule({
  declarations: [
    ReservedPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservedPage),
  ],
})
export class ReservedPageModule {}
