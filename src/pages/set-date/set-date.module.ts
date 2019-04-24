import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetDatePage } from './set-date';

@NgModule({
  declarations: [
    SetDatePage,
  ],
  imports: [
    IonicPageModule.forChild(SetDatePage),
  ],
})
export class SetDatePageModule {}
