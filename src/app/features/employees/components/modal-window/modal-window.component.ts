import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'employees-modal-window',
  templateUrl: './modal-window.component.html',
})
export class ModalWindowComponent {
  @Input() title = "Select"

  @Output() closeClick = new EventEmitter()
  
}
