​import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
​
@Injectable({
  providedIn: 'root'
})
export class LeaveTypeService {




  private url = environment.API_URL + 'leave_type';
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


  addLeaveType(data:any) {
    return this.http.post<any>(`${this.url}/addLeaveType` , data, { headers: this.general.userAuthorization() });
  }


  getLeaveTypes(){
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }
  getfreeLeaveTypes(){
    return this.http.get<any>(`${this.url}/free`);
  }


  countLeaveTypes(){
    return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
  }


  showLeaveType(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}`,{ headers: this.general.userAuthorization() });
  }

  editLeaveType(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editLeaveType/${id}`, data , { headers: this.general.userAuthorization() });
  }

  deactivateLeaveType(id:any) {
    return this.http.post<any>(`${this.url}/deactivateLeaveType`,id ,  { headers: this.general.userAuthorization() });
  }


  
  activateLeaveType(id:any) {
    return this.http.post<any>(`${this.url}/activateLeaveType`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteLeaveType(id:any) {
    return this.http.post<any>(`${this.url}/deleteLeaveType`,id , { headers: this.general.userAuthorization() });
  }
}
