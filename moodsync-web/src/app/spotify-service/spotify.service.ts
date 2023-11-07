import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Token } from '../interface/token';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  baseURL: string = "http://localhost:8080";

  private HttpOptions = {
    headers: new HttpHeaders({
 
    })
  };
  constructor(private http:HttpClient) { } 

  public getToken(): Observable<any> {
    return this.http.post<any>(this.baseURL + "/spotify/token", null, this.HttpOptions);

  }
}
