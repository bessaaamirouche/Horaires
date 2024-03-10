import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { TesterLesDirectivesComponent } from './tester-les-directives/tester-les-directives.component';
import { SalatPrayerTimesComponent } from './salat-prayer-times/salat-prayer-times.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, TesterLesDirectivesComponent, SalatPrayerTimesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Pratiquer';
  name = new FormControl('');

  registerForm = this.fb.group({
    username: '',
    password: '',
    email:'',
  })

  constructor(private fb: FormBuilder) { }
  
  onSubmit() {
    console.log(this.onSubmit, this.registerForm.value )
  }
}
