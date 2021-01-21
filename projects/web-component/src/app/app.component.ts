import { DOCUMENT } from '@angular/common';
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ɵWebAnimationsDriver } from '@angular/animations/browser';
import { sideNavAnimation, sideNavContainerAnimation, sideNavContainerAnimationN, sideNavAnimationN } from './animations/animations';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ sideNavAnimation, sideNavContainerAnimation, sideNavAnimationN, sideNavContainerAnimationN ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
   
  constructor(private translate: TranslateService, @Inject(DOCUMENT) private document: Document) {
    let defaultLang = 'fr';
    if (this.document.documentElement.lang) {
      defaultLang = this.document.documentElement.lang; 
    }
    
    translate.setDefaultLang(defaultLang);

    ɵWebAnimationsDriver.prototype.containsElement = (el1: any, el2: any) => {
      // Travel up the tree to the root node.
      let elem = el2;
      while (elem && elem !== document.documentElement) {
        if (elem === el1)
          return true;
        elem = elem.parentNode || elem.host;
      }
      return false;
    };
  }

  isOpen = false;

  toggle() {
     this.isOpen = !this.isOpen;
   }

   isOpenN = false;
   toggleN() {
    this.isOpenN = !this.isOpenN;
  }

  
}
