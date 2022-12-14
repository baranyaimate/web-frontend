import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];

  constructor(
    private _http: HttpClient,
  ) { }

  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(environment.apiUrl + 'user');
  }

  getUser(userId: number): Observable<User> {
    return this._http.get<User>(environment.apiUrl + 'user/' + userId)
  }

  deleteUser(userId: number): void {
    const httpOptions : Object = {
      responseType: 'text'
    };

    this._http
      .delete<User>(environment.apiUrl + 'user/' + userId, httpOptions)
      .subscribe();
  }

  updateUser(user: User): void {
    this._http
      .put<User>(environment.apiUrl + 'user/' + user.id, user)
      .subscribe();
  }

  saveUser(user: User): void {
    this._http
      .post<User>(environment.apiUrl + 'user', user)
      .subscribe();
  }

}
