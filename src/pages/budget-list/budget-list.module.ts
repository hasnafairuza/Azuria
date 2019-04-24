import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BudgetListPage } from './budget-list';

@NgModule({
  declarations: [
    BudgetListPage,
  ],
  imports: [
    IonicPageModule.forChild(BudgetListPage),
  ],
})
export class BudgetListPageModule {}
