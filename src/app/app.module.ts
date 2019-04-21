import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// import { AboutPage } from '../pages/about/about';
// import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { AddPage } from '../pages/add/add';
import { NotifPage } from '../pages/notif/notif';
import { SettingPage } from '../pages/setting/setting';
import { TabsPage } from '../pages/tabs/tabs';
import { TaskPage }from'../pages/task/task';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CompletedPage } from '../pages/completed/completed';
import { TotalPage } from '../pages/total/total';
import { UsedPage } from '../pages/used/used';
import { GuestPage } from '../pages/guest/guest';
import { ConfirmedPage } from '../pages/confirmed/confirmed';
import { VendorPage } from '../pages/vendor/vendor';
import { ReservedPage } from '../pages/reserved/reserved';

@NgModule({
  declarations: [
    MyApp,
    // AboutPage,
    // ContactPage,
    MenuPage,
    AddPage,
    NotifPage,
    SettingPage,
    HomePage,
    TabsPage,
    TaskPage,
    CompletedPage,
    TotalPage,
    UsedPage,
    GuestPage,
    ConfirmedPage,
    VendorPage,
    ReservedPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // AboutPage,
    // ContactPage,
    MenuPage,
    AddPage,
    NotifPage,
    SettingPage,
    HomePage,
    TabsPage,
    TaskPage,
    CompletedPage,
    TotalPage,
    UsedPage,
    GuestPage,
    ConfirmedPage,
    VendorPage,
    ReservedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
