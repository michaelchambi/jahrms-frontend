
​import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../../general/general.service';
import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NextOfKinInfoService {


  private url = environment.API_URL + 'next_of_kin';
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


  addNextOfKin(data:any) {
    return this.http.post<any>(`${this.url}/addNextOfKin` , data, { headers: this.general.userAuthorization() });
  }


  getNextOfKins(){
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }
  getfreeNextOfKins(){
    return this.http.get<any>(`${this.url}/free`);
  }


  countNextOfKins(){
    return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
  }


  showNextOfKin(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}`,{ headers: this.general.userAuthorization() });
  }

  editNextOfKin(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editNextOfKin/${id}`, data , { headers: this.general.userAuthorization() });
  }

  deactivateNextOfKin(id:any) {
    return this.http.post<any>(`${this.url}/deactivateNextOfKin`,id ,  { headers: this.general.userAuthorization() });
  }


  
  activateNextOfKin(id:any) {
    return this.http.post<any>(`${this.url}/activateNextOfKin`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteNextOfKin(id:any) {
    return this.http.post<any>(`${this.url}/deleteNextOfKin`,id , { headers: this.general.userAuthorization() });
  }
}
