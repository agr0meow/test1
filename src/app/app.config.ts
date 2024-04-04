import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {API_BASE_URL} from "../shared/service-proxies/service-proxies";
import {AuthInterceptor} from "../shared/model/services/authentication-interceptor.service";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(),importProvidersFrom(HttpClientModule), {provide: API_BASE_URL, useValue: 'https://localhost:44311'},  {
    provide:HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }]
};
