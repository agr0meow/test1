import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchesComponent } from './researches.component';

describe('ResearchesComponent', () => {
  let component: ResearchesComponent;
  let fixture: ComponentFixture<ResearchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResearchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
