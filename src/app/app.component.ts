import {ChangeDetectionStrategy, Component, inject, Injector, ViewChildren} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AppHeaderComponent} from "../widgets/app-header/ui/app-header.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppHeaderComponent],
  template: `
    <section class="max-w-screen-xl mx-auto">
      <app-header class="block mb-10"></app-header>
      <router-outlet></router-outlet>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  static injector: Injector;
  constructor(injector: Injector) {
    AppComponent.injector = injector;
  }
}
