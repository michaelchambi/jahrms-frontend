import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class InstitutionService {


  private url = environment.API_URL + 'institution';
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


  addInstitution(data:any) {
    return this.http.post<any>(`${this.url}/addInstitution` , data, { headers: this.general.userAuthorization() });
  }


  getInstitutions(){
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }
  getfreeInstitutions(){
    return this.http.get<any>(`${this.url}/free`);
  }


  countInstitutions(){
    return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
  }


  showInstitution(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}`,{ headers: this.general.userAuthorization() });
  }

  editInstitution(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editInstitution/${id}`, data , { headers: this.general.userAuthorization() });
  }

  deactivateInstitution(id:any) {
    return this.http.post<any>(`${this.url}/deactivateInstitution`,id ,  { headers: this.general.userAuthorization() });
  }


  
  activateInstitution(id:any) {
    return this.http.post<any>(`${this.url}/activateInstitution`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteInstitution(id:any) {
    return this.http.post<any>(`${this.url}/deleteInstitution`,id , { headers: this.general.userAuthorization() });
  }
}
