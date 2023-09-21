​import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MaritalStatusService {


  private url = environment.API_URL + 'marital-status';
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


  addMaritalStatus(data:any) {
    return this.http.post<any>(`${this.url}/addMaritalStatus` , data, { headers: this.general.userAuthorization() });
  }


  getMaritalStatuss(){
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }
  getfreeMaritalStatuss(){
    return this.http.get<any>(`${this.url}/free`);
  }


  countMaritalStatuss(){
    return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
  }


  showMaritalStatus(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}`,{ headers: this.general.userAuthorization() });
  }

  getMaritalStatus(data:any) {
    return this.http.post<any>(`${this.url}/show`, data , { headers: this.general.userAuthorization() });
  }


  editMaritalStatus(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editMaritalStatus/${id}`, data , { headers: this.general.userAuthorization() });
  }

  deactivateMaritalStatus(id:any) {
    return this.http.post<any>(`${this.url}/deactivateMaritalStatus`,id ,  { headers: this.general.userAuthorization() });
  }


  
  activateMaritalStatus(id:any) {
    return this.http.post<any>(`${this.url}/activateMaritalStatus`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteMaritalStatus(id:any) {
    return this.http.post<any>(`${this.url}/deleteMaritalStatus`,id , { headers: this.general.userAuthorization() });
  }
}
