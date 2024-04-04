import { ComponentFixture, TestBed } from '@angular/core/testing';
import TableResearchComponent from "./table-research.component";


describe('TableResearchComponent', () => {
  let component: TableResearchComponent;
  let fixture: ComponentFixture<TableResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableResearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
