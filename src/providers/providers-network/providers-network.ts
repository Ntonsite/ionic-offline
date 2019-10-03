import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProvidersNetworkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProvidersNetworkProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProvidersNetworkProvider Provider');
  }

}
