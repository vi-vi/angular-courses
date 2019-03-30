import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';
import { authReducer } from './auth.reducers';
// import { AuthEffects } from './auth.effects';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({ isAuthenticated: authReducer })//,
    // EffectsModule.forRoot([AuthEffects])

  ],
  providers: []
})
export class AuthModule {}
