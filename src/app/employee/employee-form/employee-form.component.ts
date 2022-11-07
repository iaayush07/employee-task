import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
//------------------------
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
