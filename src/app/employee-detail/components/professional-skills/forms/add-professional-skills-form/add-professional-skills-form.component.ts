import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'
import { ProfessioanlService} from '../../../../../services/professional/professioanl.service';

@Component({
  selector: 'app-add-professional-skills-form',
  templateUrl: './add-professional-skills-form.component.html',
  styleUrls: ['./add-professional-skills-form.component.css']
})
export class AddProfessionalSkillsFormComponent {
 


  
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
  
      
    
      professional_data={professional_name:'',user_id:'',description:''}
      submoduleId: any;
      my_id: any;
      professionalDetails: any;
    
      constructor(
        public general: GeneralService,
        public permission: PermissionsService,
        public script: ScriptConfigService,
        private activeRoute: ActivatedRoute,
        private router: Router,
        private professional:ProfessioanlService,
      ) { }
    
      ngOnInit(): void {
        this.submoduleId = this.activeRoute.snapshot.paramMap.get('id')
        this.id= sessionStorage.getItem("id");
        this.getprofessional();
        
      }
    
      fileUpload(e: any) {
        this.selectedFile = e.target.files[0];
      }
    
    
    
      getprofessional() {
        this.general.bfrcreating = false;
        this.general.creating = true;
        this.professional.getProfessionals().subscribe(
          res => {
            this.professionalDetails = res;
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
    
    
    
       registerProfessional() {
        this.bfrcreating = false;
        this.creating = true;
        let formData = new FormData();
        this.my_id=this.general.decryptionId(this.id);
        this.professional_data.user_id=this.my_id;
  
    
        formData.append('professional_name', this.professional_data.professional_name);
        formData.append('description', this.professional_data.description);
        formData.append('user_id', this.professional_data.user_id);
        this.professional.addProfessional(formData).subscribe(
          res => {
            this.appSuccess = true;
            this.successMessage = res.message;
            this.router.navigate(['/professional/' + this.submoduleId]);
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
    
    
    
    
    
    