import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { WindowService, WindowRef, WindowCloseResult } from '@progress/kendo-angular-dialog';
import { DialogContainerService } from './dialog-container.service';

@Component({
    selector: 'my-app',
    template: `
        <div class="example-wrapper">
            <button kendoButton (click)="openWindow('Window 1')">Open Window</button>
        </div>

        <div class="example-wrapper">
            <button kendoButton (click)="openWindow('Window 2')">Open Window</button>
        </div>

        <div class="example-wrapper">
            <button kendoButton (click)="openWindow('Window 3')">Open Window</button>
        </div>
        <div #container></div>
    `
})
export class AppComponent {
    @ViewChild('container', {read: ViewContainerRef}) private container: ViewContainerRef;

    constructor(private windowService: WindowService, private dialogContainerService: DialogContainerService) {}

    public openWindow(title: string): void {
        const options = {
            title,
            content: 'My Content!',
            width: 450,
            height: 200,
            appendTo: this.container,
        }

        this.dialogContainerService.open(options);
        const window: WindowRef = this.windowService.open(options);

        window.result.subscribe((result) => {
            if (result instanceof WindowCloseResult) {
                this.dialogContainerService.close(options);
                console.log('Window was closed!');
            }
        });
    }
}
