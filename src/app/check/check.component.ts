/* import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../shared/question.service';
import { Question } from '../shared/question';
import { ScoreService } from '../score.service';



@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
  questions: Question[] = [];
  currentQuestionIndex: number = 0;
  userAnswers: (string | string[])[] = [];
  showResult: boolean = false;
  incorrectAnswersCount: number = 0;
  maxIncorrectAnswers: number = 7;

  constructor(private questionService: QuestionService, private scoreService: ScoreService) {}

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

  isAnswerCorrect(currentQuestionIndex: number): boolean {
    const currentQuestion = this.questions[currentQuestionIndex];
    const userAnswer = this.userAnswers[currentQuestionIndex];

    if (this.isSingleChoice(currentQuestion.options)) {
      return userAnswer === currentQuestion.answer[0];
    } else if (this.isMultipleChoice(currentQuestion.options)) {
      const correctAnswers = currentQuestion.answer;
      return Array.isArray(userAnswer) && userAnswer.every((answer: string, index: number) => answer === correctAnswers[index]);
    } else {
      return userAnswer === currentQuestion.answer[0];
    }
  }
  isSingleChoice(options: string[]): boolean {
    return options.length === 1;
  }
  isMultipleChoice(options: string[]): boolean {
    return options.length > 1;
  }
  packInArray(selectedOption: string) {
    if (!this.userAnswers[this.currentQuestionIndex]) {
      this.userAnswers[this.currentQuestionIndex] = [];
    }

    const selectedOptions = this.userAnswers[this.currentQuestionIndex];
    const optionPosition = selectedOptions.indexOf(selectedOption);

    if(Array.isArray(selectedOptions)){

      if (optionPosition === -1) {
        selectedOptions.push(selectedOption);
      } else {
        selectedOptions.splice(optionPosition, 1);
      }
    }
    console.table(selectedOptions);
  }


}

 */

import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../shared/question.service';
import { Question } from '../shared/question';
import { ScoreService } from '../score.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
  questions: Question[] = [];
  currentQuestionIndex: number = 0;
  userAnswers: (string | string[])[] = [];
  showResult: boolean = false;
  incorrectAnswersCount: number = 0;
  maxIncorrectAnswers: number = 7;

  constructor(private questionService: QuestionService, private scoreService: ScoreService) {}

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

  isAnswerCorrect(currentQuestionIndex: number): boolean {
    const currentQuestion = this.questions[currentQuestionIndex];
    const userAnswer = this.userAnswers[currentQuestionIndex];

    if (this.isSingleChoice(currentQuestion.options)) {
      return userAnswer === currentQuestion.answer[0];
    } else if (this.isMultipleChoice(currentQuestion.options)) {
      const correctAnswers = currentQuestion.answer;
      return Array.isArray(userAnswer) && userAnswer.every((answer: string, index: number) => answer === correctAnswers[index]);
    } else {
      return userAnswer === currentQuestion.answer[0];
    }
  }

  isSingleChoice(options: string[]): boolean {
    return options.length === 1;
  }

  isMultipleChoice(options: string[]): boolean {
    return options.length > 1;
  }



toggleOption(option: string): void {
  const userAnswer = this.userAnswers[this.currentQuestionIndex] || [];

  if (Array.isArray(userAnswer)) {
    const optionIndex = userAnswer.indexOf(option);

    if (optionIndex === -1) {
      // Die Option ist nicht ausgewählt, also füge sie hinzu
      userAnswer.push(option);
    } else {
      // Die Option ist bereits ausgewählt, also entferne sie
      userAnswer.splice(optionIndex, 1);
    }

    // Aktualisiere die Benutzerantwort
    this.userAnswers[this.currentQuestionIndex] = userAnswer;
  }
}

/* toggleOption(option: string): void {
  const userAnswer = this.userAnswers[this.currentQuestionIndex] || [];

  if (Array.isArray(userAnswer)) {
    if (userAnswer.includes(option)) {
      // Die Option ist bereits ausgewählt, also entferne sie
      userAnswer.splice(userAnswer.indexOf(option), 1);
    } else {
      // Die Option ist nicht ausgewählt, also füge sie hinzu
      userAnswer.push(option);
    }

    // Aktualisiere die Benutzerantwort
    this.userAnswers[this.currentQuestionIndex] = userAnswer;
  }
} */
  isOptionSelected(option: string): boolean {
    const userAnswer = this.userAnswers[this.currentQuestionIndex] || [];
    return userAnswer.includes(option);
}
}
