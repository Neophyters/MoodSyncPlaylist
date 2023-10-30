import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private HttpOptions = {
    headers: new HttpHeaders({
 
    })
  };
  constructor(private http:HttpClient) { } 

  




}
