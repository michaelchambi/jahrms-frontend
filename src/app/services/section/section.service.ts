​import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SectionService {
  private url = environment.API_URL + 'section';
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


  addSection(data:any) {
    return this.http.post<any>(`${this.url}/addSection` , data, { headers: this.general.userAuthorization() });
  }


  getSections(){
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }
  getfreeSections(){
    return this.http.get<any>(`${this.url}/free`);
  }


  countSections(){
    return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
  }


  showSection(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}`,{ headers: this.general.userAuthorization() });
  }

  editSection(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editSection/${id}`, data , { headers: this.general.userAuthorization() });
  }

  deactivateSection(id:any) {
    return this.http.post<any>(`${this.url}/deactivateSection`,id ,  { headers: this.general.userAuthorization() });
  }


  
  activateSection(id:any) {
    return this.http.post<any>(`${this.url}/activateSection`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteSection(id:any) {
    return this.http.post<any>(`${this.url}/deleteSection`,id , { headers: this.general.userAuthorization() });
  }
}
