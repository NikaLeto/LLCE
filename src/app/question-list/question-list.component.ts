import { Component } from '@angular/core';
import { QuestionService } from '../shared/question.service';
import { Observable } from 'rxjs';
import { Question } from '../shared/question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent {
  questions$: Observable<Question[]>;

  constructor(private service: QuestionService) {
    this.questions$ = this.service.getQuestions();
  }
  toggleOptions(question: Question) {
    question.showOptions = !question.showOptions;
  }

  toggleAnswer(question: Question) {
    question.showAnswer = !question.showAnswer;
  }
}
