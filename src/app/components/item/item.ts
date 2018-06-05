import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

import { DataService } from '../../services/data.service';

@Component({
  selector    : 'item',
  templateUrl : 'item.html',
  styleUrls   : [ 'item.scss' ]
})

export class ItemComponent implements OnInit {
  wrappedItem : Observable<any>;

	constructor(
    private route       : ActivatedRoute,
    private dataService : DataService
  ) {}

  ngOnInit() : void {
    this.route.params
      .take(1)
      .subscribe(params => this.wrappedItem = this.dataService.getItem(params.id));
  }

  getLapsedTime(time : number) : string {
    // time difference in minutes
    let diff : number = Math.round((Date.now() / 1000 - time) / 60);

    // if difference is less than 60 minutes
    if (diff < 60) {
      return this.printLapsedTime(diff, 'minute');
    }

    // time difference in hours
    diff = Math.round(diff / 60);

    // if difference is less than 24 hours
    if (diff < 24) {
      return this.printLapsedTime(diff, 'hour');
    }

    // time difference in days
    diff = Math.round(diff / 24);

    // if difference is less than 10 days
    if (diff < 10) {
      return this.printLapsedTime(diff, 'day');
    }

    // time difference in weeks
    diff = Math.round(diff / 7);

    // if difference is less than 6 weeks
    if (diff < 6) {
      return this.printLapsedTime(diff, 'week');
    }

    // time difference in months
    diff = Math.round(diff / 4);

    // if difference is less than 18 months
    if (diff < 18) {
      return this.printLapsedTime(diff, 'month');
    }

    // time difference in years
    diff = Math.round(diff / 12);

    return this.printLapsedTime(diff, 'year');
  }

  printLapsedTime(diff : number, unit : string) : string {
    return `${ diff < 1 ? 1 : diff } ${ unit }${ diff <= 1 ? '' : 's' }`;
  }
}