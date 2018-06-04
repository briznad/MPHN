import { Component, HostBinding } from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
	selector    : 'header-bar',
	templateUrl : 'header.html',
	styleUrls   : [ 'header.scss' ]
})

export class HeaderComponent {
	title         : string = 'MPHN';
  env           : string = environment.env;

	constructor() {}
}