import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  myUrl = '/assets/question.json'


  constructor(private http: HttpClient) {
  }
  getQuestions(): Observable<any[]> {
    return this.http.get<any[]>(this.myUrl);
  }
}
