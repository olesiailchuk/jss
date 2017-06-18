/**
 * Created by LWells on 18.06.2017.
 */
import {Routes, RouterModule} from '@angular/router';
import {ProblemListComponent} from "./problem-list/problem-list.component";



const appRoutes: Routes = [
  {path: 'problems-list', component: ProblemListComponent},
  {path: '**', redirectTo: 'problems-list'}
];

export const routing = RouterModule.forRoot(appRoutes);
