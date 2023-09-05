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
  userId:any;

  data:{roles:number[]}={
    roles:[]
  }


  addCourt(data:any) {
    return this.http.post<any>(`${this.url}/addCourt` , data, { headers: this.general.userAuthorization() });
  }


  getCourts(){
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }
  getfreeCourts(){
    return this.http.get<any>(`${this.url}/free`);
  }


  countCourts(){
    return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
  }


  showCourt(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}`,{ headers: this.general.userAuthorization() });
  }

  editCourt(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editCourt/${id}`, data , { headers: this.general.userAuthorization() });
  }

  getCourtsByCourtId(data:any) {
    return this.http.post<any>(`${this.url}/bycourtlevel`, data , { headers: this.general.userAuthorization() });
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