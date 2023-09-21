import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Router } from '@angular/router';
  import { GeneralService } from '../../general/general.service';
  import { Observable } from 'rxjs';
  import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PersonalSkillInfoService {

  

    private url = environment.API_URL + 'personal-skill';
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
  
  
    addPersonnalSkill(data:any) {
      return this.http.post<any>(`${this.url}/addPersonnalSkill` , data, { headers: this.general.userAuthorization() });
    }
    getPersonnalSkills(){
      return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
    }
    countPersonnalSkills(){
      return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
    }
    showPersonnalSkill(id:any) {
      return this.http.get<any>(`${this.url}/show/${id}`,{ headers: this.general.userAuthorization() });
    }
  
    editPersonnalSkill(id:any, data:any) {
      return this.http.post<any>(`${this.url}/editPersonnalSkill/${id}`, data , { headers: this.general.userAuthorization() });
    }
  
    deactivatePersonnalSkill(id:any) {
      return this.http.post<any>(`${this.url}/deactivatePersonnalSkill`,id ,  { headers: this.general.userAuthorization() });
    }
  
  
    
    activatePersonnalSkill(id:any) {
      return this.http.post<any>(`${this.url}/activatePersonnalSkill`,id ,  { headers: this.general.userAuthorization() });
    }
  
    deletePersonnalSkill(id:any) {
      return this.http.post<any>(`${this.url}/deletePersonnalSkill`,id , { headers: this.general.userAuthorization() });
    }
  }
  