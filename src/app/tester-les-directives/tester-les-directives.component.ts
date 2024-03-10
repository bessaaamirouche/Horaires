import { Component } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-tester-les-directives',
  standalone: true,
  imports: [HighlightDirective],
  templateUrl: './tester-les-directives.component.html',
  styleUrl: './tester-les-directives.component.scss'
})
export class TesterLesDirectivesComponent {

}
