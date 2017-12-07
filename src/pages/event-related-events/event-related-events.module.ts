import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventRelatedEventsPage } from './event-related-events';

@NgModule({
  declarations: [
    EventRelatedEventsPage,
  ],
  imports: [
    IonicPageModule.forChild(EventRelatedEventsPage),
  ],
})
export class EventRelatedEventsPageModule {}
