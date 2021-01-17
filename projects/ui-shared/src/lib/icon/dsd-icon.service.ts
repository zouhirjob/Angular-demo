import { Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Icons } from "./dsd-icons";

@Injectable({
    providedIn: 'root'
  })
  export class DsdIconService {
  
    constructor(
      private matIconRegistry: MatIconRegistry,
      private domSanitizer: DomSanitizer
    ) { }
  
    public registerIcons(): void {
      this.loadIcons(Object.values(Icons), '../assets/svg/icons');
    }
  
    private loadIcons(iconKeys: string[], iconUrl: string): void {
      iconKeys.forEach(key => {
        this.matIconRegistry.addSvgIcon(key, this.domSanitizer.bypassSecurityTrustResourceUrl(`${iconUrl}/${key}.svg`));
      });
    }
  }
  