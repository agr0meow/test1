import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkOverlayBasicComponent } from './cdk-overlay-basic.component';

describe('CdkOverlayBasicComponent', () => {
  let component: CdkOverlayBasicComponent;
  let fixture: ComponentFixture<CdkOverlayBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdkOverlayBasicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CdkOverlayBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
