import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  computed, inject,
  input,
  OnChanges,
  OnInit, signal,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {NgxMatSelectSearchModule} from "ngx-mat-select-search";
import {MatIcon} from "@angular/material/icon";
import {AsyncPipe, NgForOf} from "@angular/common";
import {ReactiveFormsModule, UntypedFormControl} from "@angular/forms";
import {ReplaySubject, Subject, take, takeUntil} from "rxjs";
import {TrashIconComponent} from "../../icons/trash-icon/trash-icon.component";
import {CloseIconComponent} from "../../icons/close-icon/close-icon.component";

export interface Car {
  id: string;
  name: string;
}

/** list of cars */
export const CARS: Car[] = [
  {name: 'Mercedes-Benz', id: 'A'},
  {name: 'Tesla', id: 'B'},
  {name: 'BMW', id: 'C'},
  {name: '	Volvo', id: 'D'},
];

@Component({
  selector: 'app-multiselect',
  standalone: true,
  imports: [
    MatFormField,
    MatSelect,
    MatOption,
    NgxMatSelectSearchModule,
    MatIcon,
    NgForOf,
    ReactiveFormsModule,
    AsyncPipe,
    TrashIconComponent,
    CloseIconComponent
  ],
  template: `
    <div class="wrapper">
      <div class="inner-wrap">
        <mat-form-field>
          @if (carCtrl?.value?.length) {
            <app-close-icon (click)="resetCheckbox()"></app-close-icon>
          } @else {
            <svg style="z-index: 10" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M6.66178 7.05418L11.7344 2.14911C11.8186 2.06855 11.8854 1.9727 11.931 1.86709C11.9765 1.76149 12 1.64821 12 1.53381C12 1.41941 11.9765 1.30613 11.931 1.20053C11.8854 1.09492 11.8186 0.999074 11.7344 0.91851C11.5662 0.757102 11.3387 0.666504 11.1015 0.666504C10.8643 0.666504 10.6367 0.757102 10.4685 0.91851L5.97944 5.20828L1.53526 0.91851C1.36704 0.757101 1.13949 0.666503 0.902302 0.666503C0.665112 0.666503 0.43756 0.757101 0.269343 0.91851C0.18451 0.998772 0.117022 1.09449 0.0707874 1.2001C0.0245523 1.30572 0.000493017 1.41915 -3.79112e-08 1.53381C0.000493007 1.64847 0.0245523 1.7619 0.0707874 1.86751C0.117022 1.97313 0.18451 2.06885 0.269343 2.14911L5.34199 7.05418C5.42607 7.14214 5.5281 7.21235 5.64168 7.26036C5.75525 7.30838 5.8779 7.33317 6.00189 7.33317C6.12588 7.33317 6.24852 7.30838 6.36209 7.26036C6.47567 7.21235 6.57771 7.14214 6.66178 7.05418Z" fill="#1C274C"/>
            </svg>
          }
          <mat-select
            [formControl]="carCtrl"
            [placeholder]="placeholder_multiselect()"
            [multiple]="true"
            #singleSelect
          >
            <mat-option>
              <ngx-mat-select-search
                [formControl]="carFilterCtrl"
                [placeholderLabel]="placeholder_label()"
                [noEntriesFoundLabel]=" no_entries_found_label()"
                [showToggleAllCheckbox]="true"
                toggleAllCheckboxTooltipMessage="Выбрать все"
                [toggleAllCheckboxIndeterminate]="isIndeterminate"
                [enableClearOnEscapePressed]="true"

                [toggleAllCheckboxChecked]="isChecked"
                (toggleAll)="toggleSelectAll($event)"
              >
                <app-trash-icon ngxMatSelectSearchClear></app-trash-icon>
              </ngx-mat-select-search>
            </mat-option>

            <mat-option *ngFor="let car of filteredCars | async" [value]="car">
              {{ car.name }}
            </mat-option>
          </mat-select>
        </mat-form-field>
      </div>
      <div class="inner-wrap">
        <h3>Selected Values</h3>
        <ul *ngFor="let car of carCtrl?.value">
          <li>{{ car.name }}</li>
        </ul>
      </div>
    </div>
  `,
  styles: `
    ::ng-deep .mdc-text-field--filled:not(.mdc-text-field--disabled) {
      border-radius: 8px;
      border: 1px solid #777371 !important;
      background-color: #F7F7F7 !important;
    }

    ::ng-deep .mat-mdc-form-field-infix {
      padding: 10px !important;
      display: flex !important;
      flex-direction: row-reverse;
      align-items: center;
      min-height: auto !important;
    }

    ::ng-deep .mdc-text-field--filled .mdc-line-ripple::before {
      border-bottom: none !important;
    }

    ::ng-deep .mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
      border-bottom: none !important;
    }

    ::ng-deep .mat-mdc-select-arrow svg {
      display: none;
    }
    ::ng-deep .mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled) .mdc-list-item__primary-text {
      color: #6A60FE !important;
    }
    ::ng-deep .mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
      background-color:#6A60FE !important;
    }
  ::ng-deep .mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background, .mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background, .mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background {
      background-color:#6A60FE !important;
      border-color:#6A60FE !important; ;
    }

  `,
})
export class MultiselectComponent implements OnInit {
  protected cars: Car[] = CARS;
  public placeholder_multiselect = input.required<string>()
  public placeholder_label = input.required<string>()
  public no_entries_found_label = input<string>('Не найдено')
  public isChecked = false
  private changeDetectorRef = inject(ChangeDetectorRef)
  /** control for the selected car */
  public carCtrl: UntypedFormControl = new UntypedFormControl();

  /** control for the MatSelect filter keyword */
  public carFilterCtrl: UntypedFormControl = new UntypedFormControl();

  /** list of cars filtered by search keyword */
  public filteredCars: ReplaySubject<Car[]> = new ReplaySubject<Car[]>(1);

  @ViewChild('singleSelect', {static: true})
  singleSelect!: MatSelect;

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();

  /** flags to set the toggle all checkbox state */
  isIndeterminate = false;

  constructor() {
  }

  ngOnInit() {
    // load the initial car list
    this.filteredCars.next(this.cars.slice());

    // listen for search field value changes
    this.carFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterCars();
      });
  }

  protected filterCars() {
    if (!this.cars) {
      return;
    }
    // get the search keyword
    let search = this.carFilterCtrl.value;
    if (!search) {
      this.filteredCars.next(this.cars.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the cars
    this.filteredCars.next(
      this.cars.filter((car) => car.name.toLowerCase().indexOf(search) > -1)
    );
  }

  toggleSelectAll(selectAllValue: boolean) {
    this.filteredCars
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe((val) => {
        if (selectAllValue) {
          this.carCtrl.patchValue(val);
        } else {
          this.carCtrl.patchValue([]);
        }
      });
    console.log(this.carCtrl?.value)

  }
  resetCheckbox() {
this.carCtrl.patchValue([])

  }
}
