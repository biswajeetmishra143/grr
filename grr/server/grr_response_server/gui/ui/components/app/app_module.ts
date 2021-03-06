import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {ClientModule} from '@app/components/client/module';
import {ClientSearchModule} from '@app/components/client_search/module';
import {HomeModule} from '@app/components/home/module';
import {UserMenuModule} from '@app/components/user_menu/module';
import {ApiModule} from '@app/lib/api/module';

import {App} from './app';
import {AppRoutingModule} from './routing';


const ANGULAR_MATERIAL_MODULES = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
];

const GRR_MODULES = [
  ApiModule,
  ClientSearchModule,
  ClientModule,
  HomeModule,
  UserMenuModule,
];

/**
 * The main application module.
 */
@NgModule({
  declarations: [
    App,
  ],
  imports: [
    BrowserAnimationsModule,
    ...ANGULAR_MATERIAL_MODULES,
    ...GRR_MODULES,
    // Should be the last to make sure all module-specific routes are
    // already registered by the time it's imported.
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule {
}

/**
 * The main application module with dev tools support. It enables integration
 * with Chrome's Redux Devltools extension.
 */
@NgModule({
  imports: [
    AppModule,
    StoreDevtoolsModule.instrument({maxAge: 50}),
  ],
  providers: [],
  bootstrap: [App]
})
export class DevAppModule {
}
