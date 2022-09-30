import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import CONFIG from '../config';
import sendToken from '../auth.interceptor';

@Injectable()

export class  RuleService {

  constructor(public http: Http) { }

  showRules() {
    return new Promise((resolve, reject) => {
      this.http.get(CONFIG.API + 'campo', sendToken())
        .subscribe((campos) => {
          resolve(campos.json())
        }, (err) => {
          reject(err)
        })
    })
  }

}
