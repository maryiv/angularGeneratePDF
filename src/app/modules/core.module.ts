import {NgModule, Optional, SkipSelf} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {MaterialModule} from '@app/modules/material.module';

import {TaskService} from '@services/task.service';

import {HeaderComponent} from '@components/header/header.component';
import {PageNotFoundComponent} from '@app/components/not-found.component';
import {CustomTaskLayoutComponent} from '@app/modules/custom-task/components/layout.component';
import {TrelloTaskLayoutComponent} from '@app/modules/trello-task/components/layout.component';

const COMPONENTS = [
  HeaderComponent,
  PageNotFoundComponent,
  CustomTaskLayoutComponent,
  TrelloTaskLayoutComponent
];

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    MaterialModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [
    TaskService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
