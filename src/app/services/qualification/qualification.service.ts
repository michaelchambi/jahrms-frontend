import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducationLevelService {


  private url = environment.API_URL + 'education_level';
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


  addEducationLevel(data:any) {
    return this.http.post<any>(`${this.url}/addEducationLevel` , data, { headers: this.general.userAuthorization() });
  }


  getEducationLevels(){
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }
  getfreeEducationLevels(){
    return this.http.get<any>(`${this.url}/free`);
  }


  countEducationLevels(){
    return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
  }


  showEducationLevel(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}`,{ headers: this.general.userAuthorization() });
  }

  editEducationLevel(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editEducationLevel/${id}`, data , { headers: this.general.userAuthorization() });
  }

  deactivateEducationLevel(id:any) {
    return this.http.post<any>(`${this.url}/deactivateEducationLevel`,id ,  { headers: this.general.userAuthorization() });
  }


  
  activateEducationLevel(id:any) {
    return this.http.post<any>(`${this.url}/activateEducationLevel`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteEducationLevel(id:any) {
    return this.http.post<any>(`${this.url}/deleteEducationLevel`,id , { headers: this.general.userAuthorization() });
  }
}
