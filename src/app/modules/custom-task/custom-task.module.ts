import {CommonModule} from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {routing} from '@app/modules/custom-task/custom-task-routing.module';

import {MainComponent} from '@app/modules/custom-task/pages/main/main.component';

export const COMPONENTS = [
  MainComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: []
})

export class CustomTaskModule {
}
