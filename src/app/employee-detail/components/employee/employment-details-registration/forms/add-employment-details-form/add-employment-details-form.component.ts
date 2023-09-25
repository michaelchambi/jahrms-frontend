import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../../services/general/general.service';
import { DesignationChangesService } from '../../../../../../services/designation-changes/designation-changes.service';
import { EmploymentInfoService } from '../../../../../../services/employee/employment/employment-info.service';
import { ScriptConfigService } from '../../../../../../services/script-config/script-config.service'
import { Router, ActivatedRoute } from '@angular/router';
import { PermissionsService } from '../../../../../../services/permissions/permissions.service';
import {DesignationsService } from '../../../../../../services/designations/designations.service'
import { UsersService } from '../../../../../../services/users/users.service';

@Component({
  selector: 'app-add-employment-details-form',
  templateUrl: './add-employment-details-form.component.html',
  styleUrls: ['./add-employment-details-form.component.css']
})
export class AddEmploymentDetailsFormComponent {


  selectedFile: any;
  created_by: any;
  role_list: any;
  submoduleId: any;
  uid: any;
  
  data = {
    employee_id:'',
    confirmation_date:'',
    hired_date:'',
    pf_number:'',
    check_number:'',
    hired_latter:'',
    confirmation_letter: '',
    user_id:'',
    designation_id:'',
    personal_folder:'',
    change_designation_id:''
  }
  designationDetails: any;
  selectedHiredLatterFile: any;
  selectedConfirmationLatterFile: any;
  user_id: any;
  userInfo: any;
  userInfoDetails: any;
  designation_chenge_details: any;

  fileHiringUpload(e: any) {
    this.selectedHiredLatterFile = e.target.files[0];
  }

  fileConfirmationUpload(e: any) {
    this.selectedConfirmationLatterFile = e.target.files[0];
  }
 

  constructor(
    public general: GeneralService,
    
    public employmentinfo: EmploymentInfoService,
    public script: ScriptConfigService,
    private route: Router,
    private users:UsersService,
    public designation:DesignationsService,
    public designation_change:DesignationChangesService,
    public permission: PermissionsService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.permission.getRole();
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id2');
    this.user_id=this.activeRoute.snapshot.paramMap.get('id') 
    this.getdesignation()
    this.userDetails(this.user_id) 
    this. getDesignationChange();
  }


  getDesignationChange() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.designation_change.getAllDesignationChange().subscribe(
      res => {
        this.designation_chenge_details = res;
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

  getdesignation() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.designation.getDesignations().subscribe(
      res => {
        this.designationDetails = res;
        this.script.datatable();
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

 
      userDetails(id: any) {
        this.users.showUser(id).subscribe(
          res => {
            this.userInfoDetails = res.data;
    
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
    
  employmentDetails()  {
    this.created_by = sessionStorage.getItem('id')
    this.data.user_id = this.general.decryptionId(this.created_by);
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.data.employee_id=this.userInfoDetails.data.id;
    this.data.personal_folder=this.userInfoDetails.data.personal_folder;
    this.data.hired_latter=this.selectedHiredLatterFile;
    this.data.confirmation_letter=this.selectedConfirmationLatterFile

    let formData = new FormData();
    formData.append('personal_folder', this.data.personal_folder);
    formData.append('user_id', this.data.user_id);
    formData.append('designation_change_id', this.data.change_designation_id);
    formData.append('employee_id', this.data.employee_id);
    formData.append('check_number', this.data.check_number);
    formData.append('pf_number', this.data.pf_number);
    formData.append('hired_date', this.data.hired_date);
    formData.append('confirmation_date', this.data.confirmation_date);
    formData.append('designation_id', this.data.designation_id);
    formData.append('confirmation_letter', this.selectedConfirmationLatterFile);
    formData.append('hired_latter', this.selectedHiredLatterFile);
    this.employmentinfo.addEmploymentInfo(formData).subscribe(
      res => {
        this.uid = res.data;
        this.general.creating = false;
        this.general.bfrcreating = true;
        this.route.navigate(['/user/' + this.user_id+'/'+this.submoduleId ]);
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





}
