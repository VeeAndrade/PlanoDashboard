import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { RequestApiService } from '../request-api.service';
import { ErrorApiService } from '../error-api.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface ErrorLog {
  id: number;
  error: string;
  backtrace: Array<string>;
}

export interface RequestLog {
  id: number;
  service: string;
  version: string;
  action: string;
  result: string;
  created_at: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  requestLogs;
  errorLogs;
  errorDisplayedColumns: string[] = ['id', 'error', 'backtrace'];
  requestDisplayedColumns: string[] = ['requestid', 'service', 'version', 'action', 'result', 'created_at']
  dataSourceArray1
  dataSourceArray2

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private requestApiService: RequestApiService,
    private errorApiService: ErrorApiService,
  ) { 
    this.requestApiService.getRequestLogs().subscribe((data) => {
      this.requestLogs = data['data'].results
      this.dataSourceArray1 = new MatTableDataSource(this.requestLogs)
    })
    this.errorApiService.getErrorLogs().subscribe((data) => {
      this.errorLogs = data['data'].results
      this.dataSourceArray2 = new MatTableDataSource(this.errorLogs);
    })
  }

  ngOnInit() {
    
  }

}
