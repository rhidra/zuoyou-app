import { Injectable } from '@angular/core';
import {environment as env} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Quiz, QuizChoice} from '../models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(
    private http: HttpClient,
  ) { }

  get(id: string): Promise<Quiz> {
    if (!id) { return new Promise<Quiz>(null); }
    return new Promise<Quiz>(resolve => {
      this.http.get(env.apiUrl + 'quiz/' + id).subscribe((data: Quiz) => resolve(data));
    });
  }

  getVote(idQuiz: string): Promise<string> {
    if (!idQuiz) { return new Promise<string>(null); }
    return new Promise<string>(resolve => {
      this.http.get(env.apiUrl + 'quiz/vote/' + idQuiz).subscribe((data: any) => resolve(data ? data.choice : null));
    });
  }

  vote(quiz: Quiz, choiceId: string): Promise<any> {
    if (!quiz || !choiceId) { return new Promise<any>(null); }
    return new Promise(resolve => {
      this.http.post(env.apiUrl + 'quiz/vote/' + quiz._id, {choice: choiceId}).subscribe(data => resolve(data));
    });
  }
}
