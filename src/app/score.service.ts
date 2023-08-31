import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private answeredQuestions: number = 0;
  private correctAnswers: number = 0;
  private incorrectAnswers: number = 0;

  constructor() {}

  incrementAnsweredQuestions() {
    this.answeredQuestions++;
  }

  incrementCorrectAnswers() {
    this.correctAnswers++;
  }

  incrementIncorrectAnswers() {
    this.incorrectAnswers++;
  }

  getAnsweredQuestions(): number {
    return this.answeredQuestions;
  }

  getCorrectAnswers(): number {
    return this.correctAnswers;
  }

  getIncorrectAnswers(): number {
    return this.incorrectAnswers;
  }
}
