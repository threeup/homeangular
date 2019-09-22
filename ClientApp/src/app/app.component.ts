import { Component } from '@angular/core';
import { LyTheme2, ThemeVariables } from '@alyle/ui';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  title = 'app';

  constructor(private theme: LyTheme2) { }

}
