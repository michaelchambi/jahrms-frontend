import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RegionService {



  private url = environment.API_URL + 'region';
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


  addRegion(data:any) {
    return this.http.post<any>(`${this.url}/addRegion` , data, { headers: this.general.userAuthorization() });
  }


  getRegions(){
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }

  countRegions(){
    return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
  }

  showRegion(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}` , { headers: this.general.userAuthorization() });
  }


  editRegion(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editRegion/${id}`, data , { headers: this.general.userAuthorization() });
  }

  deactivateRegion(id:any) {
    return this.http.post<any>(`${this.url}/deactivateRegion`,id ,  { headers: this.general.userAuthorization() });
  }


  
  activateRegion(id:any) {
    return this.http.post<any>(`${this.url}/activateRegion`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteRegion(id:any) {
    return this.http.post<any>(`${this.url}/deleteRegion`,id , { headers: this.general.userAuthorization() });
  }
}
