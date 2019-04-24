import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuestListPage } from './guest-list';

@NgModule({
  declarations: [
    GuestListPage,
  ],
  imports: [
    IonicPageModule.forChild(GuestListPage),
  ],
})
export class GuestListPageModule {}
