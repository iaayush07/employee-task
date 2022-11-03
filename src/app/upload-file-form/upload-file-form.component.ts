import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UploadFileService } from './services/upload-file.service';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';

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
  //progressBar

  fileselected: any

  constructor(private fb: FormBuilder, private uploadFileService: UploadFileService, private http: HttpClient) {
    this.register = this.fb.group({
      file1: ['', [Validators.required]],
      file2: ['', [Validators.required]],
      path: ['']
    })

    this.isSubmitted = false;

    ///--------------------------
    this.register.get('file2')?.disable()


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
      // this.base64String2 = String(reader.result);
      // console.log(this.base64String);
    }

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

    // if (this.imageFile) {
    //   this.isImagevalue = true;
    // }
    if (this.register.controls['file1'].valid) {
      this.register.get('file2')?.enable()
    }
  }
  onSave() {

    this.isSubmitted = true;
    this.register.controls['path'].patchValue(this.base64String);
    this.uploadFileService.postImage(this.register.value).subscribe((data) => {
      console.log(data);

    })
    console.log(this.register)
    // this.router.navigate([''])
  }

  // saveFile() {
  //   let fmData = new FormData();
  //   fmData.append("file", this.fileselected as any);
  //   this.uploadFileService.postImage(this.register.value, fmData, {

  //   })

}


