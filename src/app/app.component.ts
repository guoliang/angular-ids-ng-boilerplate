import { Component, Injectable, ViewChild, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { SohoLineComponent, SohoChartComponent } from 'ids-enterprise-ng';

export interface IChartData {
  id: number;
  name: string;
  value: number;
}
export interface IChartDataSet {
  data: IChartData[];
  name: string;
}

@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  @ViewChild(SohoLineComponent, { static: false })
  sohoLineComponent: SohoLineComponent;

  title = 'ids-graph';

  lineData: IChartDataSet[];

  constructor(
    private http: HttpClient
  ) {
    Soho.Locale.culturesPath = '/assets/ids-enterprise/js/cultures/';
    Soho.Locale.set('en-US');
  }

  ngOnInit(): void {
    if (!this.lineData) {
      this.lineData = [];
    }

    this.getFakeData().subscribe(data => {
      this.lineData.push(this.parseData(data, 'Fake Data 2'));
    });
  }
  parseData(
    value: { id: number; date: string; production: number }[],
    name: string
  ): IChartDataSet {

    const data: IChartData[] = value.map(item => {
      return { id: item.id, name: item.date, value: item.production };
    });

    return {
      data,
      name
    };
  }

  getFakeData(): Observable<[]> {
    const url = 'fake-data/generated.json';

    return this.http.get<[]>(url);
  }
}
