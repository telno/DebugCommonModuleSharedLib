import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-MyFancyLib',
  template: `
    <p *ngIf="true">
      my-fancy-lib works!
    </p>
  `,
  styles: [
  ]
})
export class MyFancyLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
