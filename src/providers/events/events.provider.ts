import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {EventModel} from "../../models/event.model";
import "rxjs/add/observable/of";
import {InterestTypes} from "../../models/iterest-types.enum";

/*
  Generated class for the EventsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventsProvider {


  constructor(public http: HttpClient) {
  }

  query(): Observable<EventModel[]> {
    return Observable.of([{
      entityId: 1,
      imgUrl: 'http://d30txlj2uoegc9.cloudfront.net/2017/08/10/c65b65da-262f-443b-820f-41716995c7d6.jpg',
      interestType: InterestTypes.Detractor,
      displayName: "Alexander makaev",
      title: "Hello from first event",
      location: {name: 'Minsk'}
    }, {
      entityId: 1,
      imgUrl: 'http://d30txlj2uoegc9.cloudfront.net/2017/06/14/9cb1d820-cdd9-4372-bc83-4b82e8c6a9cd.jpg',
      interestType: InterestTypes.Neutral,
      displayName: "Angelina Jolie / Angie",
      title: "Hello from first event",
      location: {name: 'Minsk'}
    }, {
      entityId: 1,
      imgUrl: 'http://d30txlj2uoegc9.cloudfront.net/2017/10/11/2cb0f26e-deb0-4935-9489-843b0d192a53.jpg',
      interestType: InterestTypes.Supporter,
      displayName: "Antonio Anastasiat",
      title: "Hello from first event",
      location: {name: 'Minsk'}
    }])
  }

}
