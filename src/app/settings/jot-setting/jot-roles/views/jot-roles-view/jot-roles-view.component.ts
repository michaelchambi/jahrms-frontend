import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'

@Component({
  selector: 'app-jot-roles-view',
  templateUrl: './jot-roles-view.component.html',
  styleUrls: ['./jot-roles-view.component.css']
})
export class JotRolesViewComponent implements OnInit {

  roleList: any;
  role_data: any;
  submoduleId: any;
  data = {
    id: ''
  }
  constructor(
    public general: GeneralService,
    public permission: PermissionsService,
    public script: ScriptConfigService,
    private activeRoute: ActivatedRoute,
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.getRoles();
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id');
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
  }

  getRoles() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.permission.getRoles().subscribe(
      res => {
        this.roleList = res.data;
        this.script.datatable();
        this.general.creating = false;
        this.general.bfrcreating = true;
      },
      err => {
        this.general.creating = false;
        this.general.bfrcreating = true;
        this.script.errorAlert(err.error.sw_message);
        if (err.error.token == 0) {
          this.general.encryptUrl(this.route.url);
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }

  showRole(id: any) {
    this.data.id = id
    this.permission.showRoles(this.data).subscribe(
      res => {
        this.role_data = res.data;
      },
      err => {
        if (err.error.token == 0) {
          sessionStorage.setItem('current_url', this.route.url)
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }


  activate(id: any) {
    this.data.id = id;
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.permission.activateRoles(this.data).subscribe(
      res => {
        this.general.bfrcreating = true;
        this.general.creating = false;
        this.general.successMessage(res.sw_message, (e: any) => {
          if (e) {
            window.location.reload();
          }

        });
      },
      err => {
        this.general.bfrcreating = true;
        this.general.creating = false;
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
    this.data.id = id;
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.permission.deactivateRoles(this.data).subscribe(
      res => {
        this.general.bfrcreating = true;
        this.general.creating = false;
        this.general.successMessage(res.sw_message, (e: any) => {
          if (e) {
            window.location.reload();
          }

        });
      },
      err => {
        this.general.bfrcreating = true;
        this.general.creating = false;
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




}
