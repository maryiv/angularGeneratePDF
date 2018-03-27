import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule, Optional, SkipSelf} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

import {MaterialModule} from '@app/modules/core/material.module';

import {TaskService} from '@services/task.service';

import {PageNotFoundComponent} from '@app/modules/core/components/not-found.component';
import {CustomTaskLayoutComponent} from '@app/modules/custom-task/components/layout.component';
import {TrelloTaskLayoutComponent} from '@app/modules/trello-task/components/layout.component';
import {HeaderComponent} from '@components/header/header.component';

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
