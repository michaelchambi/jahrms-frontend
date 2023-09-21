
import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'
import { DependantTypeService } from '../../../../../services/dependant-type/dependant-type.service';
import { AttachmentService} from '../../../../../services/attachment/attachment.service';
@Component({
  selector: 'app-add-dependant-type-form',
  templateUrl: './add-dependant-type-form.component.html',
  styleUrls: ['./add-dependant-type-form.component.css']
})
export class AddDependantTypeFormComponent {

 
  
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
  
    dependant_type_details={description:'',dependant_type_name:'',user_id:'',  attachment_id:[],}
    submoduleId: any;
    my_id: any;
  attachmentList: any;
  
    constructor(
      public general: GeneralService,
      public permission: PermissionsService,
      public script: ScriptConfigService,
      private activeRoute: ActivatedRoute,
      private router: Router,
      public attachment: AttachmentService ,
      private dependant_type:DependantTypeService
    ) { }
  
    ngOnInit(): void {
      this.submoduleId = this.activeRoute.snapshot.paramMap.get('id')
      this.id= sessionStorage.getItem("id");
      this.getattachment() ;
      
    }
  
    fileUpload(e: any) {
      this.selectedFile = e.target.files[0];
    }
  
    registerDependantType() {
      this.bfrcreating = false;
      this.creating = true;
      let formData = new FormData();
      this.my_id=this.general.decryptionId(this.id);
      this.dependant_type_details.user_id=this.my_id;
      // formData.append('dependant_description', this.dependant_type_details.description);
      // formData.append('name', this.dependant_type_details.dependant_type_name);
      // formData.append('user_id', this.dependant_type_details.user_id);
      this.dependant_type.addDependantType(this.dependant_type_details).subscribe(
        res => {
          this.appSuccess = true;
          this.successMessage = res.message;
          this.router.navigate(['/dependant-types/' + this.submoduleId]);
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
  

     getattachment() {
      this.general.bfrcreating = false;
      this.general.creating = true;
      this.attachment.getAttachments().subscribe(
        res => {
          this.attachmentList = res;
          this.general.creating = false;
          this.general.bfrcreating = true;
        },
        err => {
          
          this.general.creating = false;
          this.general.bfrcreating = true;
          this.script.errorAlert(err.error.sw_message);
          if (err.error.token == 0) {
            this.general.encryptUrl(this.router.url);
            this.router.navigate(['/restore-session']);
          }
        }
      );
    }
  
  }
  
  
  
  