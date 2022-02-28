import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
// RxJS v6+
import { BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class DataService {
private url = environment.basePath;
  constructor(private httpClient: HttpClient) { 

    
  }
  getPosts(){
    return this.httpClient.get(this.url);
  }


  getrepodata(){
    // https://api.github.com/users/saurabhpanwar67412/repos
    return this.httpClient.get(this.url+'/repos');
  }

  Pagenumber =  new BehaviorSubject<number>(10);

}
