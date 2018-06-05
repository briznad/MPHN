import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

import { DataService } from '../../services/data.service';

import { GetLapsedTime } from '../../helpers/time';

@Component({
  selector    : 'item',
  templateUrl : 'item.html',
  styleUrls   : [ 'item.scss' ]
})

export class ItemComponent implements OnInit {
  wrappedItem : Observable<any>;

  getLapsedTime = GetLapsedTime;

	constructor(
    private route       : ActivatedRoute,
    private dataService : DataService
  ) {}

  ngOnInit() : void {
    this.route.params
      .take(1)
      .subscribe(params => this.wrappedItem = this.dataService.getItem(params.id));
  }
}