import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-examination',
  standalone: true,
  imports: [],
  template: `
    <p>
      examination works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ExaminationComponent {

}
