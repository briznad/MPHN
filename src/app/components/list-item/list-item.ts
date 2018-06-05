import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { DataService } from '../../services/data.service';

import { GetLapsedTime } from '../../helpers/time';

@Component({
	selector    : 'list-item',
	templateUrl : 'list-item.html',
	styleUrls   : [ 'list-item.scss' ]
})

export class ListItemComponent implements OnInit {
	@Input() itemID   : string;
	@Input() listType : string;

	wrappedItem : Observable<any>;

	getLapsedTime = GetLapsedTime;

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
}