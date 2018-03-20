import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainComponent} from '@app/modules/custom-task/pages/main/main.component';

export const routes: Routes = [
  {path: '', component: MainComponent, pathMatch: 'full'}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
