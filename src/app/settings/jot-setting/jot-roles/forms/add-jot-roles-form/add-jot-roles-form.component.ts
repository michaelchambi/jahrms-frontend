import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'

@Component({
  selector: 'app-add-jot-roles-form',
  templateUrl: './add-jot-roles-form.component.html',
  styleUrls: ['./add-jot-roles-form.component.css']
})
export class AddJotRolesFormComponent implements OnInit {

  submoduleId: any;
  data = {
    name: '',
    modal_name: ''
  }
  constructor(
    public general: GeneralService,
    public permission: PermissionsService,
    public script: ScriptConfigService,
    private activeRoute: ActivatedRoute,
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id');
  }
  addRole() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.permission.addRoles(this.data).subscribe(
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
