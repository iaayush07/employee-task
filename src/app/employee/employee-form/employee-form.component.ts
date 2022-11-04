import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  public employeeForm: FormGroup;
  public isDirty: boolean;

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      mobile: ['']
    })

    this.isDirty = true;
  }

  ngOnInit(): void {
  }

}
