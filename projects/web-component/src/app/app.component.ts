import { DOCUMENT } from '@angular/common';
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'web-component';
  constructor(private translate: TranslateService, @Inject(DOCUMENT) private document: Document) {
    let defaultLang = 'fr';
    if (this.document.documentElement.lang) {
      defaultLang = this.document.documentElement.lang; 
    }
    
    translate.setDefaultLang(defaultLang);
  }
}
