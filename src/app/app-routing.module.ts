import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { combineLatest } from 'rxjs';
import { QuestionListComponent } from './question-list/question-list.component';
import { CheckComponent } from './check/check.component';
import { ScoreService } from './score.service';
import { ExamComponentComponent } from './exam/exam.component';

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
  },

  {
    path: 'score',
    component: ScoreService,
  },

  {
    path: 'exam',
    component: ExamComponentComponent,
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
