import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonpModule, HttpModule, Http } from "@angular/http";
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HighlightMeDirective } from './directives/highlight-me.directive';
import { ToggleColorDirective } from './directives/toggle-color.directive';
import { ContactComponent } from './contact/contact.component';
import { WikiComponent } from './wiki/wiki.component';
import { LoginComponent } from './login/login.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, "/assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailsComponent,
    UserComponent,
    UserDetailsComponent,
    HighlightMeDirective,
    ToggleColorDirective,
    ContactComponent,
    WikiComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JsonpModule,
    HttpModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
