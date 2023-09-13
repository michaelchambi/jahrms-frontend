​import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonalSkillsService {

  private url = environment.API_URL + 'personal_skill';
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


  addPersonalSkill(data:any) {
    return this.http.post<any>(`${this.url}/addPersonalSkill` , data, { headers: this.general.userAuthorization() });
  }


  getPersonalSkills(){
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }
  getfreePersonalSkills(){
    return this.http.get<any>(`${this.url}/free`);
  }


  countPersonalSkills(){
    return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
  }


  showPersonalSkill(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}`,{ headers: this.general.userAuthorization() });
  }

  editPersonalSkill(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editPersonalSkill/${id}`, data , { headers: this.general.userAuthorization() });
  }

  deactivatePersonalSkill(id:any) {
    return this.http.post<any>(`${this.url}/deactivatePersonalSkill`,id ,  { headers: this.general.userAuthorization() });
  }


  
  activatePersonalSkill(id:any) {
    return this.http.post<any>(`${this.url}/activatePersonalSkill`,id ,  { headers: this.general.userAuthorization() });
  }

  deletePersonalSkill(id:any) {
    return this.http.post<any>(`${this.url}/deletePersonalSkill`,id , { headers: this.general.userAuthorization() });
  }
}
