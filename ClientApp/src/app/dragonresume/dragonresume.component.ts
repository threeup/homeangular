import { Component } from '@angular/core';

@Component({
  selector: 'app-dragonresume-component',
  templateUrl: './dragonresume.component.html'
})
export class DragonResumeComponent {
  public currentCount = 0;
  public currentContent = "I went to a place and did some things";

  public increment() {
    this.currentCount++;
    this.currentContent = this.currentCount % 2 == 0 ? "more things" : "yo yo";
  }
}
