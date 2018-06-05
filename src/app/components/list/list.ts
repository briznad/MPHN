import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { DataService } from '../../services/data.service';

@Component({
  selector    : 'list',
  templateUrl : 'list.html',
  styleUrls   : [ 'list.scss' ]
})

export class ListComponent implements OnInit {
  list      : Observable<any>;
  listType  : string;
  page      : number;
  pageSize  : number = 20;
  pageCount : number = 1;

	constructor(
    private route       : ActivatedRoute,
    private dataService : DataService
  ) {}

  ngOnInit() : void {
    this.route.url
      .subscribe(url => {
        // set current list type
        this.listType = url[0].path;

        // set current page
        let page;

        if (url[1] && url[1].path) {
          page = parseInt(url[1].path);
        }

        this.page = page && !isNaN(page) ? page : 1;

        // get paginated list of IDs
        this.list = this.dataService.getListByType(this.listType)
          .map(list => {
            this.pageCount = Math.ceil(list.length / this.pageSize);

            return list.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
          });
      });
  }
}