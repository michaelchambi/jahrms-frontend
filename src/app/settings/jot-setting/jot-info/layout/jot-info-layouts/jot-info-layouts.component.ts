import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { SettingsService } from '../../../../../services/settings/settings.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-jot-info-layout',
  templateUrl: './jot-info-layouts.component.html',
  styleUrls: ['./jot-info-layouts.component.css']
})
export class JotInfoLayoutsComponent implements OnInit {

  fill_form: boolean = true;
  success: boolean = false;
  error: boolean = false;
  close: boolean = false;
  information: any;
  showModal: boolean = false;

  data = {
    info: ''
  }
  constructor(
    public general: GeneralService,
    public settings: SettingsService,
    private route: Router,
    public permission: PermissionsService,
  ) { }

  ngOnInit(): void {
    this.getInfo()
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
  }

  getInfo() {
    this.settings.getInofrmation().subscribe(
      res => {
        this.data.info = res.data.instruction;
      },
      err => {
        if (err.error.token == 0) {
          this.general.encryptUrl(this.route.url);
          this.route.navigate(['/restore-session']);
        }
      }
    )

  }

  editInfo() {
    this.general.bfrcreating = false;
    this.general.creating = true;

    if (this.data.info == "") {
      this.general.bfrcreating = true;
      this.general.creating = false;
      this.fill_form = false;
      this.success = false;
      this.error = true;
      this.close = true;
      this.general.sw_message = "Hakuna kilicho andikwa"
      this.closeModal()
      this.general.errorMessage(this.general.sw_message, (e: any) => {
        if (e) {
          window.location.reload();
        }

      });
    }

    else {
      this.settings.updateInformation(this.data).subscribe(
        res => {
          this.general.bfrcreating = true;
          this.general.creating = false;
          this.error = false;
          this.fill_form = false;
          this.success = true;
          this.close = true;
          this.general.sw_message = res.sw_message;
          this.closeModal()
          this.general.successMessage(this.general.sw_message, (e: any) => {
            if (e) {
              window.location.reload();
            }

          });
        },
        err => {
          this.general.bfrcreating = true;
          this.general.creating = false;
          this.success = false;
          this.fill_form = false;
          this.error = true;
          this.close = true;
          this.general.sw_message = err.sw_message;
          this.closeModal()
          this.general.errorMessage(this.general.sw_message, (e: any) => {
            if (e) {
              window.location.reload();
            }

          });
          if (err.error.token == 0) {
            this.general.encryptUrl(this.route.url);
            this.route.navigate(['/restore-session']);
          }
        }
      )
    }

  }

  closeModal() {
    this.showModal = false;
  }

  openModal() {
    this.showModal = true;
  }




}
