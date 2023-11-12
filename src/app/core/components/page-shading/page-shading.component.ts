import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-core-page-shading',
  templateUrl: './page-shading.component.html',
})
export class PageShadingComponent {
  @Input() showDialog = false;
}
