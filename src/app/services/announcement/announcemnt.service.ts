import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnnouncemntService {


  private url = environment.API_URL + 'announcement';
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


  addAnnouncement(data:any) {
    return this.http.post<any>(`${this.url}/addAnnouncement` , data, { headers: this.general.userAuthorization() });
  }


  getAnnouncements(){
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }
  getfreeAnnouncements(){
    return this.http.get<any>(`${this.url}/free`);
  }


  countAnnouncements(){
    return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
  }


  countAssignedAnnouncements(){
    return this.http.get<any>(`${this.url}/count_assigned`, { headers: this.general.userAuthorization() });
  }

  countUnAssignedAnnouncements(){
    return this.http.get<any>(`${this.url}/count_unassigned`, { headers: this.general.userAuthorization() });
  }

  showAnnouncement(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}` , { headers: this.general.userAuthorization() });
  }


  showAnnouncementsGeneralDetails(id:any) {
    return this.http.post<any>(`${this.url}/announcement_general_details`, id,{ headers: this.general.userAuthorization() });
  }


  editAnnouncement(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editAnnouncement/${id}`, data , { headers: this.general.userAuthorization() });
  }

  deactivateAnnouncement(id:any) {
    return this.http.post<any>(`${this.url}/deactivateAnnouncement`,id ,  { headers: this.general.userAuthorization() });
  }


  
  activateAnnouncement(id:any) {
    return this.http.post<any>(`${this.url}/activateAnnouncement`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteAnnouncement(id:any) {
    return this.http.post<any>(`${this.url}/deleteAnnouncement`,id , { headers: this.general.userAuthorization() });
  }
}
