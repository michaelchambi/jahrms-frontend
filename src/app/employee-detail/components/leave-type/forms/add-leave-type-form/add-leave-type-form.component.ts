
import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'
import { LeaveTypeService } from '../../../../../services/leave/leaveType.service';

@Component({
  selector: 'app-add-leave-type-form',
  templateUrl: './add-leave-type-form.component.html',
  styleUrls: ['./add-leave-type-form.component.css']
})
export class AddLeaveTypeFormComponent {

  
    selectedFile: any;
    sub_moduleId:any;
    messageError: any;
    id: any;
    successMessage: any;
    errorMessage: any;
    appError: boolean = false;
    appSuccess: boolean = false;
    addUserError: boolean = false;
    addUserSuccess: boolean = false;
    bfrcreating: boolean = true;
    creating: boolean = false;
  
    leave_type_data={leave_description:'',leave_type_name:'',user_id:''}
    submoduleId: any;
    my_id: any;
  
    constructor(
      public general: GeneralService,
      public permission: PermissionsService,
      public script: ScriptConfigService,
      private activeRoute: ActivatedRoute,
      private router: Router,
      private leave_type: LeaveTypeService
    ) { }
  
    ngOnInit(): void {
      this.submoduleId = this.activeRoute.snapshot.paramMap.get('id')
      this.id= sessionStorage.getItem("id");
      
    }
  
    fileUpload(e: any) {
      this.selectedFile = e.target.files[0];
    }



  
    registerLeaveType() {
      this.bfrcreating = false;
      this.creating = true;
      let formData = new FormData();
      this.my_id=this.general.decryptionId(this.id);
      this.leave_type_data.user_id=this.my_id;
      formData.append('leave_description', this.leave_type_data.leave_description);
      formData.append('name', this.leave_type_data.leave_type_name);
      formData.append('user_id', this.leave_type_data.user_id);
      this.leave_type.addLeaveType(this.leave_type_data).subscribe(
        res => {
          this.appSuccess = true;
          this.successMessage = res.message;
          this.router.navigate(['/leave-type/' + this.submoduleId]);
          this.general.bfrcreating = true;
          this.general.creating = false;
          this.general.successMessage(res.sw_message, (e: any) => {
            if (e) {
              window.location.reload();
            }
  
          });
  
        },
  
        err => {
          this.appError = true;
          this.bfrcreating = true;
          this.creating = false;
          this.messageError = err.error.message;
          this.general.errorMessage(err.error.sw_message, (e: any) => {
            if (e) {
              window.location.reload();
            }
  
          });
         
          if (err.error.token == 0) {
            localStorage.setItem('token', err.error.token);
          }
        }
      );
  
  
     }
  
  
  }
  
  
  
  