import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {
  AuthenticateModel,
  AuthenticateResultModel,
  TokenAuthServiceProxy
} from "../../shared/service-proxies/service-proxies";
import {IResponse} from "../../shared/model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  providers: [TokenAuthServiceProxy],
  template: `

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form [formGroup]="formLogin" (ngSubmit)="onSubmit()">
            <div>
              <label for="email" class="block text-sm font-medium leading-5  text-gray-700">Email address</label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <input formControlName="userNameOrEmailAddress"  id="email" name="email" placeholder="user@example.com" type="email" required="" value="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
              </div>
            </div>

            <div class="mt-6">
              <label for="password" class="block text-sm font-medium leading-5 text-gray-700">Password</label>
              <div class="mt-1 rounded-md shadow-sm">
                <input formControlName="password" id="password" name="password" type="password" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
              </div>
            </div>

            <div class="mt-6 flex items-center justify-between">
              <div class="flex items-center">
                <input formControlName="rememberClient" id="remember_me" name="remember" type="checkbox" value="1" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                <label for="remember_me" class="ml-2 block text-sm leading-5 text-gray-900">Remember me</label>
              </div>

            </div>

            <div class="mt-6">
                    <span class="block w-full rounded-md shadow-sm">
            <button type="submit" class="bg-main-blue w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white  hover:ma-hover focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
              Sign in
            </button>
          </span>
            </div>
          </form>

        </div>
      </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class LoginComponent {
  private tokenAuthService = inject(TokenAuthServiceProxy)
  private route = inject(Router)
  public formLogin = new FormGroup({
    "userNameOrEmailAddress": new FormControl('', [Validators.required]),
    "password": new FormControl('', [Validators.required]),
    "rememberClient": new FormControl(false)
  })
  onSubmit() {
  this.tokenAuthService.authenticate(this.formLogin.value as AuthenticateModel).subscribe((result) => {
    const data = result as IResponse<AuthenticateResultModel>
    if(!data.result.accessToken) {
      return
    }
    localStorage.setItem('authToken', data.result.accessToken);
    this.route.navigate(['/researches'])
  })
  }
}
