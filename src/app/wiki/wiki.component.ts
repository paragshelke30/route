import { Component, OnInit } from '@angular/core';
import { WikipediaService } from './wikipedia.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css'],
  providers: [WikipediaService]
})
export class WikiComponent implements OnInit {

  items: Observable<any>;
  newItem: Observable<any>;
  users: string[];
  errorMessage: string;

  constructor(private wikipediaService: WikipediaService) { }

  ngOnInit() {
    this.wikipediaService.getWiki();
    //this.login();
  }

  search(term: string) {
    //this.items = this.wikipediaService.search(term);
    this.wikipediaService.getUsers().subscribe(data => this.users = data);
    console.log('users', this.users);

    /*this.wikipediaService.getUsers()
                     .subscribe(
                       heroes => this.users = heroes,
                       error => this.errorMessage = <any>error);
    console.log('users', this.users);
    console.log('errorMessage', this.errorMessage);*/
  }
}
