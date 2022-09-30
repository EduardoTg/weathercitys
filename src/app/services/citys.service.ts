import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import CONFIG from '../config';

@Injectable()

export class  CityService {

  constructor(public http: HttpClient) { }

  showRules() {
    return new Promise((resolve, reject) => {
      this.http.get(CONFIG.API + 'citys')
        .subscribe((citys) => {
          resolve(citys)
        }, (err) => {
          reject(err)
        })
    })
  }

}
