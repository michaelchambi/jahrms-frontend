import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {


  private url = environment.API_URL + 'department';
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


  addDepartment(data:any) {
    return this.http.post<any>(`${this.url}/addDepartment` , data, { headers: this.general.userAuthorization() });
  }


  getDepartments(){
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }
  getfreeDepartments(){
    return this.http.get<any>(`${this.url}/free`);
  }


  countDepartments(){
    return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
  }


  showDepartment(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}`,{ headers: this.general.userAuthorization() });
  }

  editDepartment(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editDepartment/${id}`, data , { headers: this.general.userAuthorization() });
  }

  deactivateDepartment(id:any) {
    return this.http.post<any>(`${this.url}/deactivateDepartment`,id ,  { headers: this.general.userAuthorization() });
  }


  
  activateDepartment(id:any) {
    return this.http.post<any>(`${this.url}/activateDepartment`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteDepartment(id:any) {
    return this.http.post<any>(`${this.url}/deleteDepartment`,id , { headers: this.general.userAuthorization() });
  }
}
