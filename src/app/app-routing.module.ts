import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CustomTaskLayoutComponent} from '@app/modules/custom-task/components/layout.component';
import {TrelloTaskLayoutComponent} from '@app/modules/trello-task/components/layout.component';

import {PageNotFoundComponent} from '@app/components/not-found.component';

export const routes: Routes = [
  {
    path: 'trello',
    component: TrelloTaskLayoutComponent,
    loadChildren: './modules/trello-task/trello-task.module#TrelloTaskModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'custom',
    component: CustomTaskLayoutComponent,
    loadChildren: './modules/custom-task/custom-task.module#CustomTaskModule'
  },
  {path: '', redirectTo: '/custom', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
