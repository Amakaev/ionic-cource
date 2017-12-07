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
import {EventDetailsPage} from "../pages/event-details/event-details";
import {EventHomePage} from "../pages/event-home/event-home";
import {EventRelatedEventsPage} from "../pages/event-related-events/event-related-events";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PeoplePage,
    OrganizationsPage,
    EventsPage,
    EventDetailsPage,
    EventHomePage,
    EventRelatedEventsPage
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
    OrganizationsPage,
    EventDetailsPage,
    EventHomePage,
    EventRelatedEventsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    EventsProvider,
    HttpClient,
  ]
})
export class AppModule {
}
