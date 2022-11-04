import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UploadFileService } from './services/upload-file.service';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { uploadFile } from './model/upload-file.model';

@Component({
  selector: 'app-upload-file-form',
  templateUrl: './upload-file-form.component.html',
  styleUrls: ['./upload-file-form.component.scss']
})
export class UploadFileFormComponent implements OnInit {

  public register: FormGroup;
  public imageFile!: File;
  public base64String: any;
  public base64String2: any;
  public isSubmitted: boolean;
  public barWidth: string = ''
  percentDone: number;
  uploadSuccess: boolean;
  //progressBar

  fileselected: any

  constructor(private fb: FormBuilder, private uploadFileService: UploadFileService, private http: HttpClient, private router: Router) {
    this.register = this.fb.group({
      file1: ['', [Validators.required]],
      file2: ['', [Validators.required]],
      path: ['']
    })

    this.isSubmitted = false;
    this.uploadSuccess = false;

    ///--------------------------
    this.register.get('file2')?.disable()

    this.percentDone = 0
  }

  ngOnInit(): void {

  }

  get f(): { [key: string]: AbstractControl; } {
    return this.register.controls;
  }

  onUpload(event: any) {
    //for preview image
    if (event.target.files.length > 0) {
      this.imageFile = event.target.files[0];
      console.log(this.imageFile);
    }
    var reader = new FileReader();
    reader.readAsDataURL(this.imageFile);
    reader.onload = () => {
      this.base64String = String(reader.result);
    }
    this.register.controls['path'].patchValue(this.base64String);
    this.uploadFileService.postImage(this.register.value).subscribe((data) => {
    })


    //for enable or
    if (this.register.controls['file1'].valid) {
      this.register.get('file2')?.enable()
    }
  }
  onUpload2(event: any) {
    if (event.target.files.length > 0) {
      this.imageFile = event.target.files[0];
      console.log(this.imageFile);
    }
    var reader = new FileReader();
    reader.readAsDataURL(this.imageFile);
    reader.onload = () => {
      // this.base64String = String(reader.result);
      this.base64String2 = String(reader.result);
      // console.log(this.base64String);
    }
    //------------------
    this.register.controls['path'].patchValue(this.base64String);
    this.uploadFileService.postImage(this.register.value).subscribe((data) => {
      console.log(data);
    })
    console.log(this.register)
    // if (this.imageFile) {
    //   this.isImagevalue = true;
    // }
    if (this.register.controls['file1'].valid) {
      this.register.get('file2')?.enable()
    }
  }
  onNext() {

    this.isSubmitted = true;

    this.router.navigate(['/employee'])
  }

  uploadAndProgress(files: uploadFile[]) {
    var formData = new FormData();
    Array.from(files).forEach((f: any) => formData.append('file', f))

    this.http.post("http://localhost:3000/uploadFile/", this.register.value, { reportProgress: true, observe: 'events' })
      .subscribe((event: any) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentDone = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.uploadSuccess = true;
        }
      });
  }

}


