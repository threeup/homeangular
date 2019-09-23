/** Angular */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


/** Alyle UI */
import { LyThemeModule, LY_THEME, LY_THEME_GLOBAL_VARIABLES } from '@alyle/ui';
import { MinimaLight, MinimaDark } from '@alyle/ui/themes/minima';

export class GlobalVariables {
  testVal = '#00bcd4';
  Quepal = {
    default: `linear-gradient(135deg,#11998e 0%,#38ef7d 100%)`,
    contrast: '#fff',
    shadow: '#11998e'
  };
  SublimeLight = {
    default: `linear-gradient(135deg,#FC5C7D 0%,#6A82FB 100%)`,
    contrast: '#fff',
    shadow: '#B36FBC'
  };
  Amber = {
    default: '#ffc107',
    contrast: 'rgba(0, 0, 0, 0.87)'
  };
}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import { DetailsComponent } from './details/details.component';
import { LyDrawerModule } from '@alyle/ui/drawer';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyListModule } from '@alyle/ui/list';
import { LyButtonModule } from '@alyle/ui/button';
import { LyRadioModule } from '@alyle/ui/radio';
import { LyTypographyModule } from '@alyle/ui/typography';
import { LyIconModule } from '@alyle/ui/icon';

import { ResponsiveModule } from '@alyle/ui/responsive';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

@NgModule({
  providers: [
    {
      provide: LY_THEME,
      useClass: MinimaLight,
      multi: true
    },
    {
      provide: LY_THEME,
      useClass: MinimaDark,
      multi: true
    },
    {
      provide: LY_THEME_GLOBAL_VARIABLES,
      useClass: GlobalVariables
    } // global variables
  ],
  declarations: [
    AppComponent, 
    ScrollSpyDirective, 
    DetailsComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    DragonResumeComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'dragonresume', component: DragonResumeComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR}),
    LyThemeModule.setTheme('minima-light'),
    LyDrawerModule,
    LyToolbarModule,
    LyListModule,
    LyButtonModule,
    LyRadioModule,
    LyTypographyModule,
    LyIconModule,
    ResponsiveModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
