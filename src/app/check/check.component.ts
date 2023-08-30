import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../shared/question.service';
import { Question } from '../shared/question';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
  questions: Question[] = [];
  currentQuestionIndex: number = 0;
  userAnswers: (string | string[] | null)[] = [];
  showResult: boolean = false;
  incorrectAnswersCount: number = 0;
  maxIncorrectAnswers: number = 7;

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions(): void {
    this.questionService.getQuestions().subscribe(
      (data: Question[]) => {
        this.questions = data;
      },
      (error) => {
        console.error('Error loading questions:', error);
      }
    );
  }



  // checkAnswer(): void {
  //   const currentQuestion = this.questions[this.currentQuestionIndex];

  //   if (this.isSingleChoice(currentQuestion.options)) {
  //     const correctAnswer = currentQuestion.answer[0];
  //     this.showResult = this.userAnswers[0] === correctAnswer;
  //   } else if (this.isMultipleChoice(currentQuestion.options)) {
  //     const correctAnswers = currentQuestion.answer;
  //     this.showResult = Array.isArray(this.userAnswers[this.currentQuestionIndex]) &&
  // (this.userAnswers[this.currentQuestionIndex] as string[]).every(
  //   (userAnswer: string, index: number) => userAnswer === correctAnswers[index]
  // );
  //   } else {
  //     const correctAnswer = currentQuestion.answer[0];
  //     this.showResult = this.userAnswers[0] === correctAnswer;
  //   }

  //   if (this.showResult) {
  //     this.incorrectAnswersCount = 0;
  //     this.nextQuestion();
  //   } else {
  //     this.incorrectAnswersCount++;

  //     if (this.incorrectAnswersCount >= this.maxIncorrectAnswers) {
  //       this.incorrectAnswersCount = 0;
  //       this.previousQuestion();
  //     }
  //   }
  // }

  nextQuestion(): void {
    this.userAnswers[this.currentQuestionIndex] = [];
    this.showResult = false;
    this.currentQuestionIndex = (this.currentQuestionIndex + 1) % this.questions.length;
  }

  previousQuestion(): void {
    this.userAnswers[this.currentQuestionIndex] = [];
    this.showResult = false;
    this.currentQuestionIndex = (this.currentQuestionIndex - 1 + this.questions.length) % this.questions.length;
  }

  // isAnswerCorrect(currentQuestionIndex: number): boolean {
  //   const currentQuestion = this.questions[currentQuestionIndex];
  //   const userAnswer = this.userAnswers[currentQuestionIndex];

  //   if (this.isSingleChoice(currentQuestion.options)) {
  //     return userAnswer === currentQuestion.answer[0];
  //   } else if (this.isMultipleChoice(currentQuestion.options)) {
  //     const correctAnswers = currentQuestion.answer;
  //     return Array.isArray(userAnswer) && userAnswer.every((answer: string, index: number) => answer === correctAnswers[index]);
  //   } else {
  //     return userAnswer === currentQuestion.answer[0];
  //   }
  // }
}
