import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {CoreModule} from '@app/modules/core/core.module';
import {routing} from '@app/app-routing.module';

import {AppComponent} from '@app/modules/core/components/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
