import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { uploadFile } from '../model/upload-file.model';

@Injectable()
export class UploadFileService {
  public barWidth: string = '0%';
  public baseUrl: string;

  constructor(private http: HttpClient) {

    this.baseUrl = "http://localhost:3000/uploadFile/";
  }

  getImage(): Observable<uploadFile[]> {
    return this.http.get<uploadFile[]>(this.baseUrl);
  }

  postImage(imageData: uploadFile): Observable<uploadFile> {
    return this.http.post<uploadFile>(this.baseUrl, imageData);
  }

  //for progressbar

}
