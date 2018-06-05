import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { DataService } from '../../services/data.service';

@Component({
	selector    : 'list-item',
	templateUrl : 'list-item.html',
	styleUrls   : [ 'list-item.scss' ]
})

export class ListItemComponent implements OnInit {
	@Input() itemID   : string;
	@Input() listType : string;

	wrappedItem : Observable<any>;

	constructor(
    private dataService : DataService
  ) {}

  ngOnInit() : void {
		this.wrappedItem = this.dataService.getItem(this.itemID);
  }

  showItem(item) : boolean {
  	let show : boolean = true;

  	if (!item.url && this.listType !== 'ask' && (item.type === 'story' || item.type === 'job'))
  		show = false;

  	return show;
  }

  getDomain(url : string) : string {
  	return url ? url.split('//')[1].split('/')[0] : '';
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