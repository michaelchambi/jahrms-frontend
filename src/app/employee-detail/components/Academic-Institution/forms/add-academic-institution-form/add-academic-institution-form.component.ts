import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'
import { InstitutionService } from '../../../../../services/institution/institution.service';
@Component({
  selector: 'app-add-academic-institution-form',
  templateUrl: './add-academic-institution-form.component.html',
  styleUrls: ['./add-academic-institution-form.component.css']
})
export class AddAcademicInstitutionFormComponent {


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

  institution_data={institution_name:'',description:'',institution_abbreviation:''}
  submoduleId: any;
  my_id: any;

  constructor(
    public general: GeneralService,
    public permission: PermissionsService,
    public script: ScriptConfigService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private institution:InstitutionService
  ) { }

  ngOnInit(): void {
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id')
    this.id= sessionStorage.getItem("id");
    
  }

  fileUpload(e: any) {
    this.selectedFile = e.target.files[0];
  }

  registerInstitution() {
    this.bfrcreating = false;
    this.creating = true;
    let formData = new FormData();
    this.my_id=this.general.decryptionId(this.id);
    formData.append('name', this.institution_data.institution_name);
    formData.append('description', this.institution_data.description);
    formData.append('abreviation', this.institution_data.institution_abbreviation);
    this.institution.addInstitution(formData).subscribe(
      res => {
        this.appSuccess = true;
        this.successMessage = res.message;
        this.router.navigate(['/academic-institution/' + this.submoduleId]);
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
        if (err.error.token == 0) {
          localStorage.setItem('token', err.error.token);
        }
      }
    );


   }
}



