import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { combineLatest } from 'rxjs';
import { QuestionListComponent } from './question-list/question-list.component';
import { CheckComponent } from './check/check.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full',
  },
  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'list',
    component:QuestionListComponent,
  },
  {
    path: 'check',
    component: CheckComponent,
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
