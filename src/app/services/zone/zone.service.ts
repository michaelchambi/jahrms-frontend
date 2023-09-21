import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  private url = environment.API_URL + 'zone';
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


  addZone(data:any) {
    return this.http.post<any>(`${this.url}/addZone` , data, { headers: this.general.userAuthorization() });
  }


  getZones(){
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }
  getfreeZones(){
    return this.http.get<any>(`${this.url}/free`);
  }


  countZones(){
    return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
  }


  showZone(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}`,{ headers: this.general.userAuthorization() });
  }

  editZone(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editZone/${id}`, data , { headers: this.general.userAuthorization() });
  }

  getZonesByZoneId(data:any) {
    return this.http.post<any>(`${this.url}/byzonelevel`, data , { headers: this.general.userAuthorization() });
  }

  


  deactivateZone(id:any) {
    return this.http.post<any>(`${this.url}/deactivateZone`,id ,  { headers: this.general.userAuthorization() });
  }


  
  activateZone(id:any) {
    return this.http.post<any>(`${this.url}/activateZone`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteZone(id:any) {
    return this.http.post<any>(`${this.url}/deleteZone`,id , { headers: this.general.userAuthorization() });
  }
}
