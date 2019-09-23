import { Component } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
import { NGXLogger } from 'ngx-logger';


const DEFAULT = '270px over@XSmall';
const MINI = '56px over@XSmall';

const STYLES = ({
  drawerContainer: {
    height: 'calc(100vh - 70px)',
    transform: 'translate3d(0,0,0)'
  },
  drawerContent: {
    padding: '5px',
  },
  icon: {
    margin: '2 8px'
  }
});

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ],
  providers: [NGXLogger]  
})
export class HomeComponent {
  readonly classes = this._theme.addStyleSheet(STYLES);
  currentSection = 'section1';
  mini = false;

  get width() {
    return this.mini ? MINI : DEFAULT;
  }

  constructor(private _theme: LyTheme2, private logger: NGXLogger) { 
    this.logger.log('hi');
    this.test();
  }
  test() {
    this.logger.log('test');
  }

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
    this.logger.log(sectionId);
  }

  scrollTo(section) {
    this.logger.log(section);
    document.querySelector('#' + section)
    .scrollIntoView();
  }

  toggleMini() {
    this.mini = !this.mini;
  }
}
