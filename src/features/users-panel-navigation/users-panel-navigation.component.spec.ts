import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPanelNavigationComponent } from './users-panel-navigation.component';

describe('UsersPanelNavigationComponent', () => {
  let component: UsersPanelNavigationComponent;
  let fixture: ComponentFixture<UsersPanelNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersPanelNavigationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersPanelNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
