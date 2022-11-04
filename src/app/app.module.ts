import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UploadFileFormComponent } from './upload-file-form/upload-file-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UploadFileService } from './upload-file-form/services/upload-file.service';
import { OverlayService } from './employee/services/overlay.service';
// import { DisableControlDirective } from './disable-control.directive';

@NgModule({
  declarations: [
    AppComponent,
    UploadFileFormComponent,
    // DisableControlDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UploadFileService,
    OverlayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
