import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneralService } from '../../general/general.service';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BankInfoService {


  private url = environment.API_URL + 'bank-info';
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


  addBankInfo(data:any) {
    return this.http.post<any>(`${this.url}/addBankInfo` , data, { headers: this.general.userAuthorization() });
  }
  getBankInfos(){
    return this.http.get<any>(`${this.url}`, { headers: this.general.userAuthorization() });
  }
  countBankInfos(){
    return this.http.get<any>(`${this.url}/count_received`, { headers: this.general.userAuthorization() });
  }
  showBankInfo(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}`,{ headers: this.general.userAuthorization() });
  }

  editBankInfo(id:any, data:any) {
    return this.http.post<any>(`${this.url}/editBankInfo/${id}`, data , { headers: this.general.userAuthorization() });
  }

  deactivateBankInfo(id:any) {
    return this.http.post<any>(`${this.url}/deactivateBankInfo`,id ,  { headers: this.general.userAuthorization() });
  }


  
  activateBankInfo(id:any) {
    return this.http.post<any>(`${this.url}/activateBankInfo`,id ,  { headers: this.general.userAuthorization() });
  }

  deleteBankInfo(id:any) {
    return this.http.post<any>(`${this.url}/deleteBankInfo`,id , { headers: this.general.userAuthorization() });
  }
}
