import { Injectable } from '@angular/core';
import { GeneralService } from '../general/general.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { ScriptConfigService } from '../../services/script-config/script-config.service'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = environment.API_URL + 'users';

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

  addUser(data: any) {
    return this.http.post<any>(`${this.url}/add-user`, data, { headers: this.general.userAuthorization() });
  }

  userList(data: any) {
    return this.http.post<any>(`${this.url}/users-list`, data, { headers: this.general.userAuthorization() });
  }

  getAllUsers() {
    return this.http.get<any>(`${this.url}`,  { headers: this.general.userAuthorization() });
  }

  getAllTotalUsers() {
    return this.http.get<any>(`${this.url}/totalEmployee`,  { headers: this.general.userAuthorization() });
  }

  organizationUsers(data: any) {
    return this.http.post<any>(`${this.url}/institution-users-list`, data, { headers: this.general.userAuthorization() });
  }

  // showUser(data: any) {
  //   return this.http.post<any>(`${this.url}/user/show`, data, { headers: this.general.userAuthorization() });
  // }

  showUser(id:any) {
    return this.http.get<any>(`${this.url}/show/${id}` , { headers: this.general.userAuthorization() });
  }

  editUser(data: any) {
    return this.http.post<any>(`${this.url}/edit-user`, data, { headers: this.general.userAuthorization() });
  }

  activateUser(data: any) {
    return this.http.post<any>(`${this.url}/activate-user`, data, { headers: this.general.userAuthorization() });
  }

  deactivateUser(data: any) {
    return this.http.post<any>(`${this.url}/deactivate-user`, data, { headers: this.general.userAuthorization() });
  }

  myProfile(id: any) {
    return this.http.post<any>(`${this.url}/my-profile`, id, { headers: this.general.userAuthorization() });
  }






  organizationUserList(id: any) {
    this.data.id = id
    this.organizationUsers(this.data).subscribe({
      next: (res: any) => {
        this.users_list = res.data
        this.script.datatable();
      },
      error: (err: any) => {
        this.script.errorAlert(err.error.sw_message);
        if (err.error.token == 0) {
          this.general.encryptUrl(this.route.url);
          this.route.navigate(['/restore-session']);
        }
      }
    }
    )
  }


  userProfile(id: any) {
    this.data.id = id;
    this.myProfile(this.data).subscribe({
      next: (res: any) => {
        this.user_details = res.data;
      },
      error: (err: any) => {
        this.script.errorAlert(err.error.sw_message);
        if (err.error.token == 0) {
          this.general.encryptUrl(this.route.url);
          this.route.navigate(['/restore-session']);
        }
      }
    })
  }

}