import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DesignationsService {



  private url = environment.API_URL + 'designation';
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


  addDesignation(data:any) {
    return this.http.post<any>(`${this.url}/addDesignation` , data, { headers: this.general.userAuthorization() });
  }


  getDesignations(){
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }
  getfreeDesignations(){
    return this.http.get<any>(`${this.url}/free`);
  }


  countDesignations(){
    return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
  }


  showDesignation(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}`,{ headers: this.general.userAuthorization() });
  }

  editDesignation(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editDesignation/${id}`, data , { headers: this.general.userAuthorization() });
  }

  deactivateDesignation(id:any) {
    return this.http.post<any>(`${this.url}/deactivateDesignation`,id ,  { headers: this.general.userAuthorization() });
  }


  
  activateDesignation(id:any) {
    return this.http.post<any>(`${this.url}/activateDesignation`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteDesignation(id:any) {
    return this.http.post<any>(`${this.url}/deleteDesignation`,id , { headers: this.general.userAuthorization() });
  }
}
