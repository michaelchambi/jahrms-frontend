import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../../../services/users/users.service';
import { GeneralService } from '../../../../../../services/general/general.service';
import { ScriptConfigService } from '../../../../../../services/script-config/script-config.service'
import { ActivatedRoute, Router } from '@angular/router';
import { PermissionsService } from '../../../../../../services/permissions/permissions.service';
import { environment } from '../../../../../../../environments/environment';
@Component({
  selector: 'app-employee-assignment',
  templateUrl: './employee-assignment.component.html',
  styleUrls: ['./employee-assignment.component.css']
})
export class EmployeeAssignmentComponent {

  user_data={id:''}

  public concatenator='hrm-storage-files/employee/'
  public API_URL = environment.API_URL;

  details: any;
  submoduleId: any;
  showModal: boolean = false;
  values = {
    uid: ''
  }
  new_data={id:''}
  data = {
    uid:'',
    id: '',
    roles: []
  }
  user_id: any;
  constructor(
    public general: GeneralService,
    public users: UsersService,
    public script: ScriptConfigService,
    private route: Router,
    private activeRoute: ActivatedRoute,
    public permission: PermissionsService,
  ) { }


  ngOnInit(): void {
       this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
     
    // this.permission.getRole();
this.user_id=this.general.decryptionId(sessionStorage.getItem('id') as any);
// this.userDetails(this.user_id);

  }

  editRoles() {
    this.data.uid = this.activeRoute.snapshot.paramMap.get('id') as any;

    this.general.bfrcreating = false;
    this.general.creating = true;
    this.permission.changeRoles(this.data).subscribe(
      res => {
        this.general.bfrcreating = true;
        this.general.creating = false;
        this.closeModal()
        this.general.successMessage(res.sw_message, (e: any) => {
          if (e) {
            window.location.reload();
          }

        });
      },
      err => {
        this.general.bfrcreating = true;
        this.general.creating = false;
        this.closeModal()
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

  // userDetails(id: any) {
  //   this.new_data.id = id
  //   // console.log('data received are ', this.data.id)
  //   this.users.getUser(this.new_data).subscribe(
  //     res => {
  //       this.details = res;
  //       this.script.successAlert(res.sw_message)

  //     },
  //     err => {
  //       this.script.errorAlert(err.error.sw_message)
  //       if (err.error.token == 0) {
  //         this.general.encryptUrl(this.route.url);
  //         this.route.navigate(['/restore-session']);
  //       }
  //     }
  //   );
  // }











  closeModal() {
    this.showModal = false;
  }

  openModal() {
    this.showModal = true;
  }






}
