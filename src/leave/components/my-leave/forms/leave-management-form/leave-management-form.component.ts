
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general/general.service';
import { LeaveService } from 'src/app/services/leave/leave.service';
import { PermissionsService } from 'src/app/services/permissions/permissions.service';
import { ScriptConfigService } from 'src/app/services/script-config/script-config.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-leave-management-form',
  templateUrl: './leave-management-form.component.html',
  styleUrls: ['./leave-management-form.component.css']
})
export class LeaveManagementFormComponent {


  selectedFile: any;
  created_by: any;
  role_list: any;
  submoduleId: any;
  uid: any;
  user_id: any;
  dataUserId = {
      id:''
  }
  userDetails: any;
  my_leave_List: any;

  module_data: any;

 

  constructor(
    public general: GeneralService,
   
    public users: UsersService,
    public script: ScriptConfigService,
    private route: Router,
    public permission: PermissionsService,
    public leave:LeaveService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.permission.getRole();
    this.uid= sessionStorage.getItem('id')
    this.user_id =this.general.decryption(sessionStorage.getItem('id') as any)
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id');
    this.showUser()
    this.showMyLeave();
  }



  

  showUser() {
    this.dataUserId.id = this.user_id;
    console.log('data zangu mimi niiiiiiiiiiiiiiiii',this.dataUserId);
    this.users.showUserById(this.dataUserId).subscribe(
      res => {
        this.userDetails = res.data;
        this.script.successAlert(res.sw_message)
      },
      err => {
        this.script.errorAlert(err.error.sw_message)
        if (err.error.token == 0) {
          this.general.encryptUrl(this.route.url);
          // this.route.navigate([‘/restore-session’]);
        }
      }
    );
  }


  showMyLeave() {
    // this.dataUserId.id=id
    // console.log('hiiiii ndio tunayo tafuta sanaaaaaaaaaaaaa',this.data.id);
    this.leave.showLeave(this.dataUserId).subscribe(
      res => {
        this.my_leave_List = res;
        console.log('hiiiii ndio tunayo tafuta sanaaaaaaaaaaaaa',this.my_leave_List);
      },
      err => {
        if (err.error.token == 0) {
          sessionStorage.setItem('current_url', this.route.url)
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }
  
  // showLeavesGeneralDetails(id: any) {
  //   this.data.uid = id
  //   this.leave.showLeavesGeneralDetails(this.data).subscribe(
  //     res => {
  //       this.submodule_data = res.data;
  //     },
  //     err => {
  //       if (err.error.token == 0) {
  //         sessionStorage.setItem('current_url', this.route.url)
  //         this.route.navigate(['/restore-session']);
  //       }
  //     }
  //   );
  // }


}
