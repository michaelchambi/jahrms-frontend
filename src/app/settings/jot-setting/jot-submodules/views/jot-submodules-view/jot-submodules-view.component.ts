import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'
@Component({
  selector: 'app-jot-submodules-view',
  templateUrl: './jot-submodules-view.component.html',
  styleUrls: ['./jot-submodules-view.component.css']
})
export class JotSubmodulesViewComponent implements OnInit {

  module_id: any;
  submoduleId: any;
  submoduleList: any;
  submodule_data: any;
  data = {
    uid: ''
  }
  values = {
    uid: ''
  }
  constructor(
    public general: GeneralService,
    public permission: PermissionsService,
    public script: ScriptConfigService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this.module_id = this.activeRoute.snapshot.paramMap.get('id');
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id2');
    this.getSubModule(this.activeRoute.snapshot.paramMap.get('id'));
  }

  getSubModule(id: any) {
    this.values.uid = id;
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.permission.showModule(this.values).subscribe(
      res => {
        this.submoduleList = res.data.app_sub_modules;
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

  showSubModule(id: any) {
    this.data.uid = id
    this.permission.showSubModule(this.data).subscribe(
      res => {
        this.submodule_data = res.data;
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
    this.data.uid = id;
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.permission.activateSubModule(this.data).subscribe(
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
    this.data.uid = id;
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.permission.deactivateSubModule(this.data).subscribe(
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
