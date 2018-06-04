import { Component, Input } from '@angular/core';

@Component({
	selector    : 'pagination',
	templateUrl : 'pagination.html',
	styleUrls   : [ 'pagination.scss' ]
})

export class PaginationComponent {
	@Input() listType  : number;
	@Input() page      : number;
	@Input() pageCount : number;
}