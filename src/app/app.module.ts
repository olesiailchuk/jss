import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProblemListComponent} from "./problem-list/problem-list.component";
import {routing} from "./app.routing";
import {NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ProblemListService} from "./problem-list/problem-list.service";
import {HttpModule} from "@angular/http";
import {JobListComponent} from "./job-list/job-list.component";

import {AccordionModule, ButtonModule, CheckboxModule, TabViewModule} from "primeng/primeng";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    JobListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    HttpModule,
    TabViewModule,
    routing,
    AccordionModule,
    ButtonModule,
    CheckboxModule
  ],
  providers: [
    ProblemListService,
    NgbModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
