import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { City } from './city.model';
import { DataService } from './data.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import {Title} from "@angular/platform-browser";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'temp'];
  dataSource: MatTableDataSource<City>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private titleService:Title, private dataService: DataService) {
    this.titleService.setTitle('WeatherApp');
  }


  //Bar chart config
  temperatures: number[] = [];
  cityNames: Label[] = [];
  tempSum:number = 0;
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartData: ChartDataSets[] = [
    { data: [], label: '' }
  ];

  ngOnInit() {
  this.dataSource = new MatTableDataSource();
    //get data from open weather
    this.dataService.getCities()
      .subscribe(data => {
        this.dataSource =  new MatTableDataSource(data['list']);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        data['list'].forEach(item => {
          this.temperatures.push(item.main.temp);
          this.cityNames.push(item.name);
          this.tempSum += item.main.temp;
        });

        this.barChartLabels = this.cityNames;
        this.barChartData = [
          { data: this.temperatures, label: 'Temperature' + '(Average: ' + (this.tempSum/this.temperatures.length).toFixed(2) + ')'}
        ];
      })
  }

  //filter rows
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}



