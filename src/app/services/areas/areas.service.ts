

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AreasService {



  private url = environment.API_URL + 'areas';
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


  addAreas(data:any) {
    return this.http.post<any>(`${this.url}/addAreas` , data, { headers: this.general.userAuthorization() });
  }
  getAreass(){
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }
  countAreass(){
    return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
  }
  getAreas(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}`,{ headers: this.general.userAuthorization() });
  }

  showAreas(id:any) {
    return this.http.post<any>(`${this.url}/show`,id,{ headers: this.general.userAuthorization() });
  }


  editAreas(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editAreas/${id}`, data , { headers: this.general.userAuthorization() });
  }

  deactivateAreas(id:any) {
    return this.http.post<any>(`${this.url}/deactivateAreas`,id ,  { headers: this.general.userAuthorization() });
  }


  
  activateAreas(id:any) {
    return this.http.post<any>(`${this.url}/activateAreas`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteAreas(id:any) {
    return this.http.post<any>(`${this.url}/deleteAreas`,id , { headers: this.general.userAuthorization() });
  }
}
