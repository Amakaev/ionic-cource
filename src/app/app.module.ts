import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';

import {EventsPage, HomePage, OrganizationsPage, PeoplePage} from "../pages/pages";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ApiProvider} from '../providers/api/api';
import {EventsProvider} from '../providers/events/events.provider';
import {HttpClient, HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PeoplePage,
    OrganizationsPage,
    EventsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventsPage,
    PeoplePage,
    OrganizationsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    EventsProvider,
    HttpClient
  ]
})
export class AppModule {
}
