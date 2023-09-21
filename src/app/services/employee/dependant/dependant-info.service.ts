​import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../../general/general.service';
import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DependantInfoService {

  private url = environment.API_URL + 'dependant';
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


  addDependant(data:any) {
    return this.http.post<any>(`${this.url}/addDependant` , data, { headers: this.general.userAuthorization() });
  }


  getDependants(){
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }
  getfreeDependants(){
    return this.http.get<any>(`${this.url}/free`);
  }


  countDependants(){
    return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
  }


  showDependant(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}`,{ headers: this.general.userAuthorization() });
  }

  editDependant(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editDependant/${id}`, data , { headers: this.general.userAuthorization() });
  }

  deactivateDependant(id:any) {
    return this.http.post<any>(`${this.url}/deactivateDependant`,id ,  { headers: this.general.userAuthorization() });
  }


  
  activateDependant(id:any) {
    return this.http.post<any>(`${this.url}/activateDependant`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteDependant(id:any) {
    return this.http.post<any>(`${this.url}/deleteDependant`,id , { headers: this.general.userAuthorization() });
  }
}
