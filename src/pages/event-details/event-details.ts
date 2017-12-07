import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {EventModel} from "../../models/event.model";
import {Observable} from "rxjs/Observable";
import {EventsProvider} from "../../providers/events/events.provider";
import {EventHomePage} from "../event-home/event-home";
import {EventRelatedEventsPage} from "../event-related-events/event-related-events";

/**
 * Generated class for the EventDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
})
export class EventDetailsPage {


  model: EventModel;
  eventHomeTab = EventHomePage;
  eventEventsTab = EventRelatedEventsPage;


  constructor(public navCtrl: NavController, public navParams: NavParams, private eventProvider: EventsProvider, public loadCtrl: LoadingController) {

  }

  ionViewDidLoad() {
    let loader = this.loadCtrl.create({
      content: "Loading data"
    });

    loader.present().then(() => {
      this.eventProvider.get(this.navParams.get('entityId')).subscribe((resp) => {
        this.model = resp;
        loader.dismiss()
      });
    })

    console.log('ionViewDidLoad EventDetailsPage');
  }

}
