import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'
import { DesignationsService} from '../../../../../services/designations/designations.service';
import { CadreService} from '../../../../../services/cadre/cadre.service';

@Component({
  selector: 'app-add-designation-form',
  templateUrl: './add-designation-form.component.html',
  styleUrls: ['./add-designation-form.component.css']
})
export class AddDesignationFormComponent {

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
  
    designation_data={cadre_id:'',designation_abbreviation:'',designation:'',user_id:'',description:''}
    submoduleId: any;
    my_id: any;
    cadreDetails: any;
  
    constructor(
      public general: GeneralService,
      public permission: PermissionsService,
      public script: ScriptConfigService,
      private activeRoute: ActivatedRoute,
      private router: Router,
      private cadre:CadreService,
      private designation:DesignationsService
    ) { }
  
    ngOnInit(): void {
      this.submoduleId = this.activeRoute.snapshot.paramMap.get('id')
      this.id= sessionStorage.getItem("id");
      this.getcadre();
      
    }
  
    fileUpload(e: any) {
      this.selectedFile = e.target.files[0];
    }
  
  
  
    getcadre() {
      this.general.bfrcreating = false;
      this.general.creating = true;
      this.cadre.getCadres().subscribe(
        res => {
          this.cadreDetails = res;
          this.script.datatable();
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
  
  
  
     registerDesignation() {
      this.bfrcreating = false;
      this.creating = true;
      let formData = new FormData();
      this.my_id=this.general.decryptionId(this.id);
      this.designation_data.user_id=this.my_id;
      formData.append('name', this.designation_data.designation);
      formData.append('cadre_id', this.designation_data.cadre_id);
      formData.append('description', this.designation_data.description);
      formData.append('abbreviation', this.designation_data.description);
      formData.append('user_id', this.designation_data.user_id);
      this.designation.addDesignation(formData).subscribe(
        res => {
          this.appSuccess = true;
          this.successMessage = res.message;
          this.router.navigate(['/designation/' + this.submoduleId]);
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
  
  
  
  
  
  