import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourtsService {


  private url = environment.API_URL + 'court';
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


  addCourt(data:any) {
    return this.http.post<any>(`${this.url}/addCourt` , data, { headers: this.general.userAuthorization() });
  }


  getCourts(){
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }
  countCourts(){
    return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
  }


  showCourt(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}`,{ headers: this.general.userAuthorization() });
  }

  showSelectedCourt(id:any) {
    return this.http.post<any>(`${this.url}/show`,id,{ headers: this.general.userAuthorization() });
  }

  editCourt(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editCourt/${id}`, data , { headers: this.general.userAuthorization() });
  }

  editCourtAsWorkStation(data:any) {
    return this.http.post<any>(`${this.url}/editCourt`, data , { headers: this.general.userAuthorization() });
  }



  getCourtsByCourtId(data:any) {
    return this.http.post<any>(`${this.url}/bycourtlevel`, data , { headers: this.general.userAuthorization() });
  }

  getCourtsByCourtLevelIdAndDistrictId(data:any) {
    return this.http.post<any>(`${this.url}/bycourtlevelDistrict`, data , { headers: this.general.userAuthorization() });
  }


  getCourtsByCourtIdNoZone(data:any) {
    return this.http.post<any>(`${this.url}/bycourtlevel-nozone`, data , { headers: this.general.userAuthorization() });
  }
  


  deactivateCourt(id:any) {
    return this.http.post<any>(`${this.url}/deactivateCourt`,id ,  { headers: this.general.userAuthorization() });
  }


  
  activateCourt(id:any) {
    return this.http.post<any>(`${this.url}/activateCourt`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteCourt(id:any) {
    return this.http.post<any>(`${this.url}/deleteCourt`,id , { headers: this.general.userAuthorization() });
  }
}
