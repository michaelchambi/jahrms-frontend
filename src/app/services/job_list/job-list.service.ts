
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class JobListService {


  private url = environment.API_URL + 'job_lists';
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


  addJobList(data:any) {
    return this.http.post<any>(`${this.url}/add-job_lists` , data, { headers: this.general.userAuthorization() });
  }


  getAllJOTJobLists(){
    return this.http.get<any>(`${this.url}/get-all/job-list`, { headers: this.general.userAuthorization() });
  }
  getJobLists(){
    return this.http.get<any>(`${this.url}/get-all`, { headers: this.general.userAuthorization() });
  }
  getJobListSuppervised(){
    return this.http.get<any>(`${this.url}/get-all/suppervised`, { headers: this.general.userAuthorization() });
  }
  getJobListApproved(){
    return this.http.get<any>(`${this.url}/get-all/approved`, { headers: this.general.userAuthorization() });
  }
  getJobListRetturned(){
    return this.http.get<any>(`${this.url}/get-all/returned`, { headers: this.general.userAuthorization() });
  }


  showJobLists(data:any) {
    return this.http.post<any>(`${this.url}/show-job_lists-info` ,data, { headers: this.general.userAuthorization() });
  }


  showJobListsGeneralDetails(id:any) {
    return this.http.post<any>(`${this.url}/show-my-job_lists`, id,{ headers: this.general.userAuthorization() });
  }


  editJobList( data:any) {
    return this.http.post<any>(`${this.url}/edit-job-lists`, data , { headers: this.general.userAuthorization() });
  }

  rejectJobList(data:any) {
    return this.http.post<any>(`${this.url}/reject-job_lists`,data ,  { headers: this.general.userAuthorization() });
  }

  
  approveJobList(data:any) {
    return this.http.post<any>(`${this.url}/approver-job_lists`,data ,  { headers: this.general.userAuthorization() });
  }

  commentJobListImmedietSuppervisor(data:any) {
    return this.http.post<any>(`${this.url}/supporvisor-job_lists`,data ,  { headers: this.general.userAuthorization() });
  }
  deleteJobList(data:any) {
    return this.http.post<any>(`${this.url}/delete-job_lists`,data , { headers: this.general.userAuthorization() });
  }

  //main job lists
  addMainJobList(data:any) {
    return this.http.post<any>(`${this.url}/add-job_lists/main` , data, { headers: this.general.userAuthorization() });
  }


  getMainJobLists(){
    return this.http.get<any>(`${this.url}/get-all/main`, { headers: this.general.userAuthorization() });
  }
  getMainJobListSuppervised(){
    return this.http.get<any>(`${this.url}/get-all/main-suppervised`, { headers: this.general.userAuthorization() });
  }
  getMainJobListApproved(){
    return this.http.get<any>(`${this.url}/get-all/main-approved`, { headers: this.general.userAuthorization() });
  }
  getMainJobListRetturned(){
    return this.http.get<any>(`${this.url}/get-all/main-returned`, { headers: this.general.userAuthorization() });
  }

  showMainJobLists(data:any) {
    return this.http.post<any>(`${this.url}/show-job_lists-info/main` ,data, { headers: this.general.userAuthorization() });
  }


  showMainJobListsGeneralDetails(id:any) {
    return this.http.post<any>(`${this.url}/show-my-job_lists/main`, id,{ headers: this.general.userAuthorization() });
  }


  editMainJobList(data:any) {
    return this.http.post<any>(`${this.url}/edit-job-lists/main`, data , { headers: this.general.userAuthorization() });
  }

  rejectMainJobList(data:any) {
    return this.http.post<any>(`${this.url}/reject-job_lists/main`,data ,  { headers: this.general.userAuthorization() });
  }

  
  approveMainJobList(data:any) {
    return this.http.post<any>(`${this.url}/approver-job_lists/main`,data ,  { headers: this.general.userAuthorization() });
  }

  commentMainJobListImmedietSuppervisor(data:any) {
    return this.http.post<any>(`${this.url}/supporvisor-job_lists/main`,data ,  { headers: this.general.userAuthorization() });
  }
  deleteMainJobList(data:any) {
    return this.http.post<any>(`${this.url}/delete-job_lists/main`,data , { headers: this.general.userAuthorization() });
  }




    //main job lists Directorate
    addDirectorateJobList(data:any) {
      return this.http.post<any>(`${this.url}/add-job_lists/directorate` , data, { headers: this.general.userAuthorization() });
    }
  
   
    getDirectorateJobLists(){
      return this.http.get<any>(`${this.url}/get-all/directorate`, { headers: this.general.userAuthorization() });
    }

    getDirectorateJobListApproved(){
      return this.http.get<any>(`${this.url}/get-all/directorate-approved`, { headers: this.general.userAuthorization() });
    }
  
  
    showDirectorateJobLists(data:any) {
      return this.http.post<any>(`${this.url}/show-job_lists-info/directorate` ,data, { headers: this.general.userAuthorization() });
    }
  
  
    showDirectorateJobListsGeneralDetails(id:any) {
      return this.http.post<any>(`${this.url}/show-my-job_lists/directorate`, id,{ headers: this.general.userAuthorization() });
    }
  
  
    editDirectorateJobList(data:any) {
      return this.http.post<any>(`${this.url}/edit-job-lists/directorate`, data , { headers: this.general.userAuthorization() });
    }
  
    rejectDirectorateJobList(data:any) {
      return this.http.post<any>(`${this.url}/reject-job_lists/directorate`,data ,  { headers: this.general.userAuthorization() });
    }
  
    
    approveDirectorateJobList(data:any) {
      return this.http.post<any>(`${this.url}/approver-job_lists/directorate`,data ,  { headers: this.general.userAuthorization() });
    }
  

    deleteDirectorateJobList(data:any) {
      return this.http.post<any>(`${this.url}/delete-job_lists/directorate`,data , { headers: this.general.userAuthorization() });
    }
    countAssignedJobLists(){
      return this.http.get<any>(`${this.url}/count-job_lists`, { headers: this.general.userAuthorization() });
    }

    
}
