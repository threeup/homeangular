import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'detailbox',
  template: '{{content}}'
})
export class DetailsComponent implements OnInit {
  @Input() detailtype: string;
  content: string;
  ngOnInit() {
    if (this.detailtype === '1') {
      this.content = 'one';
    }
    else {
      this.content = 'detail<br/>detail<br/>detail<br/>detail<br/>detail<br/>';
    }
  }
}
