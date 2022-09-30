import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import CONFIG from '../config';
import sendToken from '../auth.interceptor';

@Injectable()

export class  RuleService {

  constructor(public http: Http) { }

  showRules() {
    return new Promise((resolve, reject) => {
      this.http.get(CONFIG.API + 'citys', sendToken())
        .subscribe((citys) => {
          resolve(citys.json())
        }, (err) => {
          reject(err)
        })
    })
  }

}
