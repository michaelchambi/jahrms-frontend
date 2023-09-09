import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProfessioanlService {

  private url = environment.API_URL + 'professional';
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


  addProfessional(data:any) {
    return this.http.post<any>(`${this.url}/addProfessional` , data, { headers: this.general.userAuthorization() });
  }


  getProfessionals(){
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }
  getfreeProfessionals(){
    return this.http.get<any>(`${this.url}/free`);
  }


  countProfessionals(){
    return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
  }


  showProfessional(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}`,{ headers: this.general.userAuthorization() });
  }

  editProfessional(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editProfessional/${id}`, data , { headers: this.general.userAuthorization() });
  }

  deactivateProfessional(id:any) {
    return this.http.post<any>(`${this.url}/deactivateProfessional`,id ,  { headers: this.general.userAuthorization() });
  }


  
  activateProfessional(id:any) {
    return this.http.post<any>(`${this.url}/activateProfessional`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteProfessional(id:any) {
    return this.http.post<any>(`${this.url}/deleteProfessional`,id , { headers: this.general.userAuthorization() });
  }
}
