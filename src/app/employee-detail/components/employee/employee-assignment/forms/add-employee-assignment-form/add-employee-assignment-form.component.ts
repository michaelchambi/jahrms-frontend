import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../../services/general/general.service';

import { UsersService } from '../../../../../../services/users/users.service';
import { ScriptConfigService } from '../../../../../../services/script-config/script-config.service'
import { Router, ActivatedRoute } from '@angular/router';
import {DesignationsService } from '../../../../../../services/designations/designations.service'
import { PermissionsService } from '../../../../../../services/permissions/permissions.service';

@Component({
  selector: 'app-add-employee-assignment-form',
  templateUrl: './add-employee-assignment-form.component.html',
  styleUrls: ['./add-employee-assignment-form.component.css']
})
export class AddEmployeeAssignmentFormComponent {

  created_by: any;
  role_list: any;
  submoduleId: any;
  details: any;
  uid: any;
  data = {
  user_id:'',
    roles:[],
    created_by:'',
    employee_name:'',
    employee_email:'',
    employee_uid:'',
    employee_id:''

  }
  role_user_data={user_id:'',roles:[],designation_id:'',}
  regionDetails: any;
  districtDetails: any;
  designationDetails: any;
  user_id: any;


  constructor(
    public general: GeneralService,
    
    public users: UsersService,
    public script: ScriptConfigService,
    private route: Router,
    private designation:DesignationsService,
    public permission: PermissionsService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.permission.getRole();
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id2');
     this.getdesignation();
     this.user_id=this.activeRoute.snapshot.paramMap.get('id');
this.userDetails(this.user_id);
  }

  getdesignation() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.designation.getDesignations().subscribe(
      res => {
        this.designationDetails = res;
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


  userRegistration(employee_email:any,employee_name:any,employee_uid:any,employee_id:any) {
    this.created_by = sessionStorage.getItem('id')
    this.data.created_by = this.general.decryptionId(this.created_by);
    this.general.bfrcreating = false;
    this.general.creating = true;
    // this.data.designation_id=designation_id;
    this.data.employee_email=employee_email;
    this.data.employee_name=employee_name;
    this.data.employee_uid=employee_uid;
    this.data.user_id=  this.data.created_by ;
    this.data.employee_id=employee_id;
    // let formData = new FormData();

    this.users.addUserRoles(this.data).subscribe(
      res => {
        this.uid = res.data;
        this.general.creating = false;
        this.general.bfrcreating = true;
        this.route.navigate(['/user/' +this.user_id+'/'+ this.submoduleId ]);
        // this.script.successAlert(res.sw_message);
        this.general.successMessage(res.sw_message, (e: any) => {
          if (e) {
            window.location.reload();
          }

        });

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

    userDetails(id: any) {
    
      this.users.showUser(id).subscribe(
        res => {
          this.details = res.data;
          // this.script.successAlert(res.sw_message)
  
        },
        err => {
          this.script.errorAlert(err.error.sw_message)
          if (err.error.token == 0) {
            this.general.encryptUrl(this.route.url);
            this.route.navigate(['/restore-session']);
          }
        }
      );
    }
  }