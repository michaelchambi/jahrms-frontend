import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'

@Component({
  selector: 'app-add-submodule-item-form',
  templateUrl: './add-submodule-item-form.component.html',
  styleUrls: ['./add-submodule-item-form.component.css']
})
export class AddSubmoduleItemFormComponent {



  module_id: any
  submoduleId: any;
  module = {
    uid: ''
  }
  // const name = req.body.name;
	// const link = req.body.link;
	// const id = req.body.submodule_id;
  data = {
    submodule_id: '',
    link:'',
    name:''
  }
  submoduleDetails: any;

  constructor(
    public general: GeneralService,
    public permission: PermissionsService,
    public script: ScriptConfigService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.singleOption();
    this.module_id = this.activeRoute.snapshot.paramMap.get('id')
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id2')
    this.showSubModule();
  }

  showSubModule() {
 
    this.permission.getEmbededSubModules().subscribe(
      res => {
        this.submoduleDetails= res;
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

  addSubmoduleItem() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.permission.addSubModuleItem(this.data).subscribe(
      res => {
        this.general.creating = false;
        this.general.bfrcreating = true;
        this.route.navigate(['/submodule-item/' + this.module_id ]);
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
