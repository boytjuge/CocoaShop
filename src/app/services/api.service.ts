import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://your-api-url.com/api'; // ปรับตามจริง

  constructor() {}

  // getData(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/data`);
  // }

  // searchData(query: string): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/search?q=${query}`);
  // }

  // // สามารถเพิ่ม POST/PUT/DELETE ได้เช่น:
  // postData(payload: any): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/data`, payload);
  // }
}
