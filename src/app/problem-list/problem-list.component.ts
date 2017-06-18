/**
 * Created by LWells on 13.06.2017.
 */
import {Component, Input} from '@angular/core';
import {Problem} from "../domain/problem";
import {ProblemListService} from "./problem-list.service";

@Component({
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css'],
})
export class ProblemListComponent {

  @Input()
  private _success = "Урок додано на вивчення";

  problems: Problem[];

  constructor(private problemListService: ProblemListService) {
  }

  ngOnInit(): void {
    this.problemListService.getProblems().subscribe(problems => {
      this.problems = problems;
    });
  }

}
