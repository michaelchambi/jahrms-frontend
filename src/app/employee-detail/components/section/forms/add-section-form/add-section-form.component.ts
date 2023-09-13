import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'
import { SectionService} from '../../../../../services/section/section.service';
import { DepartmentsService} from '../../../../../services/departments/departments.service';

@Component({
  selector: 'app-add-section-form',
  templateUrl: './add-section-form.component.html',
  styleUrls: ['./add-section-form.component.css']
})
export class AddSectionFormComponent {

 
  
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
  
    section_data={department_id:'',abbreviation:'',section:'',user_id:'',description:''}
    submoduleId: any;
    my_id: any;
    departmentDetails: any;
  
    constructor(
      public general: GeneralService,
      public permission: PermissionsService,
      public script: ScriptConfigService,
      private activeRoute: ActivatedRoute,
      private router: Router,
      private department:DepartmentsService,
      private section:SectionService
    ) { }
  
    ngOnInit(): void {
      this.submoduleId = this.activeRoute.snapshot.paramMap.get('id')
      this.id= sessionStorage.getItem("id");
      this.getdepartment();
      
    }
  
    fileUpload(e: any) {
      this.selectedFile = e.target.files[0];
    }
  
  
  
    getdepartment() {
      this.general.bfrcreating = false;
      this.general.creating = true;
      this.department.getDepartments().subscribe(
        res => {
          this.departmentDetails = res;
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
  
  
  
     registerSection() {
      this.bfrcreating = false;
      this.creating = true;
      let formData = new FormData();
      this.my_id=this.general.decryptionId(this.id);
      this.section_data.user_id=this.my_id;
    

      formData.append('section_name', this.section_data.section);
      formData.append('department_id', this.section_data.department_id);
      formData.append('description', this.section_data.description);
      formData.append('abbreviation', this.section_data.abbreviation);
      formData.append('user_id', this.section_data.user_id);
      this.section.addSection(formData).subscribe(
        res => {
          this.appSuccess = true;
          this.successMessage = res.message;
          this.router.navigate(['/all-sections/' + this.submoduleId]);
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
  
  
  
  
  
  