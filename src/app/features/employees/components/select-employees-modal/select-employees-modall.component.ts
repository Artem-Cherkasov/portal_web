import { Component, EventEmitter, Output } from '@angular/core';
import { ModalWindowData } from '../modal-window/modal-window.component';
import { ToastsService } from 'src/app/core/components/toast-alert/services/toast-alert.service';
import { ToastState } from 'src/app/core/components/toast-alert/toast-alert.component';
import { EmployeeItemEntity } from '../employee-item/employee-item.component';
import { EmployeeSelectSettings, CountType, ClickType } from '../employee-select/interfaces/employee-select-settings';

@Component({
  selector: 'select-employees-modal-window',
  templateUrl: './select-employees-modal.component.html',
})
export class SelectEmployeesModalComponent {
  @Output() closeClicked = new EventEmitter()
  @Output() submitClicked = new EventEmitter<EmployeeItemEntity[]>()

  constructor(private toastService: ToastsService){}

  public selectedEmployees: EmployeeItemEntity[] = []
  
  strings = {
    title: "Выберите сотрудников",
    change: "Выбрать",
    cancel: "Отмена"
  }

  public settings: EmployeeSelectSettings = {
    toolsVisible: false,
    blueBoxVisible: true,
    countType: CountType.Multiple,
    clickType: ClickType.Clicked,
    overflowScroll: true
  }

  public modalWindowData: ModalWindowData = {
    title: this.strings.title,
    submit: this.strings.change,
    cancel: this.strings.cancel
  }

  submitClick(): void
  {
    console.log(this.selectedEmployees)
    if(this.selectedEmployees.length != 0)
    {
      this.submitClicked.emit(this.selectedEmployees)
    }
    else
    {
      this.toastService.createToast({
        title: "Ни одного сотрудника не выбрано",
        description: "Пожалуйста выберите хотя бы одного сотрудника",
        state: ToastState.ERROR //TODO Заменить на WARNING как появится
      })
    }
  }

  selectClick(employees: EmployeeItemEntity[]): void
  {
    this.selectedEmployees = employees
  }
}
