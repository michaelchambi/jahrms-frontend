​import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpouseService {

  private url = environment.API_URL + 'spouse';
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


  addSpouse(data:any) {
    return this.http.post<any>(`${this.url}/addSpouse` , data, { headers: this.general.userAuthorization() });
  }


  getSpouses(){
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }
  getfreeSpouses(){
    return this.http.get<any>(`${this.url}/free`);
  }


  countSpouses(){
    return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
  }


  showSpouse(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}`,{ headers: this.general.userAuthorization() });
  }

  editSpouse(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editSpouse/${id}`, data , { headers: this.general.userAuthorization() });
  }

  deactivateSpouse(id:any) {
    return this.http.post<any>(`${this.url}/deactivateSpouse`,id ,  { headers: this.general.userAuthorization() });
  }


  
  activateSpouse(id:any) {
    return this.http.post<any>(`${this.url}/activateSpouse`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteSpouse(id:any) {
    return this.http.post<any>(`${this.url}/deleteSpouse`,id , { headers: this.general.userAuthorization() });
  }
}
