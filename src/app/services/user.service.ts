import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
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

  getUser(id: number) {
    return this._http.get<any>(environment.apiUrl + 'user/' + id)
  }

  delete(id: number): void {

    const httpOptions : Object = {
      responseType: 'text'
    };

    this._http
      .delete<any>(environment.apiUrl + 'user/' + id, httpOptions)
      .subscribe();
  }

  save(user: User): void {
    this._http
      .put<any>(environment.apiUrl + 'user/' + user.id, user)
      .subscribe();
  }

  errorHandler() {
    return throwError(
      () => new Error('Something bad happened. Please try again later.')
    );
  }
}
