​import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkstationService {
  private url = environment.API_URL + 'workstation';
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


  getWorkstations(){
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }


  getWorkstationBy(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}`,{ headers: this.general.userAuthorization() });
  }


  showWorkstation(id:any) {
    return this.http.post<any>(`${this.url}/show`,id,{ headers: this.general.userAuthorization() });
  }



  editWorkstation(data:any) {
    return this.http.post<any>(`${this.url}/editWorkstation`, data , { headers: this.general.userAuthorization() });
  }

  deactivateWorkstation(id:any) {
    return this.http.post<any>(`${this.url}/deactivateWorkstation`,id ,  { headers: this.general.userAuthorization() });
  }


  
  activateWorkstation(id:any) {
    return this.http.post<any>(`${this.url}/activateWorkstation`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteWorkstation(id:any) {
    return this.http.post<any>(`${this.url}/deleteWorkstation`,id , { headers: this.general.userAuthorization() });
  }
}
