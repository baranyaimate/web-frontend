import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[] = [];

  constructor(
    public _userService: UserService
  ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this._userService.getUsers().subscribe(response => this.users = response);
  }

  deleteUser(userId: number = 0): void {
    if (userId == 0) {
      console.error('Invalid user id');
    }

    this._userService.deleteUser(userId);
    this.users = this.users.filter(user => user.id != userId);
  }

}
