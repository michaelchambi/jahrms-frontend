import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class StationService {


  private url = environment.API_URL + 'station';
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


  addStation(data:any) {
    return this.http.post<any>(`${this.url}/addStation` , data, { headers: this.general.userAuthorization() });
  }


  getStations(){
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }

  countStations(){
    return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
  }

  getStation(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}` , { headers: this.general.userAuthorization() });
  }


  showStation(id:any) {
    return this.http.post<any>(`${this.url}/show`,id , { headers: this.general.userAuthorization() });
  }


  editStation(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editStation/${id}`, data , { headers: this.general.userAuthorization() });
  }

  deactivateStation(id:any) {
    return this.http.post<any>(`${this.url}/deactivateStation`,id ,  { headers: this.general.userAuthorization() });
  }


  
  activateStation(id:any) {
    return this.http.post<any>(`${this.url}/activateStation`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteStation(id:any) {
    return this.http.post<any>(`${this.url}/deleteStation`,id , { headers: this.general.userAuthorization() });
  }
}
