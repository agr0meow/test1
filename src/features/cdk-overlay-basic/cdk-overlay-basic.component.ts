import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {OverlayModule} from "@angular/cdk/overlay";
import {EmailIconComponent} from "../../shared/icons/email-icon/email-icon.component";
import {NotifyIconComponent} from "../../shared/icons/notify-icon/notify-icon.component";

@Component({
  selector: 'app-cdk-overlay-basic',
  standalone: true,
  imports: [OverlayModule, EmailIconComponent, NotifyIconComponent],

  template: `
    <div class="flex gap-1 items-center">
      <div class="w-8 h-8 rounded-full bg-gray-400"></div>
      <button (click)="changeStatus()" type="button" cdkOverlayOrigin #trigger="cdkOverlayOrigin">
        <svg [style.transform]="isOpen() ? 'rotate(180deg)' : 'rotate(360deg)'" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
          <path d="M6.66178 7.05418L11.7344 2.14911C11.8186 2.06855 11.8854 1.9727 11.931 1.86709C11.9765 1.76149 12 1.64821 12 1.53381C12 1.41941 11.9765 1.30613 11.931 1.20053C11.8854 1.09492 11.8186 0.999074 11.7344 0.91851C11.5662 0.757102 11.3387 0.666504 11.1015 0.666504C10.8643 0.666504 10.6367 0.757102 10.4685 0.91851L5.97944 5.20828L1.53526 0.91851C1.36704 0.757101 1.13949 0.666503 0.902302 0.666503C0.665112 0.666503 0.43756 0.757101 0.269343 0.91851C0.18451 0.998772 0.117022 1.09449 0.0707874 1.2001C0.0245523 1.30572 0.000493017 1.41915 -3.79112e-08 1.53381C0.000493007 1.64847 0.0245523 1.7619 0.0707874 1.86751C0.117022 1.97313 0.18451 2.06885 0.269343 2.14911L5.34199 7.05418C5.42607 7.14214 5.5281 7.21235 5.64168 7.26036C5.75525 7.30838 5.8779 7.33317 6.00189 7.33317C6.12588 7.33317 6.24852 7.30838 6.36209 7.26036C6.47567 7.21235 6.57771 7.14214 6.66178 7.05418Z" fill="#1C274C"/>
        </svg>
      </button>
      <ng-template
        cdkConnectedOverlay
        [cdkConnectedOverlayOrigin]="trigger"
        [cdkConnectedOverlayOpen]="isOpen()"
        [cdkConnectedOverlayHasBackdrop]="true"
        (backdropClick)="changeStatus()"
        cdkConnectedOverlayBackdropClass="cdk-overlay-transparent-backdrop"
      >
       <div class="example-list flex flex-col gap-4 ">
        <div class="flex justify-between gap-2 hover:opacity-60 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M5.66797 17.3307L8.91015 15.9928C9.15429 15.8952 9.27148 15.8073 9.41797 15.6608L18.7637 6.38341C19.6816 5.47521 19.6719 4.41076 18.7441 3.47326L16.6933 1.40295C15.7558 0.475212 14.6914 0.45568 13.7734 1.36388L4.41797 10.6412C4.27148 10.778 4.18359 10.8854 4.08593 11.1295L2.71875 14.3717C2.51367 14.86 2.5625 15.3483 2.93359 15.7194L4.32031 17.1159C4.68164 17.4772 5.16992 17.5456 5.66797 17.3307ZM5.52148 15.817C5.32617 15.8854 5.17969 15.8854 5.0039 15.7096L4.33984 15.0456C4.16406 14.8698 4.16406 14.7135 4.24219 14.5377L5.45312 11.696L14.7598 2.45763C15.043 2.19396 15.375 2.17443 15.6387 2.4381L17.6992 4.51818C17.9629 4.79161 17.9433 5.12365 17.6699 5.39708L8.36328 14.6354L5.52148 15.817ZM1.85937 17.819H3.04101C3.31445 17.819 3.43164 17.7702 3.64648 17.5944L4.56445 16.8913L3.1582 15.4557L1.57617 17.1256C1.2832 17.4284 1.42969 17.819 1.85937 17.819ZM4.56445 11.696L8.55859 15.7096L9.47656 14.8014L5.48242 10.778L4.56445 11.696ZM12.6699 3.6588L16.664 7.67247L17.582 6.77404L13.5879 2.7506L12.6699 3.6588ZM1.66406 21.3053H20.3262C20.7558 21.3053 21.1172 20.944 21.1172 20.5143C21.1172 20.0846 20.7558 19.7331 20.3262 19.7331H1.66406C1.23437 19.7331 0.882812 20.0846 0.882812 20.5143C0.882812 20.944 1.23437 21.3053 1.66406 21.3053Z" fill="#1C274C"/>
          </svg>
          <button>Изменить пароль</button></div>
         <div class="flex justify-start gap-2 hover:opacity-60 transition-all">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
             <path d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.2429 22 18.8286 22 16.0002 22H15.0002C12.1718 22 10.7576 22 9.87889 21.1213C9.11051 20.3529 9.01406 19.175 9.00195 17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
             <path d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>
           <button>Выход</button></div>
       </div>
      </ng-template>

    </div>
<!--      <div class="bg-ma-light-gray p-1 rounded-full hover:ma-hover">-->
<!--        <app-email-icon />-->
<!--      </div>-->
<!--    <div class="bg-ma-light-gray p-1 rounded-full hover:ma-hover ">-->
<!--    <app-notify-icon/>-->
<!--      </div>-->
  `,
  styles: `
    .example-list {
      min-width: 180px;
      border: solid 1px #ccc;
      border-radius: 5px;
      background: #fff;
      text-align: center;
      padding: 10px;
      margin: 20px 0 0 -40px;
    }
    .example-list > div {
      cursor: pointer;
    }
    .example-list > li {
      list-style-type: none;
      border-bottom: solid 1px #8b8b8b;
      padding: 8px 0;
    }

    .example-list > li:last-child {
      border-bottom: none;
    }
    .cdk-overlay-transparent-backdrop {
      background-color: transparent !important;
    }
  `,
  host: {
    class: 'flex items-center gap-5'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdkOverlayBasicComponent {
 isOpen = signal<boolean>(false)
changeStatus() {
   this.isOpen.update((v) => v = !v)
}
}
