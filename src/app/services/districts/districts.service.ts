import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DistrictsService {
  private url = environment.API_URL + 'district';
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


  addDistrict(data:any) {
    return this.http.post<any>(`${this.url}/addDistrict` , data, { headers: this.general.userAuthorization() });
  }


  getDistricts(){
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }
  
  showDistrict(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}`,{ headers: this.general.userAuthorization() });
  }

  showRegionDistrict(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}`,{ headers: this.general.userAuthorization() });
  }

  editDistrict(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editDistrict/${id}`, data , { headers: this.general.userAuthorization() });
  }


  deactivateDistrict(id:any) {
    return this.http.post<any>(`${this.url}/deactivateDistrict`,id ,  { headers: this.general.userAuthorization() });
  }

  
  activateDistrict(id:any) {
    return this.http.post<any>(`${this.url}/activateDistrict`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteDistrict(id:any) {
    return this.http.post<any>(`${this.url}/deleteDistrict`,id , { headers: this.general.userAuthorization() });
  }
}