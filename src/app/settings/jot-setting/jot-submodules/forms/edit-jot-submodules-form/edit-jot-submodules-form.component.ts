import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'

@Component({
  selector: 'app-edit-jot-submodules-form',
  templateUrl: './edit-jot-submodules-form.component.html',
  styleUrls: ['./edit-jot-submodules-form.component.css']
})
export class EditJotSubmodulesFormComponent implements OnInit {

  module_uid: any;
  submoduleId: any;
  data = {
    uid: '',
    name: '',
    icon: '',
    link: ''
  }

  constructor(
    public general: GeneralService,
    public permission: PermissionsService,
    public script: ScriptConfigService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.showSubmodule(this.activeRoute.snapshot.paramMap.get('id'));
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id2');
  }

  showSubmodule(uid: any) {
    this.data.uid = uid;
    this.permission.showSubModule(this.data).subscribe(
      res => {
        this.data = res.data
        this.module_uid = res.data.app_module.uid;
      },
      err => {
        this.script.errorAlert(err.error.sw_message);
        if (err.error.token == 0) {
          this.general.encryptUrl(this.route.url);
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }

  editSubmodule() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.permission.editSubModule(this.data).subscribe(
      res => {
        this.general.creating = false;
        this.general.bfrcreating = true;
        this.route.navigate(['/jot-setting-submodules/' + this.module_uid + '/' + this.submoduleId]);
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
