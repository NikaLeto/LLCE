import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../shared/question';
import { QuestionService } from '../shared/question.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  qestions$ : Observable<Question[]>

  constructor(private service:QuestionService){
       this.qestions$ = this.service.getQuestions()
  }
}
