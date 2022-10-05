import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];

  constructor(
    private _http: HttpClient,
  ) { }

  getUsers() {
    return this._http.get<any>(environment.apiUrl + 'user');
  }

  getUser(userId: number) {
    return this._http.get<any>(environment.apiUrl + 'user/' + userId)
  }

  delete(userId: number): void {
    const httpOptions : Object = {
      responseType: 'text'
    };

    this._http
      .delete<any>(environment.apiUrl + 'user/' + userId, httpOptions)
      .subscribe();
  }

  save(user: User): void {
    this._http
      .put<any>(environment.apiUrl + 'user/' + user.id, user)
      .subscribe();
  }

}
