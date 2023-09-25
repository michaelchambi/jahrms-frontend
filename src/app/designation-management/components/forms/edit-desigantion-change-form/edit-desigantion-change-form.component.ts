

import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { GeneralService } from '../../../../services/general/general.service';
import { SettingsService } from '../../../../services/settings/settings.service';
import { UsersService } from '../../../../services/users/users.service';
import { ScriptConfigService } from '../../../../services/script-config/script-config.service'
import { Router, ActivatedRoute } from '@angular/router';
import { PermissionsService } from '../../../../services/permissions/permissions.service';
import { DesignationChangesService } from '../../../../services/designation-changes/designation-changes.service';


@Component({
  selector: 'app-edit-desigantion-change-form',
  templateUrl: './edit-desigantion-change-form.component.html',
  styleUrls: ['./edit-desigantion-change-form.component.css']
})
export class EditDesigantionChangeFormComponent {

  created_by: any;
  role_list: any;
  submoduleId: any;
  uid: any;
  user_id: any;
  designation_change_data = {
    change_designation_reason_name: '',
    change_designation_reason_abbreviation: '',
    created_by: '',
    id: '',
    uid: '',
  }
  designation_change_details: any;



  constructor(
    public general: GeneralService,
    //
    public users: UsersService,
    public script: ScriptConfigService,
    private route: Router,
    public permission: PermissionsService,
    public disignation_change: DesignationChangesService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.permission.getRole();
    this.uid = sessionStorage.getItem('id')
    this.user_id = this.general.decryption(sessionStorage.getItem('id') as any)
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id');
    this.showDesignationChange()
  }
  showDesignationChange() {
    this.designation_change_data.uid = this.submoduleId
    this.disignation_change.showDesignationChange(this.designation_change_data).subscribe(
      res => {
        this.designation_change_details = res;
        console.log('main return',res);
        
        this.script.successAlert(res.sw_message)
      },
      err => {
        this.script.errorAlert(err.error.sw_message)
        if (err.error.token == 0) {
          this.general.encryptUrl(this.route.url);
        }
      }
    );
  }
  editDesignationChange() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.disignation_change.editDesignationChange(this.designation_change_details).subscribe(
      res => {
        this.general.creating = false;
        this.general.bfrcreating = true;
        this.route.navigate(['/view-designation-change/' + this.uid]);
        this.script.successAlert(res.sw_message);
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



}
