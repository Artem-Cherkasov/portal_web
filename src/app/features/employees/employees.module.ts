import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './presentation/employees.component';
import { ComponentsModule } from 'src/app/core/components/components.module';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { DepartmentInfoComponent } from './components/department-info/department-info.component';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu/menu-item/menu-item.component';
import { DepartmentComponent } from './components/department/department.component';
import { EmployeeItemComponent } from './components/employee-item/employee-item.component';
import { RolesComponent } from './components/roles/roles.component';
import { RoleItemComponent } from './components/roles/role-item/role-item.component';
import { AddEmployeesComponent } from './components/add-employees/add-employees.component';
import { EmployeeNewModule } from './components/employee-new/employee-new.module';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { PageShadingComponent } from 'src/app/core/components/page-shading/page-shading.component';

@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeesListComponent,
    DepartmentInfoComponent,
    MenuComponent,
    MenuItemComponent,
    DepartmentComponent,
    EmployeeItemComponent,
    RolesComponent,
    RoleItemComponent,
    AddEmployeesComponent,
    ModalWindowComponent,
    PageShadingComponent
  ],
  exports: [EmployeesComponent, EmployeeNewModule],
  imports: [CommonModule, ComponentsModule, RouterOutlet],
})
export class EmployeesModule {}
