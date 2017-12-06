import {InterestTypes} from "./iterest-types.enum";

export interface EventModel {
  imgUrl: string,
  displayName: string;
  title: string;
  entityId: number;
  location: LocationModel;
  interestType: InterestTypes

}

export interface LocationModel {
  name: string;
}
