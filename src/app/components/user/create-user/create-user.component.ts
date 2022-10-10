import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

  user: User = {};

  constructor(
    private router: Router,
    private _userService: UserService
  ) { }

  saveUser(): void {
    this._userService.saveUser(this.user);
    this.router.navigate(['/user'])
  }

}
