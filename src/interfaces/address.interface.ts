import { GeoLocation } from './geo-location.interface';

export interface Address {
  city: string;
  suite: string;
  street: string;
  zipcode: string;

  geo: GeoLocation;
}
