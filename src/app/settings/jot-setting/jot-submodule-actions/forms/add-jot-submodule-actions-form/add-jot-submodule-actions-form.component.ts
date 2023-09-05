import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'

@Component({
  selector: 'app-add-jot-submodule-actions-form',
  templateUrl: './add-jot-submodule-actions-form.component.html',
  styleUrls: ['./add-jot-submodule-actions-form.component.css']
})
export class AddJotSubmoduleActionsFormComponent implements OnInit {

  id: any;
  submoduleId: any;
  data = {
    name: '',
    sub_module_id: ''
  }

  submodule = {
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
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id2');
    this.showSubmodule(this.activeRoute.snapshot.paramMap.get('id'));
  }

  showSubmodule(uid: any) {
    this.submodule.uid = uid;
    this.permission.showSubModule(this.submodule).subscribe(
      res => {
        this.data.sub_module_id = res.data.id;
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


  addAction() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.permission.addAction(this.data).subscribe(
      res => {
        this.general.creating = false;
        this.general.bfrcreating = true;
        this.route.navigate(['/jot-setting-sub-modules-action/' + this.id + '/' + this.submoduleId]);
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
