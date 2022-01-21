import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  ADD_USER_API_URL = `${environment.API_URL}/add`
  
  constructor(private httpClient: HttpClient) { }

  addUser(username: string): Observable<any>{
    return this.httpClient.post(`${this.ADD_USER_API_URL}/${username}`, {})
  }
}
