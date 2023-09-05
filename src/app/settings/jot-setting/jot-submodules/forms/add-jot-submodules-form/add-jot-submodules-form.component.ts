import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'

@Component({
  selector: 'app-add-jot-submodules-form',
  templateUrl: './add-jot-submodules-form.component.html',
  styleUrls: ['./add-jot-submodules-form.component.css']
})
export class AddJotSubmodulesFormComponent implements OnInit {
// single_view:boolean=true;
// multiple_view:boolean=false;
  module_id: any
  submoduleId: any;
  module = {
    uid: ''
  }
  data = {
    name: '',
    icon: '',
    link: '',
    module_id: '',
    display_option:'',
  }

  constructor(
    public general: GeneralService,
    public permission: PermissionsService,
    public script: ScriptConfigService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
   
    this.module_id =this.activeRoute.snapshot.paramMap.get('id') ;
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id2')
    this.showModule(this.activeRoute.snapshot.paramMap.get('id'));
  }

  showModule(uid: any) {
    this.module.uid = uid;
    this.permission.showModule(this.module).subscribe(
      res => {
        this.data.module_id = res.data.id;
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

  addSubmodule() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.permission.addSubModule(this.data).subscribe(
      res => {
        this.general.creating = false;
        this.general.bfrcreating = true;
        this.route.navigate(['/jot-setting-submodules/' + this.module_id + '/' + this.submoduleId]);
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


// multipleOption(){
//   this.single_view=false;
//   this.multiple_view=true;
// }
// singleOption(){
//   this.single_view=true;
//   this.multiple_view=false;
// }

}
