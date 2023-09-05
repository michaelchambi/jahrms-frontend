import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'

@Component({
  selector: 'app-edit-jot-roles-form',
  templateUrl: './edit-jot-roles-form.component.html',
  styleUrls: ['./edit-jot-roles-form.component.css']
})
export class EditJotRolesFormComponent implements OnInit {

  submoduleId: any;
  data = {
    id: '',
    name: '',
    modal_name: ''
  }
  constructor(
    public general: GeneralService,
    public permission: PermissionsService,
    public script: ScriptConfigService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.showRole(this.activeRoute.snapshot.paramMap.get('id'));
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id2');
  }
  showRole(id: any) {
    this.data.id = id;
    this.permission.showRoles(this.data).subscribe(
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

  editRole() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.permission.editRoles(this.data).subscribe(
      res => {
        this.general.creating = false;
        this.general.bfrcreating = true;
        this.route.navigate(['/jot-setting-roles/' + this.submoduleId]);
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
