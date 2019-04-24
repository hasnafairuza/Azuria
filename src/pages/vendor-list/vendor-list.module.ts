import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VendorListPage } from './vendor-list';

@NgModule({
  declarations: [
    VendorListPage,
  ],
  imports: [
    IonicPageModule.forChild(VendorListPage),
  ],
})
export class VendorListPageModule {}
