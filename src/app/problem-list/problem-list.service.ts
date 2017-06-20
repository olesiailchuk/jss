import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Problem} from "../domain/problem";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Solution} from "../domain/solution";
/**
 * Created by LWells on 18.06.2017.
 */


@Injectable()
export class ProblemListService {

  constructor(private http: Http) {
  }

  getProblems(): Observable<Problem[]> {
    return this.http
      .get('http://dev.agrocore.com.ua:8080/problems')
      .map((res: Response) => {
          console.log(res.json().problems);
          return res.json() as Problem[];
        }
        ,
        msg => { // Error
          console.error(msg);
        });
  }

  getSolutionsForProblem(problemId): Observable<Solution[]> {
    let getProblemSolutionUrl = 'http://dev.agrocore.com.ua:8080/' + problemId + '/solutions';

    return this.http
      .get(getProblemSolutionUrl)
      .map((res: Response) => {
          console.log(res.json().problems);
          return res.json() as Solution[];
        }
        ,
        msg => { // Error
          console.error(msg);
        });
  }

  createProblem(parametersForGeneration) {
    let params = new URLSearchParams();
    params.set('jobAmount', parametersForGeneration.jobAmount);
    params.set('averageDuration', parametersForGeneration.averageDuration);
    params.set('machineAmount', parametersForGeneration.machineAmount);
    params.set('maxPower', parametersForGeneration.maxPower.toString());
    params.set('downtimeProbability', parametersForGeneration.downtimeProbability);
    params.set('averageDowntime', parametersForGeneration.averageDowntime);
    console.log(params);
    /*    this.http
     .get('http://dev.agrocore.com.ua:8080/generate', {params: params})
     .toPromise()
     .then(data => {
     alert('ok');
     }, error => {
     console.log(error.json());
     });*/

    let generateProblemUrl = 'http://dev.agrocore.com.ua:8080/generate' + '?name=' + parametersForGeneration.name.toString() + '&jobAmount=' + parametersForGeneration.jobAmount.toString() + '&averageDuration='
      + parametersForGeneration.averageDuration.toString() + '&machineAmount=' + parametersForGeneration.machineAmount.toString() +
      '&maxPower=' + parametersForGeneration.maxPower.toString() + '&downtimeProbability=' + parametersForGeneration.downtimeProbability.toString() +
      '&downtimeProbability=' + parametersForGeneration.averageDowntime.toString();
    this.http.get(generateProblemUrl).subscribe(res => console.log(res.json()));
  }

  resolve(problemId, algorithms) {
    for (let algorithm of algorithms) {
      let soloveUrl = 'http://dev.agrocore.com.ua:8080/solve/' + problemId.toString() + '/' + algorithm.toString()
      this.http.get(soloveUrl).subscribe(res => console.log(res.json()));
    }
  }
}

/*http://dev.agrocore.com.ua:8080/problems*/
/*assets/data/problems/problems.json*/
