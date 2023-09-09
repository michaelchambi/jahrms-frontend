import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadreService {



  private url = environment.API_URL + 'cadre';
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


  addCadre(data:any) {
    return this.http.post<any>(`${this.url}/addCadre` , data, { headers: this.general.userAuthorization() });
  }


  getCadres(){
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }
  getfreeCadres(){
    return this.http.get<any>(`${this.url}/free`);
  }


  countCadres(){
    return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
  }


  showCadre(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}`,{ headers: this.general.userAuthorization() });
  }

  editCadre(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editCadre/${id}`, data , { headers: this.general.userAuthorization() });
  }

  deactivateCadre(id:any) {
    return this.http.post<any>(`${this.url}/deactivateCadre`,id ,  { headers: this.general.userAuthorization() });
  }


  
  activateCadre(id:any) {
    return this.http.post<any>(`${this.url}/activateCadre`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteCadre(id:any) {
    return this.http.post<any>(`${this.url}/deleteCadre`,id , { headers: this.general.userAuthorization() });
  }
}
