import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  baseURL: string = "http://localhost:8080/spotify";

  private HttpOptions = {
    headers: new HttpHeaders({
 
    })
  };
  constructor(private http:HttpClient) { } 

  public getToken(): Observable<any> {
    return this.http.post<any>(this.baseURL + "/token", null, this.HttpOptions);
  }

  public browsePlaylists(limit: string, offset: string): Observable<any> {
    let params = new HttpParams()
      .set('limit', limit)
      .set('offset', offset);
    return this.http.get<any>(`${this.baseURL}/browse/categories`, { params });
  }

  public getPlaylistFromCategory(category: string): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/${category}/playlist`);
  }
}
