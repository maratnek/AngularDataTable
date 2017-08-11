import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataTableService {

  constructor(public http: Http) {
    console.log('Service Start ...');
  }
  getDataTable(){
    // http://www.json-generator.com/api/json/get/bVDPbHQIKq?indent=2

    // http://www.json-generator.com/api/json/get/ccsbRIQYAy?indent=2
    return this.http.get('http://www.json-generator.com/api/json/get/ccsbRIQYAy?indent=2')
    .map(res => res.json());
  }

}
