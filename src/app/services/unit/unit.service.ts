
​import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UnitService {




  private url = environment.API_URL + 'unit';
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


  addUnit(data:any) {
    return this.http.post<any>(`${this.url}/addUnit` , data, { headers: this.general.userAuthorization() });
  }


  getUnits(){
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }
  getfreeUnits(){
    return this.http.get<any>(`${this.url}/free`);
  }


  countUnits(){
    return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
  }


  showUnit(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}`,{ headers: this.general.userAuthorization() });
  }

  editUnit(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editUnit/${id}`, data , { headers: this.general.userAuthorization() });
  }

  deactivateUnit(id:any) {
    return this.http.post<any>(`${this.url}/deactivateUnit`,id ,  { headers: this.general.userAuthorization() });
  }


  
  activateUnit(id:any) {
    return this.http.post<any>(`${this.url}/activateUnit`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteUnit(id:any) {
    return this.http.post<any>(`${this.url}/deleteUnit`,id , { headers: this.general.userAuthorization() });
  }
}
