import { Component } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';

const DEFAULT = '170px over@XSmall';
const MINI = '56px over@XSmall';

const STYLES = ({
  drawerContainer: {
    height: '270px',
    transform: 'translate3d(0,0,0)'
  },
  drawerContent: {
    padding: '1em'
  },
  icon: {
    margin: '0 8px'
  }
});

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ],
})
export class HomeComponent {
  readonly classes = this._theme.addStyleSheet(STYLES);
  currentSection = 'section1';
  mini = false;

  get width() {
    return this.mini ? MINI : DEFAULT;
  }

  constructor(private _theme: LyTheme2) { }

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section) {
    document.querySelector('#' + section)
    .scrollIntoView();
  }

  toggleMini() {
    this.mini = !this.mini;
  }
}
