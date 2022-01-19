import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OverallRankService {

  constructor(private httpClient:HttpClient) { }

  getOverallRank():Observable<>{
    return this.httpClient.get<any>("/v1/leaderboard/overall-rank");
  }
}
