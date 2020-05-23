import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RequestApiService {

  constructor(private httpClient: HttpClient) { }

  public getRequestLogs() {
    return this.httpClient.post('https://planocore.planomatic.com/api/v1/code_challenges/request_logs_index', {})
  }
}
