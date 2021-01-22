import { BrowserModule, ɵDomSharedStylesHost } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { createCustomElement } from '@angular/elements';
import { UiButtonComponent } from './components/ui-button/ui-button.component';
import { MaterialModule } from './ui-material.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateExampleComponent } from './components/translate-example/translate-example.component';
import { LeftMenuModule } from 'ui-shared';
import { OverlayContainer } from '@angular/cdk/overlay';
import { InAppRootOverlayContainer } from './animations/custom-overlay-container';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [
    AppComponent,
    UiButtonComponent,
    TranslateExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),

    // lib modules
    LeftMenuModule,
    MatButtonToggleModule
  ],
  providers: [
    { provide: OverlayContainer, useClass:  InAppRootOverlayContainer },
  ],
  entryComponents: [AppComponent]
})
export class AppModule { 
  constructor(injector: Injector) {
    injector.get(ɵDomSharedStylesHost).removeHost(document.head);
    const el = createCustomElement(AppComponent, { injector });
    customElements.define('demo-web-component', el);
  }

 

  ngDoBootstrap() {}
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
