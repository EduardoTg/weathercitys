 import { Headers, RequestOptions } from '@angular/http';


export default function () {

  const token = window.localStorage.getItem('token');
  if (token) {
    const headers = new Headers({ 'Authorization': 'Bearer ' + token });
    return new RequestOptions({ headers: headers });
  } else {
    return  new RequestOptions({});
  }
} 
