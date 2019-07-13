import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ids-graph';

  lineData = [{
    data: [
      {
        "id": 0,
        "name": "2014-03-23",
        "value": 221
      },
      {
        "id": 1,
        "name": "2017-10-24",
        "value": 171
      },
      {
        "id": 2,
        "name": "2015-02-16",
        "value": 109
      },
      {
        "id": 3,
        "name": "2018-08-28",
        "value": 100
      },
      {
        "id": 4,
        "name": "2014-03-31",
        "value": 357
      },
      {
        "id": 5,
        "name": "2017-12-26",
        "value": 377
      },
      {
        "id": 6,
        "name": "2015-01-18",
        "value": 400
      },
      {
        "id": 7,
        "name": "2017-04-16",
        "value": 312
      },
      {
        "id": 8,
        "name": "2017-12-03",
        "value": 307
      },
      {
        "id": 9,
        "name": "2016-06-24",
        "value": 260
      }
    ],
    name: "Fake data"
  }];

  constructor() {
    Soho.Locale.culturesPath = '/assets/ids-enterprise/js/cultures/';
    Soho.Locale.set('en-US');
  }
  ngOnInit(): void {
    console.log("Hello World");
  }
}
