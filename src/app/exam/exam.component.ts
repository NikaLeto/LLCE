import { Component, OnInit, Type } from '@angular/core';
import { QuestionService } from '../shared/question.service';
// import { Question } from '../shared/question';
import { Router } from '@angular/router';
import { ScoreService } from '../score.service';
import { Question } from '../shared/question';

@Component({
  selector: 'app-check',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})

export class ExamComponentComponent {
constructor(private questionService: QuestionService, private router: Router , private scoreService: ScoreService) { }

questionArrayIndex: any;
Questions: any[] = [];
currentIndex: number = 0;
selectedOption: string[] = [];
correctAnswer: number = 0;
falseAnswer: number = 0;
a: string[] = [];
correctCount: number = 0;
incorrectCount: number = 0;

Answers(): string[] {
let a: string[] = [];
for (let i = 0; i < this.Questions.length; i++) {
if (this.Questions[i].correctAnswer) {
a[i] = this.Questions[i].correctAnswer;
}
}
return a;
}

ngOnInit(): void {
this.questionService.getQuestions().subscribe((question) => {
this.Questions = question;
});
}



nextFrage(): void {
  // Erhöhen Sie currentIndex, um zur nächsten Frage zu gehen
  this.currentIndex++;

  // Überprüfen Sie, ob currentIndex den maximalen Index überschreitet
  if (this.currentIndex >= this.Questions.length) {
    // Hier können Sie entscheiden, was passieren soll, wenn alle Fragen beantwortet wurden
    // Zum Beispiel zur Ergebnisseite navigieren oder eine Meldung anzeigen
    console.log('Alle Fragen beantwortet');
  } else {
    // Die restliche Logik für die Überprüfung der Antwort kann beibehalten werden
    const currentQuestion = this.Questions[this.currentIndex];
    const correctAnswers = this.Answers();

    // Überprüfe die Antwort des Benutzers
    if (currentQuestion.type == 'fill') {
      // Überprüfung für "Fill in the blank" Fragen
      if (this.selectedOption[0] == currentQuestion.correctAnswer) {
        this.correctAnswer++;
        console.log('Richtige Antwort');
      } else {
        this.falseAnswer++;
        console.log('Falsche Antwort');
      }
    } else if (currentQuestion.type == 'multi' || currentQuestion.type == 'single') {
      // Überprüfung für Multiple-Choice und Single-Choice Fragen
      if (!this.isEqual(this.selectedOption, correctAnswers)) {
        this.correctAnswer++;
        console.log('Richtige Antwort');
      } else {
        this.falseAnswer++;
        console.log('Falsche Antwort');
      }
    }
  }
}

previousFrage(): void {
if (this.currentIndex > 0) {
this.currentIndex--;
}
}

SkipFrage(): void {
this.currentIndex++;
}

isTrue(questionArrayIndex: number, benutzerAntwort: string[]): void {
  if (this.isEqual(this.Questions[this.currentIndex].correctAnswer, benutzerAntwort)) {
    this.correctAnswer++;
    console.log('Richtige Antwort');
  } else {
    this.falseAnswer++;
    console.log('Falsche Antwort');
  }

  // Aktualisieren Sie den Punktestand in Ihrem ScoreService
  this.scoreService.setCorrectAnswer(this.correctAnswer);
  this.scoreService.setfalseAnswer(this.falseAnswer);

  // Hier können Sie den Benutzer zur nächsten Frage wechseln lassen
  this.nextFrage();
}


Gewaehlt(option: string, event: any): void {
  // Get the current question type
  const questionType : string = this.Questions[this.currentIndex].type;

  console.log('Question:', this.Questions[this.currentIndex]);
  // Log the question type and selected option for debugging
  console.log('Question Type:', this.Questions[this.currentIndex].type);

  console.log('Selected Option:', option);

  // Handle user input based on the question type
  if (questionType === 'fill') {
    // Handle fill-in-the-blank questions
    this.handleFillInQuestion(event);
  } else if (questionType === 'multi') {
    // Handle multiple-choice questions
    this.handleMultipleChoiceQuestion(option, event);
  } else if (questionType === 'single') {
    // Handle single-choice questions
    this.handleSingleChoiceQuestion(option);
  }
}


handleFillInQuestion(event: any): void {
this.selectedOption = [];
this.selectedOption.push(event.target.value);
}

handleMultipleChoiceQuestion(option: string, event: any): void {
if (event.target.checked) {
this.selectedOption.push(option);
} else {
const number = this.selectedOption.indexOf(option);
if (number >= 0) {
this.selectedOption.splice(number, 1);
}
}
}

handleSingleChoiceQuestion(option: string): void {
  this.selectedOption = [];
  this.selectedOption.push(option);
}
isEqual(arr1: string[], arr2: string[]): boolean {
  if (arr1.length != arr2.length) {
    return false;
  }

  const sorted1 = arr1.slice();
  const sorted2 = arr2.slice();
  for (let i = 0; i < sorted1.length; i++) {
    if (sorted1[i] != sorted2[i]) {
      return false;
    }
  }
  return true;
}
}
