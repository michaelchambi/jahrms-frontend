import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QualificationService {


  private url = environment.API_URL + 'qualification';
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


  addQualification(data:any) {
    return this.http.post<any>(`${this.url}/addQualification` , data, { headers: this.general.userAuthorization() });
  }


  getQualifications(){
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }
  getfreeQualifications(){
    return this.http.get<any>(`${this.url}/free`);
  }


  countQualifications(){
    return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
  }


  showQualification(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}`,{ headers: this.general.userAuthorization() });
  }

  editQualification(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editQualification/${id}`, data , { headers: this.general.userAuthorization() });
  }

  deactivateQualification(id:any) {
    return this.http.post<any>(`${this.url}/deactivateQualification`,id ,  { headers: this.general.userAuthorization() });
  }


  
  activateQualification(id:any) {
    return this.http.post<any>(`${this.url}/activateQualification`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteQualification(id:any) {
    return this.http.post<any>(`${this.url}/deleteQualification`,id , { headers: this.general.userAuthorization() });
  }
}
