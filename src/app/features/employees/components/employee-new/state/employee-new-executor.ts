import { Inject, Injectable } from '@angular/core';
import { Executor } from 'src/app/core/mvi/store';
import { EmployeeNewState } from './employee-new-state';
import {
  EmployeeNewResultAction,
  EmployeeNewResultActionTypes,
} from './employee-new-result-action';
import {
  EmployeeNewAction,
  EmployeeNewActionTypes,
} from './employee-new-action';
import { Validator } from 'src/app/core/validators/validator';

@Injectable({
  providedIn: 'root',
})
export class EmployeeNewExecutor extends Executor<
  EmployeeNewState,
  EmployeeNewAction,
  EmployeeNewResultAction
> {
  constructor(
    @Inject('NewEmployeeEmailValidator') private emailValidator: Validator,
    @Inject('NewEmployeePasswordValidator')
    private passwordValidator: Validator,
    @Inject('NewEmployeeFirstNameValidator')
    private firstNameValidator: Validator,
    @Inject('NewEmployeeLastNameValidator')
    private lastNameValidator: Validator,
    @Inject('NewEmployeeDateOfBirthValidator')
    private dateOfBirthValidator: Validator,
    @Inject('NewEmployeePhoneNumberValidator')
    private phoneNumberValidator: Validator,
    @Inject('NewEmployeeJobTitleValidator')
    private jobTitleValidator: Validator,
  ) {
    super();
  }

  execute(action: EmployeeNewAction) {
    switch (action.type) {
      case EmployeeNewActionTypes.CHANGE_JOB_TITLE:
        this.reduce({
          type: EmployeeNewResultActionTypes.CHANGE_JOB_TITLE,
          jobTitle: action.jobTitle,
        });
        break;

      case EmployeeNewActionTypes.CHANGE_PHONE_NUMBER:
        this.reduce({
          type: EmployeeNewResultActionTypes.CHANGE_PHONE_NUMBER,
          phoneNumber: action.phoneNumber,
        });
        break;

      case EmployeeNewActionTypes.CHANGE_FIRST_NAME:
        this.reduce({
          type: EmployeeNewResultActionTypes.CHANGE_FIRST_NAME,
          firstName: action.firstName,
        });
        break;

      case EmployeeNewActionTypes.CHANGE_LAST_NAME:
        this.reduce({
          type: EmployeeNewResultActionTypes.CHANGE_LAST_NAME,
          lastName: action.lastName,
        });
        break;

      case EmployeeNewActionTypes.CHANGE_PATRONYMIC:
        this.reduce({
          type: EmployeeNewResultActionTypes.CHANGE_PATRONYMIC,
          patronymic: action.patronymic,
        });
        break;

      case EmployeeNewActionTypes.CHANGE_DATE_OF_BIRTH:
        this.reduce({
          type: EmployeeNewResultActionTypes.CHANGE_DATE_OF_BIRTH,
          dateOfBirth: action.dateOfBirth,
        });
        break;

      case EmployeeNewActionTypes.CHANGE_EMAIL:
        this.reduce({
          type: EmployeeNewResultActionTypes.CHANGE_EMAIL,
          email: action.email,
        });
        break;

      case EmployeeNewActionTypes.CHANGE_PASSWORD:
        this.reduce({
          type: EmployeeNewResultActionTypes.CHANGE_PASSWORD,
          password: action.password,
        });
        break;

      case EmployeeNewActionTypes.SELECT_DEPARTMENT:
        this.reduce({
          type: EmployeeNewResultActionTypes.SELECT_DEPARTMENT,
          department: action.department,
        });
        break;

      case EmployeeNewActionTypes.REMOVE_DEPARTMENT:
        this.reduce({
          type: EmployeeNewResultActionTypes.REMOVE_DEPARTMENT,
        });
        break;

      case EmployeeNewActionTypes.ADD_ROLE:
        this.reduce({
          type: EmployeeNewResultActionTypes.ADD_ROLE,
          role: this.getState().roles.find((r) => r.id === action.roleId),
        });
        break;

      case EmployeeNewActionTypes.REMOVE_ROLE:
        this.reduce({
          type: EmployeeNewResultActionTypes.REMOVE_ROLE,
          role: this.getState().roles.find((r) => r.id === action.roleId),
        });
        break;

      case EmployeeNewActionTypes.CREATE:
        this.handleCreate();
        break;
      case EmployeeNewActionTypes.OPEN_DEPARTMENT_MODAL:
        this.reduce({
          type: EmployeeNewResultActionTypes.CHANGE_DEPARTMENT_MODAL_VISIBLE,
          visible: true
        })
        break;
      case EmployeeNewActionTypes.CLOSE_DEPARTMENT_MODAL:
        this.reduce({
          type: EmployeeNewResultActionTypes.CHANGE_DEPARTMENT_MODAL_VISIBLE,
          visible: false
        })
        break;
    }
  }

  private handleCreate() {
    let phoneNumberError = this.phoneNumberValidator.validate(
      this.getState().phoneNumber,
    );
    let jobTitleError = this.jobTitleValidator.validate(
      this.getState().jobTitle,
    );
    let emailError = this.emailValidator.validate(this.getState().email);
    let passwordError = this.passwordValidator.validate(
      this.getState().password,
    );
    let firstNameError = this.firstNameValidator.validate(
      this.getState().firstName,
    );
    let lastNameError = this.lastNameValidator.validate(
      this.getState().lastName,
    );
    let dateOfBirthError = this.dateOfBirthValidator.validate(
      this.getState().dateOfBirth,
    );

    if (
      phoneNumberError != null ||
      jobTitleError != null ||
      emailError != null ||
      passwordError != null ||
      firstNameError != null ||
      lastNameError != null ||
      dateOfBirthError != null
    ) {
      this.reduce({
        type: EmployeeNewResultActionTypes.VALIDATION_ERROR,
        phoneNumberError: phoneNumberError != null ? phoneNumberError : '',
        jobTitleError: jobTitleError != null ? jobTitleError : '',
        emailError: emailError != null ? emailError : '',
        passwordError: passwordError != null ? passwordError : '',
        firstNameError: firstNameError != null ? firstNameError : '',
        lastNameError: lastNameError != null ? lastNameError : '',
        dateOfBirthError: dateOfBirthError != null ? dateOfBirthError : '',
      });
      return;
    }

    // Успех. Все валлидно 👻
    console.log(this.getState());
  }
}
