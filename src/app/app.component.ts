import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ids-graph';
  
  constructor() {
    Soho.Locale.culturesPath = '/assets/ids-enterprise/js/cultures/';
    Soho.Locale.set('en-US');
  }
  ngOnInit(): void {
    console.log("Hello World");
  }
}
