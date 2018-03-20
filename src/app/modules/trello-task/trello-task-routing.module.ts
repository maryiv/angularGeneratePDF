import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from '@app/modules/trello-task/pages/dashboard/dashboard.component';

export const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
