import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'
import { LeaveService } from '../../../../..//services/leave/leave.service';

@Component({
  selector: 'app-view-my-leave',
  templateUrl: './view-my-leave.component.html',
  styleUrls: ['./view-my-leave.component.css']
})
export class ViewMyLeaveComponent implements OnInit {
  moduleList: any;
  my_leave_List: any;
  submoduleId: any;
  module_id: any;
  submoduleList: any;
  submodule_data: any;
  module_data: any;
  user_id: any;
  data = {
    uid: '',
    id:''
  }

  constructor(
    public general: GeneralService,
    public permission: PermissionsService,
    public script: ScriptConfigService,
    private route: Router,
    private leave:LeaveService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.user_id =this.general.decryption(sessionStorage.getItem('id') as any)
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id');
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this.showMyLeave();
  }

  showMyLeave() {
    this.data.id=this.user_id
    this.leave.showLeave(this.data).subscribe(
      res => {
        this.my_leave_List = res.data;
      },
      err => {
        if (err.error.token == 0) {
          sessionStorage.setItem('current_url', this.route.url)
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }
  
  showLeavesGeneralDetails(id: any) {
    this.data.uid = id
    this.leave.showLeavesGeneralDetails(this.data).subscribe(
      res => {
        this.submodule_data = res.data;
      },
      err => {
        if (err.error.token == 0) {
          sessionStorage.setItem('current_url', this.route.url)
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }
  showSubModule(id: any) {
    this.data.uid = id
    this.permission.showSubModule(this.data).subscribe(
      res => {
        this.submodule_data = res.data;
      },
      err => {
        if (err.error.token == 0) {
          sessionStorage.setItem('current_url', this.route.url)
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }
  
  
}
