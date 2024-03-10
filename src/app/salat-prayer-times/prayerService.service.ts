import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, throwError } from "rxjs";
import { Prayer } from "./prayer.interface";

@Injectable({
  providedIn: "root"
})
export class PrayerService {
  private url = 'http://86.48.1.128:7000/info';
  private url2 = 'http://86.48.1.128:7000/infoJour';

  constructor(private http: HttpClient) { }

  getPrayerTime(): Observable<Prayer> {
    return this.http.get<Prayer>(this.url).pipe(
      map((data: Prayer) => {
        console.log('Prayer:', data);
        return data;
      }),
      catchError((error: any) => {
        console.error('Error fetching prayer data:', error);
        return throwError(error);
      })
    );
  }

  getActualTime(): Observable<any> {
    return this.http.get(this.url2).pipe(
      map((data) => {
        console.log('Time:', data);
        return data;
      }),
      catchError((error: any) => {
        console.error('Error fetching time data:', error);
        return throwError(error);
      })
    );
  }
}
