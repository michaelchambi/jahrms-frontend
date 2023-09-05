import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-jot-users-layout',
  templateUrl: './add-jot-users-layout.component.html',
  styleUrls: ['./add-jot-users-layout.component.css']
})
export class AddJotUsersLayoutComponent implements OnInit {

  
data={id:''}
  submoduleId: any;
  submoduleItemList: any;
  constructor(
    private activeRoute: ActivatedRoute,
    public permission: PermissionsService,
    private route: Router,
    public script:ScriptConfigService,
    public general: GeneralService,
  ) { }

  ngOnInit(): void {
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id')
    this.showSubModuleItem( this.submoduleId )
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
  }





  showSubModuleItem(id:any) {
    this.data.id=id;
    this.permission.showSubModuleItemList(this.data).subscribe(
      res => {
        this.submoduleItemList = res.data;
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

}
