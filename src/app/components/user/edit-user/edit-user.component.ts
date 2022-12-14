import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  user: User;
  id: number = parseInt(this.activatedRoute.snapshot.paramMap.get("id") ?? '');
  submitted = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _userService: UserService
  ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this._userService.getUser(this.id).subscribe(response => this.user = response);
  }

  updateUser() {
    this.submitted = true;
    this._userService.updateUser(this.user);
    this.router.navigate(['/user'])
  }

}
