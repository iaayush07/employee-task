import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationPopupGuard implements CanDeactivate<EmployeeFormComponent> {
  canDeactivate(component: EmployeeFormComponent) {
    if (component.isDirty) {
      return window.confirm('Are you sure you want to cancle?')
    }
    else {
      return true;
    }
  }

}
