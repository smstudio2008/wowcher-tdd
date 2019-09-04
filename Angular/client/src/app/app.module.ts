import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { HomePageModule } from './modules/components/home-page/home-page.modules';
import { AppRoutingModule } from './route/app-routing.module';
import { InitialAppState, INITIAL_STATE } from './shared/redux/interface/initialState';
import { rootReducer } from './shared/redux/reducers/reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HomePageModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<InitialAppState>, private devTools: DevToolsExtension) {
    const enhancers = isDevMode() ? [devTools.enhancer()] : [];
    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancers);
  }
}
