import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { WindowService, WindowRef, WindowCloseResult } from '@progress/kendo-angular-dialog';
import { DialogContainerService } from '@progress/kendo-angular-dialog/dialog/dialog-container.service';

@Component({
    selector: 'my-app',
    template: `
        <div class="example-wrapper">
            <button kendoButton (click)="openWindow()">Open Window</button>
        </div>

        <div class="example-wrapper">
            <button kendoButton (click)="openWindow()">Open Window</button>
        </div>

        <div class="example-wrapper">
            <button kendoButton (click)="openWindow()">Open Window</button>
        </div>
        <div #container></div>
    `
})
export class AppComponent {
    @ViewChild('container', {read: ViewContainerRef}) private container: ViewContainerRef;

    constructor(private windowService: WindowService, private dialogContainerService: DialogContainerService) {}

    public openWindow(): void {
        const window: WindowRef = this.windowService.open({
            title: 'My Window',
            content: 'My Content!',
            width: 450,
            height: 200,
            appendTo: this.container,
        });

        window.result.subscribe((result) => {
            if (result instanceof WindowCloseResult) {
                console.log('Window was closed!');
            }
        });
    }
}
