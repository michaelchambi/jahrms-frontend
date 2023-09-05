import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'

@Component({
  selector: 'app-add-jot-module-form',
  templateUrl: './add-jot-module-form.component.html',
  styleUrls: ['./add-jot-module-form.component.css']
})
export class AddJotModuleFormComponent implements OnInit {

  data = {
    name: '',
    icon: '',
    display_option:'',
    submodule_item_link:'',
    item_name:''
  }
  submoduleId: any;

  constructor(
    public general: GeneralService,
    public permission: PermissionsService,
    public script: ScriptConfigService,
    private route: Router,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id')
  }
  addModule() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.permission.addModule(this.data).subscribe(
      res => {
        this.general.creating = false;
        this.general.bfrcreating = true;
        this.route.navigate(['/modules/' + this.submoduleId]);
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
