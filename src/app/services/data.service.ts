import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

// import * as _ from 'lodash';

import {
  AngularFireDatabase,
  FirebaseObjectObservable,
  FirebaseListObservable
} from 'angularfire2/database';

@Injectable()
export class DataService {
	version : string = '/v0/';

  constructor(
  	private db : AngularFireDatabase
  ) {}

  private getObject(resource: string) : Observable<any> {
  	return this.db.object(`${this.version}${resource}`);
  }

  private getList(resource : string) : Observable<any> {
  	return this.db.list(`${this.version}${resource}`);
  }

  public getItem(id : string) : Observable<any> {
  	return this.getObject(`item/${id}`);
  }

  public getListByType(listType : string) : Observable<any> {
  	return this.getList(`${listType}stories`);
  }
}