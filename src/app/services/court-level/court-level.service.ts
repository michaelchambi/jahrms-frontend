import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourtLevelService {


  private url = environment.API_URL + 'court_level';
  constructor(
    private http:HttpClient,
    private general: GeneralService,
    private router: Router,
  ) { }

  userDetails:any
  userProfiles:any;
  user_profile:any;
  user:any;
  userId:any;

  data:{roles:number[]}={
    roles:[]
  }


  addCourt_level_level(data:any) {
    return this.http.post<any>(`${this.url}/addCourt_level` , data, { headers: this.general.userAuthorization() });
  }


  getCourt_level(){
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }

  getActiveCourt_level(){
    return this.http.get<any>(`${this.url}/active`, { headers: this.general.userAuthorization() });
  }

  getfreeCourt_level(){
    return this.http.get<any>(`${this.url}/free`);
  }


  countCourt_level(){
    return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
  }


  showCourt_level_level(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}`,{ headers: this.general.userAuthorization() });
  }

  editCourt_level_level(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editCourt_level/${id}`, data , { headers: this.general.userAuthorization() });
  }

  deactivateCourt_level_level(id:any) {
    return this.http.post<any>(`${this.url}/deactivateCourt_level`,id ,  { headers: this.general.userAuthorization() });
  }


  
  activateCourt_level_level(id:any) {
    return this.http.post<any>(`${this.url}/activateCourt_level`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteCourt_level_level(id:any) {
    return this.http.post<any>(`${this.url}/deleteCourt_level`,id , { headers: this.general.userAuthorization() });
  }
}
