import { Injectable, ViewContainerRef, ViewRef } from '@angular/core';
import { WindowSettings } from '@progress/kendo-angular-dialog';

@Injectable({ providedIn: 'root' })
export class DialogContainerService {
  private static ViewContainerRefs: ViewContainerRef[] = [];
  private static ViewRefs: ViewRef[] = [];
  constructor() {}

  public open(options: WindowSettings): void {
    if (options && options.appendTo) {
      const length = DialogContainerService.ViewContainerRefs.length;
      if (length) {
        const currentDialogContainer =
          DialogContainerService.ViewContainerRefs[length - 1];
        DialogContainerService.ViewRefs.push(currentDialogContainer.detach());
      }
      DialogContainerService.ViewContainerRefs.push(options.appendTo);
    }
  }

  public close(options: WindowSettings): void {
    if (options && options.appendTo) {
      const previousContainer = DialogContainerService.ViewContainerRefs.pop();
      previousContainer &&
        previousContainer.insert(DialogContainerService.ViewRefs.pop());
    }
  }
}
