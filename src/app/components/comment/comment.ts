import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { DataService } from '../../services/data.service';

import { GetLapsedTime } from '../../helpers/time';

@Component({
	selector    : 'comment',
	templateUrl : 'comment.html',
	styleUrls   : [ 'comment.scss' ]
})

export class CommentComponent implements OnInit {
	@Input() commentID : string;
	@Input() nested    : boolean;

	wrappedComment : Observable<any>;
	visible        : boolean = true;

	getLapsedTime = GetLapsedTime;

	constructor(
    private dataService : DataService
  ) {}

  ngOnInit() : void {
		this.wrappedComment = this.dataService.getItem(this.commentID);
  }
}