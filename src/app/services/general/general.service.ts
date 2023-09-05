import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { environment } from './../../../environments/environment';
import * as CryptoJS from 'crypto-js';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  token: any;
  decryptedToken: any;

  public API_URL = environment.API_URL;

  // public API_URL = 'http://10.3.1.150:9801/jot-portal-connect/api/v1/';

  bfrcreating: boolean = true;
  creating: boolean = false;
  formart: boolean = true;

  en_message: any;
  sw_message: any;

  appeal_case: boolean = true;
  appeal_case_info: boolean = false;
  appeal_submit: boolean = false;

  timer: number = 800000;
  title_complaint = 'Malalmiko';
  title_appeal = 'Rufaa';
  time_loading = 3600000;
  time_after = 500;
  time_error = 500;

  secretKey = "T!ph-n()l0gy@O56574";

  constructor(
    private http: HttpClient,
  ) { }


  userAuthorization() {
    this.token = sessionStorage.getItem('token');
    this.decryptedToken = this.decryption(this.token);

    const httpHeaders = new HttpHeaders()
      .set('x-access-token', this.decryptedToken);
    return httpHeaders;
  }


  returnBack() {
    this.appeal_case = true;
    this.appeal_case_info = false;
    this.appeal_submit = false;
  }

  noCase() {
    this.appeal_case = false;
    this.appeal_case_info = false;
    this.appeal_submit = true;
  }

  caseInfo() {
    this.appeal_case = false;
    this.appeal_case_info = true;
    this.appeal_submit = false;
  }


  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '150px',
    toolbarHiddenButtons: [
      [
        'undo',
        'redo',
        'fontSize',
        'textColor',
        'backgroundColor',
        'customClasses',
        // 'link',
        'unlink',
        'insertImage',
        'insertVideo',
        'insertHorizontalRule',
        'removeFormat',
        'toggleEditorMode'
      ]
    ],
  };


  encryptId(plaintext: string) {
    const numberId = plaintext.toString();
    const encryptedId = CryptoJS.TripleDES.encrypt(numberId, this.secretKey).toString();
    sessionStorage.setItem('id', encryptedId);
  }

  encryptToken(plaintext: string) {
    const encryptedToken = CryptoJS.TripleDES.encrypt(plaintext, this.secretKey).toString();
    sessionStorage.setItem('token', encryptedToken);
  }

  encryptUrl(plaintext: string) {
    const encryptedUrl = CryptoJS.TripleDES.encrypt(plaintext, this.secretKey).toString();
    sessionStorage.setItem('current_url', encryptedUrl);
  }


  decryption(decryptedText: string) {
    return CryptoJS.TripleDES.decrypt(decryptedText, this.secretKey).toString(CryptoJS.enc.Utf8);
  }

  decryptionId(decryptedText: string) {
    return CryptoJS.TripleDES.decrypt(decryptedText, this.secretKey).toString(CryptoJS.enc.Utf8);

  }






  successMessage(message: any, callback?: any) {
    const trimmedTitle = 'Imefanikiwa';
    const translatedTitle = trimmedTitle;
    const translatedMessage = message;
    const confirmButtonText = 'Close';

    return Swal.fire({
      confirmButtonText: confirmButtonText,
      title: translatedTitle ? translatedTitle : translatedMessage,
      text: translatedTitle ? translatedMessage : '',
      icon: 'success',
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      timer: this.timer,
      preConfirm: callback,
    })
  }


  errorMessage(message: any, callback?: any) {
    const trimmedTitle = 'Failed';
    const translatedTitle = trimmedTitle;
    const translatedMessage = message;
    const confirmButtonText = 'Close';


    return Swal.fire({
      confirmButtonText: confirmButtonText,
      title: translatedTitle ? translatedTitle : translatedMessage,
      text: translatedTitle ? translatedMessage : '',
      icon: 'error',
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      timer: this.timer,
      preConfirm: callback,
    }
    )
  }


  dataLoading(title: any, timer: any) {
    const trimmedTitle = title;
    const translatedMessage = 'Inatafuta ' + trimmedTitle + ' ...';

    return Swal.fire({
      text: trimmedTitle ? translatedMessage : '',
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      timer: timer,
      didOpen: () => {
        Swal.showLoading()
      },
    }
    )
  }

}
