import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EducationLevelGradeService {

  private url = environment.API_URL + 'education_level_grade';
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


  addEducationLevel_grade(data:any) {
    return this.http.post<any>(`${this.url}/addEducationLevelGrade` , data, { headers: this.general.userAuthorization() });
  }


  getEducationLevel_grades(){
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }
  getfreeEducationLevel_grades(){
    return this.http.get<any>(`${this.url}/free`);
  }


  countEducationLevel_grades(){
    return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
  }


  showEducationLevel_grade(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}`,{ headers: this.general.userAuthorization() });
  }

  editEducationLevel_grade(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editEducationLevelGrade/${id}`, data , { headers: this.general.userAuthorization() });
  }

  deactivateEducationLevel_grade(id:any) {
    return this.http.post<any>(`${this.url}/deactivateEducationLevelGrade`,id ,  { headers: this.general.userAuthorization() });
  }


  
  activateEducationLevel_grade(id:any) {
    return this.http.post<any>(`${this.url}/activateEducationLevelGrade`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteEducationLevel_grade(id:any) {
    return this.http.post<any>(`${this.url}/deleteEducationLevelGrade`,id , { headers: this.general.userAuthorization() });
  }
}
