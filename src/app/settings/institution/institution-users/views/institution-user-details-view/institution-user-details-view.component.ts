import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';

import { UsersService } from '../../../../../services/users/users.service';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'
import { ActivatedRoute, Router } from '@angular/router';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';

@Component({
  selector: 'app-institution-user-details-view',
  templateUrl: './institution-user-details-view.component.html',
  styleUrls: ['./institution-user-details-view.component.css']
})
export class InstitutionUserDetailsViewComponent implements OnInit {

  details: any;
  organization: any;
  showModal: boolean = false;
  submoduleId: any;
  values = {
    uid: ''
  }
  data = {
    uid: '',
    roles: []
  }
  user_id: any
  constructor(
    public general: GeneralService,
    
    public users: UsersService,
    public script: ScriptConfigService,
    private route: Router,
    private activeRoute: ActivatedRoute,
    public permission: PermissionsService,
  ) { }



  ngOnInit(): void {
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id2');
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this.userDetails(this.activeRoute.snapshot.paramMap.get('id'));
  
    this.permission.getRole();
  }

  editRoles() {
    this.data.uid = this.activeRoute.snapshot.paramMap.get('id') as any;

    this.general.bfrcreating = false;
    this.general.creating = true;
    this.permission.changeRoles(this.data).subscribe(
      res => {
        this.general.bfrcreating = true;
        this.general.creating = false;
        this.closeModal()
        this.general.successMessage(res.sw_message, (e: any) => {
          if (e) {
            window.location.reload();
          }

        });
      },
      err => {
        this.general.bfrcreating = true;
        this.general.creating = false;
        this.closeModal()
        this.general.errorMessage(err.error.sw_message, (e: any) => {
          if (e) {
            window.location.reload();
          }

        });
        if (err.error.token == 0) {
          sessionStorage.setItem('current_url', this.route.url)
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }

  userDetails(id: any) {
    this.data.uid = id
    this.users.showUser(this.data).subscribe(
      res => {
        this.details = res.data;
        this.organization = res.organization
        this.script.successAlert(res.sw_message)

      },
      err => {
        this.script.errorAlert(err.error.sw_message)
        if (err.error.token == 0) {
          this.general.encryptUrl(this.route.url);
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }



  activate(id: any) {
    this.values.uid = id;
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.users.activateUser(this.data).subscribe(
      res => {
        this.general.bfrcreating = true;
        this.general.creating = false;
        this.closeModal()
        this.general.successMessage(res.sw_message, (e: any) => {
          if (e) {
            window.location.reload();
          }

        });
      },
      err => {
        this.general.bfrcreating = true;
        this.general.creating = false;
        this.closeModal()
        this.general.errorMessage(err.error.sw_message, (e: any) => {
          if (e) {
            window.location.reload();
          }

        });
        if (err.error.token == 0) {
          sessionStorage.setItem('current_url', this.route.url)
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }

  deactivate(id: any) {
    this.values.uid = id;
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.users.deactivateUser(this.data).subscribe(
      res => {
        this.general.bfrcreating = true;
        this.general.creating = false;
        this.closeModal()
        this.general.successMessage(res.sw_message, (e: any) => {
          if (e) {
            window.location.reload();
          }

        });
      },
      err => {
        this.general.bfrcreating = true;
        this.general.creating = false;
        this.closeModal()
        this.general.errorMessage(err.error.sw_message, (e: any) => {
          if (e) {
            window.location.reload();
          }

        });
        if (err.error.token == 0) {
          sessionStorage.setItem('current_url', this.route.url)
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }

  closeModal() {
    this.showModal = false;
  }

  openModal() {
    this.showModal = true;
  }

}
