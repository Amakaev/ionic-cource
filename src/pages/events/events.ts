import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {EventsProvider} from "../../providers/events/events.provider";
import {Observable} from "rxjs/Observable";
import {EventModel} from "../../models/event.model";

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
export class EventsPage implements OnInit {

  events: Observable<EventModel[]>;

  ngOnInit(): void {
    this.events = this.eventsProvider.query();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private eventsProvider: EventsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

}
