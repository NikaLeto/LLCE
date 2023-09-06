import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { HomeComponent } from './home/home.component';
import { CheckComponent } from './check/check.component';
import { FormsModule } from '@angular/forms';
import { ExamComponentComponent } from './exam/exam.component';
import { ScoreComponent } from './score/score.component';
// import { ScoreComponent } from './score/score.component';


 @NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    HomeComponent,
    CheckComponent,
    ExamComponentComponent,
    ScoreComponent,
    // ScoreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
