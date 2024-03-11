import { DatePipe } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
@Component({
    selector: 'app-temps-actuel',
    template: `
    <div>
      <p class="text-white">{{ heureActuelleFormattee }}</p>
    </div>
    `,
  standalone: true,
  providers:[DatePipe]
})
export class TempsActuelComponent implements AfterViewInit, OnDestroy {
  heureActuelleFormattee!: string;
  private intervalId: any;

  constructor(private cdr: ChangeDetectorRef, private datePipe: DatePipe) {}

  ngAfterViewInit() {
    this.actualiserHeureActuelle();
  }

 actualiserHeureActuelle() {
    this.heureActuelleFormattee = this.datePipe.transform(new Date(), 'HH:mm:ss')!;
    this.cdr.detectChanges();
    this.intervalId = setInterval(() => {
      this.heureActuelleFormattee = this.datePipe.transform(new Date(), 'HH:mm:ss')!;
      this.cdr.detectChanges();
    }, 1000);
  }


  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}