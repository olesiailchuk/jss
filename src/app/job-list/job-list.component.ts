/**
 * Created by LWells on 13.06.2017.
 */
import {Component, Input} from '@angular/core';
import {Job} from "../domain/job";

@Component({
  selector: 'job',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
})
export class JobListComponent {

  @Input()
  job: Job;

  constructor() {
  }
}
