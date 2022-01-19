import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private httpClient:HttpClient) { }

  getLanguage():Observable<>{
    return this.httpClient.get<any>("/v1/leaderboard/language/{language}");
  }
}
