import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RefereeService {

  private baseUrl = 'http://localhost:8099/referee';

  constructor(private http: HttpClient) { }
   
  DetailsReferee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/details/${id}`);
    
  }
  

  CreateReferee(value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`,value);
  }

  UpdateReferee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);
  }

  DeleteReferee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

  GetAllReferee(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }
  DeleteAllReferees(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteall`);
  }

  
}
