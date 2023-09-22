
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TransferService {


  private url = environment.API_URL + 'transfers';
  private urlreason = environment.API_URL + 'transfer_reason';
  
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


  addTransfer(data:any) {
    return this.http.post<any>(`${this.url}/add-transfer` , data, { headers: this.general.userAuthorization() });
  }
  adminEmployeeTransfer(data:any) {
    return this.http.post<any>(`${this.url}/admini-employee-transfer` , data, { headers: this.general.userAuthorization() });
  }
 

  getTransfers(){
    return this.http.get<any>(`${this.url}/get-all`, { headers: this.general.userAuthorization() });
  }


  countTransfers(){
    return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
  }


  countAssignedTransfers(){
    return this.http.get<any>(`${this.url}/count_assigned`, { headers: this.general.userAuthorization() });
  }

  countUnAssignedTransfers(){
    return this.http.get<any>(`${this.url}/count_unassigned`, { headers: this.general.userAuthorization() });
  }

  showTransfer(data:any) {
    return this.http.post<any>(`${this.url}/show-transfer-info` ,data, { headers: this.general.userAuthorization() });
  }


  showTransfersGeneralDetails(id:any) {
    return this.http.post<any>(`${this.url}/show-my-transfer`, id,{ headers: this.general.userAuthorization() });
  }


  editTransfer(id:any, data:any) {
    return this.http.post<any>(`${this.url}/edittransfer/${id}`, data , { headers: this.general.userAuthorization() });
  }

  rejectTransfer(data:any) {
    return this.http.post<any>(`${this.url}/reject-transfer`,data ,  { headers: this.general.userAuthorization() });
  }

  
  approveTransfer(data:any) {
    return this.http.post<any>(`${this.url}/approve-transfer`,data ,  { headers: this.general.userAuthorization() });
  }

  commentTransferImmedietSuppervisor(data:any) {
    return this.http.post<any>(`${this.url}/comment-transfer`,data ,  { headers: this.general.userAuthorization() });
  }
  deleteTransfer(data:any) {
    return this.http.post<any>(`${this.url}/deletetransfer`,data , { headers: this.general.userAuthorization() });
  }


  // transfer reason
  addTransferReason(data:any) {
    return this.http.post<any>(`${this.urlreason}/addtransfer_reason` , data, { headers: this.general.userAuthorization() });
  }
 

  getTransfersReason(){
    return this.http.get<any>(`${this.urlreason}/`, { headers: this.general.userAuthorization() });
  }


  showTransferReason(data:any) {
    return this.http.post<any>(`${this.urlreason}/show` ,data, { headers: this.general.userAuthorization() });
  }



  editTransferReason(id:any, data:any) {
    return this.http.post<any>(`${this.urlreason}/edittransfer_reason`, data , { headers: this.general.userAuthorization() });
  }

  
  approveTransferReason(data:any) {
    return this.http.post<any>(`${this.urlreason}/activatetransfer_reason`,data ,  { headers: this.general.userAuthorization() });
  }
  deactivateTransferReason(data:any) {
    return this.http.post<any>(`${this.urlreason}/deactivatetransfer_reason`,data ,  { headers: this.general.userAuthorization() });
  }
}
// router.post("/transfer_reason/addtransfer_reason", controller.addtransfer_reason);
// router.get("/transfer_reason/", [authCheck.verifyToken], controller.findAll);
// router.post("/transfer_reason/show", [authCheck.verifyToken], controller.findOne);
// router.post("/transfer_reason/edittransfer_reason", [authCheck.verifyToken], controller.edittransfer_reason);
// router.post("/transfer_reason/activatetransfer_reason", [authCheck.verifyToken], controller.activate);
// router.post("/transfer_reason/deactivatetransfer_reason", [authCheck.verifyToken], controller.deactivate);