import {ChangeDetectionStrategy, Component, computed, inject, input} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {DishDto, DishesServiceProxy} from "../../shared/service-proxies/service-proxies";
import {IResponse} from "../../shared/model";
import {MultiselectComponent} from "../../shared/ui/multiselect/multiselect.component";
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-table-research',
  standalone: true,
  providers: [DishesServiceProxy],
  imports: [
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatTable,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    MultiselectComponent
  ],

  template: `
    <section>
    <app-multiselect placeholder_multiselect="Чашка" placeholder_label="Найти чашку"></app-multiselect>
    <div class="mb-5"></div>
    <table   mat-table [dataSource]="orginismData()" class=" demo-table">
      <!-- Position Column -->
      <ng-container matColumnDef="creationDate">
        <th mat-header-cell *matHeaderCellDef>Дата</th>
        <td mat-cell *matCellDef="let element">{{element.position}}</td>
      </ng-container>

      <!-- Name Column -->
      <ng-container matColumnDef="number">
        <th mat-header-cell *matHeaderCellDef>Номер</th>
        <td mat-cell *matCellDef="let element">{{element.name}}</td>
      </ng-container>

      <!-- Weight Column -->
      <ng-container matColumnDef="dish">
        <th mat-header-cell *matHeaderCellDef>Чашка</th>
        <td mat-cell *matCellDef="let element">{{element.weight}}</td>
      </ng-container>
      <ng-container matColumnDef="barcodeCodes">
        <th mat-header-cell *matHeaderCellDef>Штрихкод</th>
        <td mat-cell *matCellDef="let element">{{element.weight}}</td>
      </ng-container>
      <!-- Symbol Column -->
      <ng-container matColumnDef="isHaveGrowth">
        <th mat-header-cell *matHeaderCellDef>Рост</th>
        <td mat-cell *matCellDef="let element">{{element.symbol}}</td>
      </ng-container>

      <ng-container matColumnDef="pictures">
        <th mat-header-cell *matHeaderCellDef>Фото:оригинал</th>
        <td class="w-[190px]" mat-cell *matCellDef="let element">
          <div class="p-4 bg-gray-50  flex justify-center rounded-md m-2">
            <img src="../../assets/img/original.svg" alt="">
          </div>
        </td>
      </ng-container>
      <ng-container matColumnDef="picturesMasks">
        <th mat-header-cell *matHeaderCellDef>Фото:маска</th>
        <td class="w-[190px]" mat-cell *matCellDef="let element">
          <div class="p-4 bg-gray-50  flex justify-center rounded-md m-2">
            <img src="../../assets/img/original.svg" alt="">
          </div>
        </td>
      </ng-container>
      <ng-container matColumnDef="bacteriaGenus">
        <th mat-header-cell *matHeaderCellDef>Род микроорганизмов</th>
        <td mat-cell *matCellDef="let element">{{element.weight}}</td>
      </ng-container>
      <ng-container matColumnDef="researchStatus">
        <th mat-header-cell *matHeaderCellDef>Статус</th>
        <td mat-cell *matCellDef="let element">{{element.weight}}</td>
      </ng-container>


      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
    </section>


  `,
  styles: `
    .mat-mdc-table tbody, .mat-mdc-table tfoot, .mat-mdc-table thead, .mat-mdc-cell, .mat-mdc-footer-cell, .mat-mdc-header-row, .mat-mdc-row, .mat-mdc-footer-row, .mat-mdc-table .mat-mdc-header-cell {
      padding: 0;
    }

  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export  class TableResearchComponent {
  private dishesService = inject(DishesServiceProxy)
 public orginismData = input.required<PeriodicElement[]>()
  displayedColumns: string[] = ['creationDate', 'number', 'dish', 'barcodeCodes','isHaveGrowth', 'pictures','picturesMasks', 'bacteriaGenus', 'researchStatus'];
  click() {
    this.dishesService.getAll(undefined).subscribe((r) => {
      const data = r as unknown  as  IResponse<DishDto>
      console.log(data)
    })
  }
}
