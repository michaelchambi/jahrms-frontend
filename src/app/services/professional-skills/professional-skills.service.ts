import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProfessionalSkillsService {


  private url = environment.API_URL + 'professional-skills';
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


  addProfessionalSkills(data:any) {
    return this.http.post<any>(`${this.url}/addProfessionalSkills` , data, { headers: this.general.userAuthorization() });
  }
  getProfessionalSkillss(){
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }
  countProfessionalSkillss(){
    return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
  }
  getProfessionalSkills(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}`,{ headers: this.general.userAuthorization() });
  }

  showProfessionalSkills(id:any) {
    return this.http.post<any>(`${this.url}/show`,id,{ headers: this.general.userAuthorization() });
  }


  editProfessionalSkills(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editProfessionalSkills/${id}`, data , { headers: this.general.userAuthorization() });
  }

  deactivateProfessionalSkills(id:any) {
    return this.http.post<any>(`${this.url}/deactivateProfessionalSkills`,id ,  { headers: this.general.userAuthorization() });
  }


  
  activateProfessionalSkills(id:any) {
    return this.http.post<any>(`${this.url}/activateProfessionalSkills`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteProfessionalSkills(id:any) {
    return this.http.post<any>(`${this.url}/deleteProfessionalSkills`,id , { headers: this.general.userAuthorization() });
  }
}
