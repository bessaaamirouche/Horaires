import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterLesDirectivesComponent } from './tester-les-directives.component';

describe('TesterLesDirectivesComponent', () => {
  let component: TesterLesDirectivesComponent;
  let fixture: ComponentFixture<TesterLesDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TesterLesDirectivesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TesterLesDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
