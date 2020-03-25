import { Injectable } from '@angular/core';
import {User} from '../models/user.model';
import {HttpClient} from '@angular/common/http';
import {environment as env} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  get(id: string): Promise<User> {
    return new Promise<User>(resolve => {
      this.http.get(env.apiUrl + 'user/' + id).subscribe((data: any) => resolve(data));
    });
  }
}
