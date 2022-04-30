import { Injectable, ViewContainerRef, ViewRef } from '@angular/core';
import { WindowSettings } from '@progress/kendo-angular-dialog';

@Injectable({providedIn: 'root'})
export class DialogContainerService {
  private static ViewContainerRefs: ViewContainerRef[] = [];
  private static ViewRefs: ViewRef[] = [];
  constructor() { }

  public open(options: WindowSettings): void {
    if (options && options.appendTo) {

    }
  }
}