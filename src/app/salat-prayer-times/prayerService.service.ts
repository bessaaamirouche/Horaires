import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, timer } from "rxjs";
import { switchMap, map } from "rxjs/operators";
import { Prayer } from "./prayer.interface";

@Injectable({
  providedIn: "root"
})
export class PrayerService {
  private url = 'http://86.48.1.128:7000/info';
  private url2 = 'http://86.48.1.128:7000/infoJour';

  constructor(private http: HttpClient) {
    this.startInterval();
  }

  startInterval() {
    // Lancez une première fois dès le début
    this.getPrayerTime().subscribe();
    this.getActualTime().subscribe();

    // Ensuite, exécutez toutes les 30 minutes
    timer(30 * 60 * 1000, 30 * 60 * 1000) // Démarre après 30 minutes et se répète toutes les 30 minutes
      .pipe(
        switchMap(() => this.getPrayerTime()),
        switchMap(() => this.getActualTime())
      )
      .subscribe();
  }

  getPrayerTime(): Observable<Prayer> {
    return this.http.get<Prayer>(this.url).pipe(
      map((data: Prayer) => {
        console.log('Prayer:', data);
        return data;
      }),
    );
  }

  getActualTime(): Observable<any> {
    return this.http.get(this.url2).pipe(
      map((data) => {
        console.log('Time:', data);
        return data;
      }),
    );
  }
}
