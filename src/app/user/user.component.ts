import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  users: User[];
  selectedUser: User;


  constructor(private router: Router,
    private userService: UserService) {

  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  gotoDetail(): void {
    this.router.navigate(['/userDetail', this.selectedUser.id]);
  }

}
