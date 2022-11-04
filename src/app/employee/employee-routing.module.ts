import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeComponent } from './employee.component';
import { ConfirmationPopupGuard } from './Guard/confirmation-popup.guard';

const routes: Routes = [
  { path: '', component: EmployeeComponent },
  {
    path: 'add',
    component: EmployeeFormComponent,
    canDeactivate: [ConfirmationPopupGuard]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
