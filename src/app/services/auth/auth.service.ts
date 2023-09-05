import { Injectable } from '@angular/core';
import { GeneralService } from '../general/general.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.API_URL + 'auth';

  token: any;
  encryptedToken: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    public general: GeneralService,
  ) { }

  loggedIn() {
    if (sessionStorage.getItem('token')) {
      this.encryptedToken = sessionStorage.getItem('token');
      this.token = this.general.decryption(this.encryptedToken);
      return true;
    }
    else {
      return false;
    }
  }


  login(data: any) {
    return this.http.post<any>(`${this.url}/signin`, data,);
  }

  forgotPassword(data: any) {
    return this.http.post<any>(`${this.url}/forgot-password`, data);
  }
  changePassword(data: any) {
    return this.http.post<any>(`${this.url}/change-password`, data,);
  }

  registrationExternalUser(data: any) {
    return this.http.post<any>(`${this.url}/external-user/signup`, data);
  }
  registration(data: any) {
    return this.http.post<any>(`${this.url}/signup`, data);
  }

  logOut() {
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('email');
    this.general.bfrcreating = true;
    this.general.creating = false;
    this.router.navigate(['/login']);
  }
}
