import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {EventModel} from "../../models/event.model";
import {Observable} from "rxjs/Observable";

/**
 * Generated class for the EventHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-home',
  templateUrl: 'event-home.html',
})
export class EventHomePage {

  eventModel: EventModel

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.eventModel = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventHomePage');
  }

}
