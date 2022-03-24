import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { counterReducer } from './reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { JediComponent } from './jedi/jedi.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { jediReducer } from './jedi/jedi.reducer';

@NgModule({
  declarations: [AppComponent, JediComponent, PageNotFoundComponent],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ counter: counterReducer, jedis: jediReducer }, {}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
