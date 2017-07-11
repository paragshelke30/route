import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { User } from '../user/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  providers: [UserService]
})
export class UserDetailsComponent implements OnInit {
  user: User;
  constructor(private route: ActivatedRoute,
    private userService: UserService) {
    this.user = {
      id: 123,
      name: 'Parag',
      gender: 'Male',
      profile: 'S.D.'
    };
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.userService.getUser(+params['id']))
      .subscribe(user => this.user = user);
  }

}
