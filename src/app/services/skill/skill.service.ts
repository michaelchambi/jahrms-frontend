
​import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SkillService {



  private url = environment.API_URL + 'skill';
  constructor(
    private http:HttpClient,
    private general: GeneralService,
    private router: Router,
  ) { }

  userDetails:any
  userProfiles:any;
  user_profile:any;
  user:any;
  userId:any;

  data:{roles:number[]}={
    roles:[]
  }


  addSkill(data:any) {
    return this.http.post<any>(`${this.url}/addSkill` , data, { headers: this.general.userAuthorization() });
  }


  getSkills(){
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }
  getfreeSkills(){
    return this.http.get<any>(`${this.url}/free`);
  }


  countSkills(){
    return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
  }


  showSkill(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}`,{ headers: this.general.userAuthorization() });
  }

  editSkill(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editSkill/${id}`, data , { headers: this.general.userAuthorization() });
  }

  deactivateSkill(id:any) {
    return this.http.post<any>(`${this.url}/deactivateSkill`,id ,  { headers: this.general.userAuthorization() });
  }


  
  activateSkill(id:any) {
    return this.http.post<any>(`${this.url}/activateSkill`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteSkill(id:any) {
    return this.http.post<any>(`${this.url}/deleteSkill`,id , { headers: this.general.userAuthorization() });
  }
}
