import {Component, OnInit} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {EventsProvider} from "../../providers/events/events.provider";
import {Observable} from "rxjs/Observable";
import {EventModel} from "../../models/event.model";
import {EventDetailsPage} from "../event-details/event-details";

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  events: Observable<EventModel[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private eventsProvider: EventsProvider, public  loadCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');

    this.events = this.eventsProvider.query();
    let loader = this.loadCtrl.create({
      content: 'Loading events'
    });
    loader.present().then(() => {
      this.events.subscribe((resp) => {
        loader.dismiss();
      })
    })


  }

  goToDetails($event, event) {
    this.navCtrl.push(EventDetailsPage, event)
  }

}
