import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadFileFormComponent } from './upload-file-form/upload-file-form.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'upload-file'
  },
  {
    path: 'upload-file',
    component: UploadFileFormComponent
  },
  { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
