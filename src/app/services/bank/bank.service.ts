import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  private url = environment.API_URL + 'bank';
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


  addBank(data:any) {
    return this.http.post<any>(`${this.url}/addBank` , data, { headers: this.general.userAuthorization() });
  }


  getBanks(){
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }
  getfreeBanks(){
    return this.http.get<any>(`${this.url}/free`);
  }


  countBanks(){
    return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
  }


  showBank(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}`,{ headers: this.general.userAuthorization() });
  }

  editBank(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editBank/${id}`, data , { headers: this.general.userAuthorization() });
  }

  deactivateBank(id:any) {
    return this.http.post<any>(`${this.url}/deactivateBank`,id ,  { headers: this.general.userAuthorization() });
  }


  
  activateBank(id:any) {
    return this.http.post<any>(`${this.url}/activateBank`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteBank(id:any) {
    return this.http.post<any>(`${this.url}/deleteBank`,id , { headers: this.general.userAuthorization() });
  }
}
