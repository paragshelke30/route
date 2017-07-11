import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../heroes/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css'],
  providers: [HeroService]
})
export class HeroDetailsComponent implements OnInit {
  hero: Hero;
  constructor(private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) {
    this.hero = {
      id: 123,
      name: 'Parag',
      about: 'S.D.'
    };
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  setId(params: Params): void {
    console.log('message', params['id']);
  }

  goBack(): void {
    this.location.back();
  }

}
