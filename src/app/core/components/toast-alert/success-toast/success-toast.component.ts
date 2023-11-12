import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'success-toast',
  templateUrl: './success-toast.component.html',
})
export class SuccessToastComponent implements OnInit {
  @Input() title = "";
  @Input() description = ""

  @Output() closeClick = new EventEmitter()

  ngOnInit(): void {
    setTimeout(() => {this.closeClick.emit()}, 4000)
  }
}