import { Injectable } from '@angular/core';
@Injectable({
providedIn: 'root'
})
export class ScoreService {
correctAnswer: number = 0;
falseAnswer: number = 0;
resetDaten() {
this.correctAnswer = 0;
this.falseAnswer = 0;
}
setCorrectAnswer(canswer:number): void {
this.correctAnswer = canswer
}
getCorrectAnswer() {
return this.correctAnswer
}
setfalseAnswer(falseAnswer:number): void{
this.falseAnswer=falseAnswer;
}
getFalseAnswer(){
return this.falseAnswer
}
}
