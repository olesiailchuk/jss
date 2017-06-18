import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Problem} from "../domain/problem";
import 'rxjs/add/operator/map';
/**
 * Created by LWells on 18.06.2017.
 */


@Injectable()
export class ProblemListService {

  constructor(private http: Http) {
  }
  getProblems(): Observable<Problem[]> {
    return this.http
      .get('/assets/data/problems/problems.json')
      .map((res: Response) => {
          console.log(res.json().problems);
          return res.json().problems as Problem[];
        }
        ,
        msg => { // Error
          console.error(msg);
        });
  }
}
