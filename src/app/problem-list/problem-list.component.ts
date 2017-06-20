/**
 * Created by LWells on 13.06.2017.
 */
import {Component, Input} from '@angular/core';
import {Problem} from "../domain/problem";
import {ProblemListService} from "./problem-list.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ParametersForGeneration} from "../domain/parametersForGeneration";

@Component({
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css'],
})
export class ProblemListComponent {

  @Input()
  private _success = "Урок додано на вивчення";

  problems: Problem[];
 /* machineSolove: Machine*/
  parametersForGeneration: ParametersForGeneration;
  algorithmSelectedValues: string[];
  selectedProblemId: number;
  closeResult: string;

  constructor(private modalService: NgbModal, private problemListService: ProblemListService) {
  }

  ngOnInit(): void {
    this.problemListService.getProblems().subscribe(problems => {
      this.problems = problems;
      for(let problem of this.problems) {
        this.problemListService.getSolutionsForProblem(problem.id).subscribe(solutions => {
          problem.solutions = solutions;
        });
      }
    });
    this.parametersForGeneration = new ParametersForGeneration;
    this.algorithmSelectedValues = [];
    this.selectedProblemId = 0;
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  createProblem(){
    this.problemListService.createProblem(this.parametersForGeneration);
  }

  resolve() {
    console.log(this.selectedProblemId);
    console.log(this.algorithmSelectedValues);
    if(this.algorithmSelectedValues.length > 0) {
      this.problemListService.resolve(this.selectedProblemId, this.algorithmSelectedValues);
    }
    this.algorithmSelectedValues = [];
  }

  onTabOpen(problemId) {
    this.selectedProblemId = problemId;
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
