import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getErrorLogs() {
    return this.httpClient.post('https://planocore.planomatic.com/api/v1/code_challenges/error_logs_index?view=dashboard_index', {})
  }
}
