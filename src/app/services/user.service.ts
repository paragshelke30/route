import { Injectable } from '@angular/core';

import { User } from '../user/user';
import { USERES } from '../user/mock-user';

@Injectable()
export class UserService {

  constructor() { }

  getUsers(): Promise<User[]> {
    return Promise.resolve(USERES);
  }

  getUser(id: number): Promise<User> {
    return this.getUsers()
      .then(users => users.find(user => user.id === id));
  }
}
