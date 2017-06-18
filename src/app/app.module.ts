import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProblemListComponent} from "./problem-list/problem-list.component";
import {routing} from "./app.routing";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ProblemListService} from "./problem-list/problem-list.service";
import {HttpModule} from "@angular/http";
import {JobListComponent} from "./job-list/job-list.component";

@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    JobListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule,
    routing
  ],
  providers: [
    ProblemListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
