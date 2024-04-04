import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MenuItemComponent} from "../../../shared/ui/menu-item/menu-item.component";
import { navigationItems} from "../model";
import {NgOptimizedImage} from "@angular/common";
import {UsersPanelNavigationComponent} from "../../../features/users-panel-navigation/users-panel-navigation.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MenuItemComponent,
    NgOptimizedImage,
    UsersPanelNavigationComponent
  ],
  template: `
    <header class="flex justify-between mt-10">
      <div>
        <img ngSrc="../../../assets/img/MicroAI.png" alt="logo" height="24" width="111">
      </div>
      <div class="flex gap-8">
        @for (item of navigationItems; track item.url) {
          <app-menu-item router_link_class="!text-main-blue" [router_link]="item.url"
                         class="[&>button]:text-main-gray [&>button]:hover:opacity-60 [&>button]:transition-all"
                         router_link="home">
            {{ item.title }}
          </app-menu-item>
        }
      </div>
      <app-users-panel-navigation></app-users-panel-navigation>
    </header>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHeaderComponent {
  protected readonly navigationItems = navigationItems;
}
