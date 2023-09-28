import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EducationDetailsService {
  private url = environment.API_URL + 'education-details';
  constructor(
    private http:HttpClient,
    private general: GeneralService,
    private router: Router,
  ) { }

  addEducationDetails(data:any) {
    return this.http.post<any>(`${this.url}/addEducationDetails` , data, { headers: this.general.userAuthorization() });
  }
  getEducationDetails(){
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }
  countEducationDetails(){
    return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
  }
  getEducationDetailsById(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}`,{ headers: this.general.userAuthorization() });
  }

  showEducationDetails(id:any) {
    return this.http.post<any>(`${this.url}/show`,id,{ headers: this.general.userAuthorization() });
  }


  editEducationDetails(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editEducationDetails/${id}`, data , { headers: this.general.userAuthorization() });
  }

  deactivateEducationDetails(id:any) {
    return this.http.post<any>(`${this.url}/deactivateEducationDetails`,id ,  { headers: this.general.userAuthorization() });
  }


  
  activateEducationDetails(id:any) {
    return this.http.post<any>(`${this.url}/activateEducationDetails`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteEducationDetails(id:any) {
    return this.http.post<any>(`${this.url}/deleteEducationDetails`,id , { headers: this.general.userAuthorization() });
  }
}
