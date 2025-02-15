import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-trash-icon',
  standalone: true,
  imports: [],
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M20.5001 6H3.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M18.8337 8.5L18.3737 15.3991C18.1967 18.054 18.1082 19.3815 17.2432 20.1907C16.3782 21 15.0478 21 12.387 21H11.6136C8.95284 21 7.62244 21 6.75743 20.1907C5.89242 19.3815 5.80393 18.054 5.62693 15.3991L5.16699 8.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M9.1709 4C9.58273 2.83481 10.694 2 12.0002 2C13.3064 2 14.4177 2.83481 14.8295 4" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrashIconComponent {

}
