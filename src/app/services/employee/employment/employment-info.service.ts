import { Injectable } from '@angular/core';
import { GeneralService } from '../../general/general.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { ScriptConfigService } from '../../../services/script-config/script-config.service'

@Injectable({
  providedIn: 'root'
})
export class EmploymentInfoService {

  private url = environment.API_URL + 'employment-info';

  info: any;
  token: any;
  users_list: any;
  user_details: any;
  data = {
    id: ''
  }
  constructor(
    private http: HttpClient,
    private route: Router,
    public general: GeneralService,
    public script: ScriptConfigService,
  ) { }

  addEmploymentInfo(data: any) {
    return this.http.post<any>(`${this.url}/addEmploymentInfo`, data, { headers: this.general.userAuthorization() });
  }

  userList(data: any) {
    return this.http.post<any>(`${this.url}/EmploymentInfo-list`, data, { headers: this.general.userAuthorization() });
  }

  getAllEmploymentInfos() {
    return this.http.get<any>(`${this.url}`,  { headers: this.general.userAuthorization() });
  }

  getAllTotalEmploymentInfos() {
    return this.http.get<any>(`${this.url}/totalEmployee`,  { headers: this.general.userAuthorization() });
  }

 
  showEmploymentInfo(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}` , { headers: this.general.userAuthorization() });
  }

  editEmploymentInfo(data: any) {
    return this.http.post<any>(`${this.url}/editEmploymentInfo`, data, { headers: this.general.userAuthorization() });
  }

  activateEmploymentInfo(data: any) {
    return this.http.post<any>(`${this.url}/activateEmploymentInfo`, data, { headers: this.general.userAuthorization() });
  }

  deactivateEmploymentInfo(data: any) {
    return this.http.post<any>(`${this.url}/deactivateEmploymentInfo`, data, { headers: this.general.userAuthorization() });
  }

}