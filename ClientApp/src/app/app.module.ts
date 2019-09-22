import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { DragonResumeComponent } from './dragonresume/dragonresume.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ScrollSpyDirective } from './scrollspy/scrollspy.directive';
import { LoremIpsumComponent } from './loremipsum/loremipsum.component';

@NgModule({
  declarations: [
    AppComponent, 
    ScrollSpyDirective, 
    LoremIpsumComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    DragonResumeComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'dragonresume', component: DragonResumeComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
