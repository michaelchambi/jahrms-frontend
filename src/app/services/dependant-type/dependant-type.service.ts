​import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DependantTypeService {
  private url = environment.API_URL + 'dependant_type';
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


  addDependantType(data:any) {
    return this.http.post<any>(`${this.url}/addDependantType` , data, { headers: this.general.userAuthorization() });
  }


  getDependantTypes(){
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }
  getfreeDependantTypes(){
    return this.http.get<any>(`${this.url}/free`);
  }


  countDependantTypes(){
    return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
  }


  showDependantType(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}`,{ headers: this.general.userAuthorization() });
  }

  editDependantType(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editDependantType/${id}`, data , { headers: this.general.userAuthorization() });
  }

  deactivateDependantType(id:any) {
    return this.http.post<any>(`${this.url}/deactivateDependantType`,id ,  { headers: this.general.userAuthorization() });
  }


  
  activateDependantType(id:any) {
    return this.http.post<any>(`${this.url}/activateDependantType`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteDependantType(id:any) {
    return this.http.post<any>(`${this.url}/deleteDependantType`,id , { headers: this.general.userAuthorization() });
  }
}
