import { Component, OnInit } from '@angular/core';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { OverlayService } from '../services/overlay.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {


  constructor(private overlayService: OverlayService
  ) {

  }

  ngOnInit(): void {
  }

  openOverlay() {
    this.overlayService.open(EmployeeFormComponent)
  }

}
