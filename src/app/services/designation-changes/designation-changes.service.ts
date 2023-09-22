
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DesignationChangesService {


  private url = environment.API_URL + 'designation-cahnges';
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




  getAllElligiblePromotions(){
    return this.http.get<any>(`${this.url}/get-all/promotion`, { headers: this.general.userAuthorization() });
  }
  countLeaves(){
    return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
  }

  getAllDesignationChange(){
    return this.http.get<any>(`${this.url}/all-change-designation`, { headers: this.general.userAuthorization() });
  }
  addDesignationChange(data:any){
    return this.http.post<any>(`${this.url}/addChange-designation`, data, { headers: this.general.userAuthorization() });
  }
  editDesignationChange(data:any){
    return this.http.post<any>(`${this.url}/edit-change-designation`,data, { headers: this.general.userAuthorization() });
  }
  showDesignationChange(data:any){
    return this.http.post<any>(`${this.url}/show-change-designation`,data, { headers: this.general.userAuthorization() });
  }
  activateDesignationChange(data:any){
    return this.http.post<any>(`${this.url}/activate-change-designation`,data, { headers: this.general.userAuthorization() });
  }
  deactivateDesignationChange(data:any){
    return this.http.post<any>(`${this.url}/deactivate-change-designation`, data, { headers: this.general.userAuthorization() });
  }


}
