import {ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MenuItemComponent} from "../../shared/ui/menu-item/menu-item.component";
import {CdkOverlayBasicComponent} from "../cdk-overlay-basic/cdk-overlay-basic.component";

@Component({
  selector: 'app-users-panel-navigation',
  standalone: true,
  imports: [
    MenuItemComponent,
    CdkOverlayBasicComponent,
  ],
  template: `
    <div class="flex items-center">
      <app-menu-item
        class="[&>button]:text-main-gray [&>button]:hover:opacity-60 [&>button]:transition-all mr-8"
        router_link_class="text-main-blue" [router_link]="'support'">
        Поддержка
      </app-menu-item>
      <app-cdk-overlay-basic></app-cdk-overlay-basic>
   </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersPanelNavigationComponent {
}
