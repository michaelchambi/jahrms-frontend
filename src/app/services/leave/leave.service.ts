import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
​
@Injectable({
  providedIn: 'root'
})
export class LeaveService {
​
​
  private url = environment.API_URL + 'leaves';
  constructor(
    private http:HttpClient,
    private general: GeneralService,
    private router: Router,
  ) { }
​
  userDetails:any
  userProfiles:any;
  user_profile:any;
  user:any;
  user_id:any;
​
  data:{roles:number[]}={
    roles:[]
  }
​
​
  addleave(data:any) {
    return this.http.post<any>(`${this.url}/add-leave` , data, { headers: this.general.userAuthorization() });
  }
​
​
  getLeaves(){
    return this.http.get<any>(`${this.url}/get-all`, { headers: this.general.userAuthorization() });
  }
​
​
  countLeaves(){
    return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
  }
​
​
  countAssignedLeaves(){
    return this.http.get<any>(`${this.url}/count_assigned`, { headers: this.general.userAuthorization() });
  }
​
  countUnAssignedLeaves(){
    return this.http.get<any>(`${this.url}/count_unassigned`, { headers: this.general.userAuthorization() });
  }
​
  showLeave(data:any) {
    return this.http.post<any>(`${this.url}/show-leave-info` ,data, { headers: this.general.userAuthorization() });
  }
​
​
  showLeavesGeneralDetails(id:any) {
    return this.http.post<any>(`${this.url}/show-my-leave`, id,{ headers: this.general.userAuthorization() });
  }
​
​
  editLeave(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editleave/${id}`, data , { headers: this.general.userAuthorization() });
  }
​
  deactivateLeave(id:any) {
    return this.http.post<any>(`${this.url}/deactivateleave`,id ,  { headers: this.general.userAuthorization() });
  }
​
​
  
  activateleave(id:any) {
    return this.http.post<any>(`${this.url}/activateleave`,id ,  { headers: this.general.userAuthorization() });
  }
​
  deleteleave(id:any) {
    return this.http.post<any>(`${this.url}/deleteleave`,id , { headers: this.general.userAuthorization() });
  }
}










