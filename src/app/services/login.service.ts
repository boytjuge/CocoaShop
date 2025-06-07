import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://127.0.0.1:5000/service/api';

  constructor(private http: HttpClient) {}

  check_login(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, payload);
  }
}
