import { ChangeDetectionStrategy, Component } from '@angular/core';
import {PeriodicElement, TableResearchComponent} from "../../widgets/table-research/table-research.component";

@Component({
  selector: 'app-researches',
  standalone: true,
  imports: [
    TableResearchComponent
  ],
  template: `
   <section>
     <h1 class="text-[32px] font-semibold text-ma-black mb-10">Исследования</h1>
     <app-table-research [orginismData]="ELEMENT_DATA"></app-table-research>
   </section>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ResearchesComponent {
  public ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
}
