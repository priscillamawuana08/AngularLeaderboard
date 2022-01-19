import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HonorService {

  constructor(private httpClient:HttpClient) { }

  getHonor():Observable<>{
    return this.httpClient.get<any>("/v1/leaderboard/honor");
  }
}
