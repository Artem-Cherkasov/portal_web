import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'error-toast',
  templateUrl: './error-toast.component.html',
})
export class ErrorToastComponent  implements OnInit{
  @Input() title = "";
  @Input() description = ""

  @Output() closeClick = new EventEmitter()

  ngOnInit(): void {
    setTimeout(() => {this.closeClick.emit()}, 4000)
  }
}