import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-close-icon',
  standalone: true,
  imports: [],
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M0.177267 13.8212C0.416716 14.0544 0.807224 14.0544 1.04047 13.8212L7.00139 7.86304L12.9595 13.8212C13.1928 14.0544 13.5895 14.0607 13.8227 13.8212C14.056 13.5817 14.056 13.1975 13.8227 12.9642L7.86459 6.99985L13.8227 1.03892C14.056 0.805673 14.0622 0.415165 13.8227 0.18192C13.5833 -0.0575281 13.1928 -0.0575281 12.9595 0.18192L7.00139 6.14006L1.04047 0.18192C0.807224 -0.0575281 0.410512 -0.0637324 0.177267 0.18192C-0.0559768 0.421369 -0.0559768 0.805673 0.177267 1.03892L6.13541 6.99985L0.177267 12.9642C-0.0559768 13.1975 -0.0621811 13.588 0.177267 13.8212Z" fill="#CECECE"/>
    </svg>
  `,
  styles: ``,
  host: {
    class: ''
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CloseIconComponent {

}
