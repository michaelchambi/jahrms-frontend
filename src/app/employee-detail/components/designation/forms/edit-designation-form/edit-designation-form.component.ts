import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'

@Component({
  selector: 'app-edit-designation-form',
  templateUrl: './edit-designation-form.component.html',
  styleUrls: ['./edit-designation-form.component.css']
})
export class EditDesignationFormComponent {

  data = {
    uid: '',
    name: '',
    icon: ''
  }
  submoduleId: any;

  constructor(
    public general: GeneralService,
    public permission: PermissionsService,
    public script: ScriptConfigService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.showModule(this.activeRoute.snapshot.paramMap.get('id'));
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id2');
  }
  showModule(uid: any) {
    this.data.uid = uid;
    this.permission.showModule(this.data).subscribe(
      res => {
        this.data = res.data
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

  editModule() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.permission.editModule(this.data).subscribe(
      res => {
        this.general.creating = false;
        this.general.bfrcreating = true;
        this.route.navigate(['/jot-setting-modules/' + this.submoduleId]);
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
