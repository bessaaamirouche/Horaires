import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PrayerService } from './prayerService.service';
import { Prayer, PrayerDetails } from './prayer.interface';
import { TempsActuelComponent } from './time.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-salat-prayer-times',
  templateUrl: './salat-prayer-times.component.html',
  styleUrls: ['./salat-prayer-times.component.scss'],
  standalone: true,
  imports:[TempsActuelComponent,RouterOutlet]
})
export class SalatPrayerTimesComponent implements OnInit {
  prayersData!: Prayer;
  prayerTimes!: PrayerDetails;



  constructor(private prayerService: PrayerService, private cdr: ChangeDetectorRef,) {}

  ngOnInit() {
      this.getPrayerData();
  }
  

  getPrayerData() {

    this.prayerService.getPrayerTime().subscribe(
      data => {
        this.prayersData = data;
        this.cdr.detectChanges();
        console.log(data);
      },
     
    );

    this.prayerService.getActualTime().subscribe(
      data => {
        this.prayerTimes = data;
        this.cdr.detectChanges();
        console.log(data);
      },
     
    );
  }
}
