import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms';
import { HttpModule }          from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';

// imports for loading Firebase/AngularFire
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// components
import { AppComponent }  from './components/app/app';
import { ModalComponent }  from './components/modal/modal';
import { SnackBarComponent }  from './components/snack-bar/snack-bar';
import { HeaderComponent }  from './components/header/header';
import { ListComponent }   from './components/list/list';
import { PaginationComponent }   from './components/pagination/pagination';
import { ListItemComponent }   from './components/list-item/list-item';
import { ItemComponent }   from './components/item/item';
import { CommentComponent }   from './components/comment/comment';
import { UserComponent }   from './components/user/user';

// Services
import { DataService } from './services/data.service';
import { SnackBarService } from './services/snack-bar.service';

@NgModule({
  imports      : [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  declarations : [
    AppComponent,
    ModalComponent,
    SnackBarComponent,
    HeaderComponent,
    ListComponent,
    PaginationComponent,
    ListItemComponent,
    ItemComponent,
    CommentComponent,
    UserComponent
  ],
  providers    : [
    DataService,
    SnackBarService
  ],
  bootstrap    : [
    AppComponent
  ]
})

export class AppModule {}