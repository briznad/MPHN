import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

import { DataService } from '../../services/data.service';

import { GetLapsedTime } from '../../helpers/time';

@Component({
  selector    : 'user',
  templateUrl : 'user.html',
  styleUrls   : [ 'user.scss' ]
})

export class UserComponent implements OnInit {
  wrappedUser : Observable<any>;

  getLapsedTime = GetLapsedTime;

	constructor(
    private route       : ActivatedRoute,
    private dataService : DataService
  ) {}

  ngOnInit() : void {
    this.route.params
      .take(1)
      .subscribe(params => this.wrappedUser = this.dataService.getUser(params.username));
  }
}