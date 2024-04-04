import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  template: `
    <button [routerLinkActive]="router_link_class()" [routerLink]="router_link()">
      <ng-content></ng-content>
    </button>
  `,
  styles: `
    button {
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
    }

  `,
  host: {
    class: ''
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuItemComponent {
 router_link = input.required<string>()
  router_link_class = input<string>('')
}
