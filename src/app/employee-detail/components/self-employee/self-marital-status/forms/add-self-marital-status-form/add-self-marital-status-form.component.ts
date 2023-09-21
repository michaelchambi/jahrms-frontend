
import { Component , OnInit} from '@angular/core';
import { GeneralService } from '../../../../../../services/general/general.service';

import { UsersService } from '../../../../../../services/users/users.service';
import { ScriptConfigService } from '../../../../../../services/script-config/script-config.service'
import { Router, ActivatedRoute } from '@angular/router';
import { AttachmentService } from '../../../../../../services/attachment/attachment.service';
import {DesignationsService } from '../../../../../../services/designations/designations.service'
 import { MaritalStatusService } from '../../../../../../services/marital-status/marital-status.service';
import { PermissionsService } from '../../../../../../services/permissions/permissions.service';

@Component({
  selector: 'app-add-self-marital-status-form',
  templateUrl: './add-self-marital-status-form.component.html',
  styleUrls: ['./add-self-marital-status-form.component.css']
})
export class AddSelfMaritalStatusFormComponent {

  selectedBirthCertificateFile:any;
  selectedMarriageCertificateFile:any;
  selectedPassport_imageFile :any;
  created_by: any;
  role_list: any;
  submoduleId: any;
  is_married:boolean=false;
  is_single:boolean=false;
  is_divorced:boolean=false;
user_id:any;
  uid: any;
  data = {
    marriage_status:'',
    spouse_name:'',
    marriage_date:'',
    employee_id:'',
    created_by: '',
    proof_attachment:'',
    attachment_id:''
  }
  role_user_data={user_id:'',roles:[],designation_id:'',}
  regionDetails: any;
  districtDetails: any;
  maritalStatusDetails: any;
  attachmentDetails: any;
  my_id: any;
 marital_status_req_data={id:'',approver_id:''}
 

  constructor(
    public general: GeneralService,
    
    public users: UsersService,
    public script: ScriptConfigService,
    private route: Router,
    private attachment:AttachmentService,
    private marital_status:MaritalStatusService,
    private designation:DesignationsService,
    public permission: PermissionsService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.permission.getRole();
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id2');
    this.user_id=this.activeRoute.snapshot.paramMap.get('id');
    this.my_id=this.general.decryption(this.user_id as any)
    // this.getMaritalStatus(this.my_id);
    this.getAttachment();
  }

  getMaritalStatus(id:any) {
    this.marital_status_req_data.id=id;
    // this.marital_status_req_data.approver_id=
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.marital_status.getMaritalStatus(this.marital_status_req_data.id).subscribe(
      res => {
        this.maritalStatusDetails = res;
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

  getAttachment() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.attachment.getAttachments().subscribe(
      res => {
        this.attachmentDetails = res;
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


  fileBirthCertificateUpload(e: any) {
    this.selectedBirthCertificateFile = e.target.files[0];
  }

  filePassportImageUpload(e: any) {
    this.selectedPassport_imageFile = e.target.files[0];
  }
  addMaritalStatus() {
    this.created_by = sessionStorage.getItem('id')
    this.data.created_by = this.general.decryptionId(this.created_by);
    this.general.bfrcreating = false;
    this.general.creating = true;
    let formData = new FormData();
    formData.append('status_name', this.data.marriage_status);
    formData.append('proof_attachment', this.selectedPassport_imageFile);
    formData.append('created_by', this.data.created_by);
    formData.append('spouse_name', this.data.spouse_name);
    formData.append('employee_id',this.data.created_by);
    formData.append('marriage_date', this.data.marriage_date);
    this.marital_status.addMaritalStatus(formData).subscribe(
      res => {
        this.uid = res.data;
        this.general.creating = false;
        this.general.bfrcreating = true;
        this.route.navigate(['/user/' +this.user_id+'/'+ this.submoduleId ]);
        this.script.successAlert(res.sw_message);
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

statusSingle(){
  this.is_divorced=false;
  this.is_single=true;
  this.is_married=false;
}
statusMarried(){
  this.is_married=true;
  this.is_divorced=false;
  this.is_single=false;
  
}

statusDivorced(){
  this.is_divorced=true;
  this.is_single=false;
  this.is_married=false;
}








  






}
