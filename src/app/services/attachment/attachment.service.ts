import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttachmentService {



  private url = environment.API_URL + 'attachment';
  constructor(
    private http:HttpClient,
    private general: GeneralService,
    private router: Router,
  ) { }

  userDetails:any
  userProfiles:any;
  user_profile:any;
  user:any;
  user_id:any;

  data:{roles:number[]}={
    roles:[]
  }


  addAttachment(data:any) {
    return this.http.post<any>(`${this.url}/addAttachment` , data, { headers: this.general.userAuthorization() });
  }


  getAttachments(){
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }
  getfreeAttachments(){
    return this.http.get<any>(`${this.url}/free`);
  }


  countAttachments(){
    return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
  }


  showAttachment(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}`,{ headers: this.general.userAuthorization() });
  }

  editAttachment(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editAttachment/${id}`, data , { headers: this.general.userAuthorization() });
  }

  deactivateAttachment(id:any) {
    return this.http.post<any>(`${this.url}/deactivateAttachment`,id ,  { headers: this.general.userAuthorization() });
  }


  
  activateAttachment(id:any) {
    return this.http.post<any>(`${this.url}/activateAttachment`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteAttachment(id:any) {
    return this.http.post<any>(`${this.url}/deleteAttachment`,id , { headers: this.general.userAuthorization() });
  }
}
