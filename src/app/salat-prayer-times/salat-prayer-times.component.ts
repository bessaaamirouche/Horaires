import { Component, OnInit } from '@angular/core';
import { PrayerService } from './prayerService.service';
import { Prayer, PrayerDetails } from './prayer.interface';

@Component({
  selector: 'app-salat-prayer-times',
  templateUrl: './salat-prayer-times.component.html',
  styleUrls: ['./salat-prayer-times.component.scss'],
  standalone: true
})
export class SalatPrayerTimesComponent implements OnInit {
  prayersData!: Prayer 

  prayerTimes!: PrayerDetails
  heureActuelleEnSecondes!: number;
  heureActuelleFormattee!: string;
 



  constructor(private prayerService: PrayerService) {}

  ngOnInit() {
    this.prayerService.getPrayerTime().subscribe(
      data => {
        this.prayersData = data;
        
    
    }
    );
    
    this.prayerService.getActualTime().subscribe(
      data => this.prayerTimes = data)
      
      

   
  }
  
  
//actualiserHeureActuelle() {
   // this.heureActuelleEnSecondes = Math.floor(new Date().getTime() / 1000);
  //  this.heureActuelleFormattee = this.formaterHeureActuelle();
 // }

 // formaterHeureActuelle(): string {
 //   const maintenant = new Date();
  //  const heures = maintenant.getHours().toString().padStart(2, '0');
  //  const minutes = maintenant.getMinutes().toString().padStart(2, '0');
  //  const secondes = maintenant.getSeconds().toString().padStart(2, '0');
 //   return `${heures}:${minutes}:${secondes}`;
}


