import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  token: string;
  user: object = {
    username: 'harshal',
    password: '12345'
  };
  newUser: object = {
    username: "harry",
    firstName: "harry",
    lastName: "sadu",
    email: "harry@gmail.com",
    role: "admin",
    password: "12345"
  };
  contact: object = {
    IDNew: '595cb759924f6b36908f1574',
    id: '2018',
    rawId: '2018',
    displayName: 'sunil'
  };

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  onLogin() {
    this.login(this.user);
  }

  login(user: object) {
    this.userService.login(user).subscribe(
      data => {
        // refresh the list
        console.log('logindata', data);
        this.token = data.token;
        return true;
      },
      error => {
        console.error("Error saving logindata!", error);
        return Observable.throw(error);
      }
    );
  }

  addNewUser(user: object) {
    //this.token = 'asdfsdf';
    this.userService.addUser(user, this.token).subscribe(
      data => {
        // refresh the list
        console.log('New user created :', data);
        this.token = data.token;
        return true;
      },
      error => {
        console.error("Error saving addUser!");
        return Observable.throw(error);
      }
    );
  }

  updateContact(contact: object) {
    delete contact['_id'];
    if (contact['IDNew'] !== '' && contact['IDNew'] !== undefined) {
      contact['_id'] = contact['IDNew'];
    }
    this.userService.updateContact(contact).subscribe(
      data => {
        // refresh the list
        console.log('Uer put new/update : ', data);
        return true;
      },
      error => {
        console.error("Error saving Contact !", error);
        return Observable.throw(error);
      }
    );
  }
}
