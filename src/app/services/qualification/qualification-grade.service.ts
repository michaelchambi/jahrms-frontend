import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class QualificationGradeService {

  private url = environment.API_URL + 'qualification_grade';
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


  addQualification_grade(data:any) {
    return this.http.post<any>(`${this.url}/addQualificationGrade` , data, { headers: this.general.userAuthorization() });
  }


  getQualification_grades(){
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }
  getfreeQualification_grades(){
    return this.http.get<any>(`${this.url}/free`);
  }


  countQualification_grades(){
    return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
  }


  showQualification_grade(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}`,{ headers: this.general.userAuthorization() });
  }

  editQualification_grade(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editQualificationGrade/${id}`, data , { headers: this.general.userAuthorization() });
  }

  deactivateQualification_grade(id:any) {
    return this.http.post<any>(`${this.url}/deactivateQualificationGrade`,id ,  { headers: this.general.userAuthorization() });
  }


  
  activateQualification_grade(id:any) {
    return this.http.post<any>(`${this.url}/activateQualificationGrade`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteQualification_grade(id:any) {
    return this.http.post<any>(`${this.url}/deleteQualificationGrade`,id , { headers: this.general.userAuthorization() });
  }
}
