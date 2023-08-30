// score.component.ts
import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../shared/question.service';
import { Question } from '../shared/question';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
})
export class ScoreComponent implements OnInit {
  correctAnswersCount: number = 0;
  incorrectAnswersCount: number = 0;

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.questionService.getQuestions().subscribe(
      (questions: Question[]) => {
        this.correctAnswersCount = questions.filter(question => question.isCorrect).length;
        this.incorrectAnswersCount = questions.filter(question => !question.isCorrect).length;
      },
      (error) => {
        console.error('Error loading questions:', error);
      }
    );
  }
}
