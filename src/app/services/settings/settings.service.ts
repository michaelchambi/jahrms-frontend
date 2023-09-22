import { Injectable } from '@angular/core';
import { GeneralService } from '../general/general.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SettingsService {


  private url = environment.API_URL + 'settings';
  private appeal_url = environment.API_URL + 'appeals';
  private complaint_url = environment.API_URL + 'complaints';

  info: any;
  token: any;
  organization_list: any;
  punishment_list: any;
  attachment_list: any;
  requested_list: any;
  requested_complaint_list: any;
  data = {
    uid: ''
  }
  constructor(
    private http: HttpClient,
    private route: Router,
    public general: GeneralService,
  ) { }


  updateInformation(data: any) {
    return this.http.post<any>(`${this.url}/update-instruction`, data, { headers: this.general.userAuthorization() });
  }
  getInofrmation() {
    return this.http.get<any>(`${this.url}/get-instruction`, { headers: this.general.userAuthorization() });
  }

  getOrganization() {
    return this.http.get<any>(`${this.url}/organizations`, { headers: this.general.userAuthorization() });
  }

  showOrganization(id: any) {
    return this.http.get<any>(`${this.url}/organizations/show/${id}`, { headers: this.general.userAuthorization() });
  }

  updateOrganization() {
    return this.http.get<any>(`${this.url}/update-organization`, { headers: this.general.userAuthorization() });
  }

  getPunishment() {
    return this.http.get<any>(`${this.url}/punishment`, { headers: this.general.userAuthorization() });
  }

  showPunishment(id: any) {
    return this.http.get<any>(`${this.url}/punishment/show/${id}`, { headers: this.general.userAuthorization() });
  }


  getAttachmentList() {
    return this.http.get<any>(`${this.url}/attachment-tittles`, { headers: this.general.userAuthorization() });
  }

  getRequestedAttachmentAppeal(data: any) {
    return this.http.post<any>(`${this.appeal_url}/requested-attachments`, data, { headers: this.general.userAuthorization() });
  }

  getRequestedAttachmentComplaint(data: any) {
    return this.http.post<any>(`${this.complaint_url}/requested-attachments`, data, { headers: this.general.userAuthorization() });
  }



  organizationList() {
    this.getOrganization().subscribe(
      res => {
        this.organization_list = res.data;
      },
      err => {
        if (err.error.token == 0) {
          this.general.encryptUrl(this.route.url);
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }

  punishmentList() {
    this.getPunishment().subscribe(
      res => {
        this.punishment_list = res.data;

      },
      err => {
        if (err.error.token == 0) {
          this.general.encryptUrl(this.route.url);
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }

  attachmentList() {
    this.getAttachmentList().subscribe(
      res => {
        this.attachment_list = res.data;

      },
      err => {
        if (err.error.token == 0) {
          this.general.encryptUrl(this.route.url);
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }


  appealRequestedAttachmentsList(id: any) {
    this.data.uid = id
    this.getRequestedAttachmentAppeal(this.data).subscribe(
      res => {
        this.requested_list = res.data;
      },
      err => {
        if (err.error.token == 0) {
          this.general.encryptUrl(this.route.url);
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }

  complaintRequestedAttachmentsList(id: any) {
    this.data.uid = id
    this.getRequestedAttachmentComplaint(this.data).subscribe(
      res => {
        this.requested_complaint_list = res.data;
      },
      err => {
        if (err.error.token == 0) {
          this.general.encryptUrl(this.route.url);
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }




  getInfo() {
    this.getInofrmation().subscribe(
      res => {
        this.info = res.data.instruction
      },
      err => {
        if (err.error.token == 0) {
          sessionStorage.setItem('current_url', this.route.url)
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }
}
