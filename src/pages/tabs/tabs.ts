import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MenuPage } from '../menu/menu';
import { AddPage } from '../add/add';
import { NotifPage } from '../notif/notif';
import { SettingPage } from '../setting/setting';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MenuPage;
  tab3Root = AddPage;
  tab4Root = NotifPage;
  tab5Root = SettingPage;

  constructor() {

  }
}
