import {Job} from "./job";
import {Machine} from "./machine";
/**
 * Created by LWells on 18.06.2017.
 */
export class Problem {
  id: number;
  name: string;
  answer: number;
  createTimestamp: string;
  jobs: Job[];
  machines: Machine[];
}
