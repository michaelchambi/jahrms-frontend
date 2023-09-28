import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SpecializationService {



  private url = environment.API_URL + 'specialization';
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


  addSpecialization(data:any) {
    return this.http.post<any>(`${this.url}/addSpecialization` , data, { headers: this.general.userAuthorization() });
  }


  getSpecializations(){
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }
  getfreeSpecializations(){
    return this.http.get<any>(`${this.url}/free`);
  }


  countSpecializations(){
    return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
  }


  showSpecialization(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}`,{ headers: this.general.userAuthorization() });
  }

  editSpecialization(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editSpecialization/${id}`, data , { headers: this.general.userAuthorization() });
  }

  deactivateSpecialization(id:any) {
    return this.http.post<any>(`${this.url}/deactivateSpecialization`,id ,  { headers: this.general.userAuthorization() });
  }


  
  activateSpecialization(id:any) {
    return this.http.post<any>(`${this.url}/activateSpecialization`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteSpecialization(id:any) {
    return this.http.post<any>(`${this.url}/deleteSpecialization`,id , { headers: this.general.userAuthorization() });
  }
}
