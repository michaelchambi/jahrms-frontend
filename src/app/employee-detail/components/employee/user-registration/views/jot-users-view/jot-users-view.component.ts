import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../../services/general/general.service';

import { UsersService } from '../../../../../../services/users/users.service';
import { ScriptConfigService } from '../../../../../../services/script-config/script-config.service'
import { Router, ActivatedRoute } from '@angular/router';
import { PermissionsService } from '../../../../../../services/permissions/permissions.service';

@Component({
  selector: 'app-jot-users-view',
  templateUrl: './jot-users-view.component.html',
  styleUrls: ['./jot-users-view.component.css']
})
export class JotUsersViewComponent implements OnInit {

  tableId: any;
  userList: any;
  showModal: boolean = false;
  submoduleId: any;
  user_deta={id:''}
  user_data:any;
  data = {
    organization_code: '',
    remove_reason: ''
  }
  my_data={uid:''}

  response: boolean = false;
  user_id: any;
  submodule_access: any;
  this_data={user_id:''} 
  session_id: any;
  userDetails: any;
  constructor(
    public general: GeneralService,
    
    public users: UsersService,
    public script: ScriptConfigService,
    private route: Router,
    public permission: PermissionsService,
    private activeRoute: ActivatedRoute
  ) { }


  ngOnInit(): void {
   
    // this.getUsers()
    this.permission.module_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this.permission.submodule_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id');
    this.user_id=sessionStorage.getItem('id')
    this.showUser(this.user_id);
    this.getEmployee();
    // this.checkFind(this.user_id)
  }

  deactivateUser() {

  }

  getEmployee() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.users.getAllUsers().subscribe(
      res => {
        this.userDetails = res;
        // this.script.datatable();
        this.general.creating = false;
        this.general.bfrcreating = true;
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




  showUser(id: any) {
    this.users.showUser(id).subscribe(
      res => {
        this.user_data = res;
      },
      err => {
        if (err.error.token == 0) {
          sessionStorage.setItem('current_url', this.route.url)
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }



  activate(id: any) {
    this.my_data.uid = id;
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.users.activateUser(this.my_data).subscribe(
      res => {
        this.general.bfrcreating = true;
        this.general.creating = false;
        this.general.successMessage(res.sw_message, (e: any) => {
          if (e) {
            window.location.reload();
          }

        });
      },
      err => {
        this.general.bfrcreating = true;
        this.general.creating = false;
        this.general.errorMessage(err.error.sw_message, (e: any) => {
          if (e) {
            window.location.reload();
          }

        });
        if (err.error.token == 0) {
          sessionStorage.setItem('current_url', this.route.url)
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }



  deactivate(id: any) {
    this.my_data.uid = id;
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.users.deactivateUser(this.my_data).subscribe(
      res => {
        this.general.bfrcreating = true;
        this.general.creating = false;
        this.general.successMessage(res.sw_message, (e: any) => {
          if (e) {
            window.location.reload();
          }

        });
      },
      err => {
        this.general.bfrcreating = true;
        this.general.creating = false;
        this.general.errorMessage(err.error.sw_message, (e: any) => {
          if (e) {
            window.location.reload();
          }

        });
        if (err.error.token == 0) {
          sessionStorage.setItem('current_url', this.route.url)
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }


  closeModal() {
    this.showModal = false;

  }

  openModal() {
    this.showModal = true;
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}
