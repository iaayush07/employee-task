import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { OverlayService } from './services/overlay.service';
import { RouterModule } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';
import { MaskingNumberDirective } from './directives/masking-number.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeFormComponent,
    EmployeeListComponent,
    MaskingNumberDirective
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    RouterModule,
    OverlayModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    OverlayService
  ],
  exports: [
    EmployeeFormComponent,
    EmployeeListComponent
  ]
})
export class EmployeeModule { }
