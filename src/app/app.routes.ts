import { Routes } from '@angular/router';
import {IRoutingMainPages} from "../shared/model";
export const MainRoutes: Record<string, IRoutingMainPages> = {
  home: "home",
  researches: "researches",
  examination: "examination",
  login: 'login'
};
export const routes: Routes = [
  {
    path: '',
    redirectTo: MainRoutes['login'],
    pathMatch: 'full',
  },
  {
    path: MainRoutes['home'],
    loadComponent: () => import("../pages/home/home.component")
  },
  {
    path: MainRoutes['researches'],
    loadComponent: () => import("../pages/researches/researches.component")
  },
  {
    path: MainRoutes['examination'],
    loadComponent: () => import('../pages/examination/examination.component')
  },
  {
    path: MainRoutes['login'],
    loadComponent: () => import('../pages/login/login.component')
  }
];
