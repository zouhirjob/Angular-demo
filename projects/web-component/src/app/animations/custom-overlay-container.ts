import { Injectable, OnDestroy } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Injectable({providedIn: 'root'})
export class InAppRootOverlayContainer extends OverlayContainer implements OnDestroy {

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    getRootElement(): Element {
        return document.querySelector('demo-web-component');
    }

    protected _createContainer(): void {
        super._createContainer();
        this._appendToRootComponent();
    }

    private _appendToRootComponent(): void {
        if (!this._containerElement) {
            return;
        }

        const rootElement = this.getRootElement();
        const parent = rootElement || this._document.body;
        parent.appendChild(this._containerElement);
    }
}