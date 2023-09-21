import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../../services/general/general.service';
import { ChartOptions } from 'chart.js';
import { Router } from '@angular/router';


@Component({
  selector: 'app-applicants-home-charts-view',
  templateUrl: './applicants-home-charts-view.component.html',
  styleUrls: ['./applicants-home-charts-view.component.css']
})
export class ApplicantsHomeChartsViewComponent implements OnInit {

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,

  };

  public lineChartLabels = [['Yanayoendelea'], ['Yenye Maamuzi'], ['Rasimu']];
  public lineChartDatasets = [];
  public lineChartLegend = true;
  public lineChartPlugins = [];
  lineDataset: any = [];

  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
  };


  appeal_count: any;
  complaint_count: any;
  data = {
    user_id: ''
  }


  public barChartLabels = [['Zinazo endelea'], ['Zenye Maamuzi'], ['Rasimu']];
  public barChartDatasets = [];
  public barChartLegend = true;
  public barChartPlugins = [];
  barDataset: any = [];

  constructor(
    public general: GeneralService,
    public route: Router
  ) { }



  ngOnInit(): void {
  
  }








}
