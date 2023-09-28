import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'
import { EducationLevelGradeService} from '../../../../../services/qualification/qualification-grade.service';
import { EducationLevelService} from '../../../../../services/qualification/qualification.service';


@Component({
  selector: 'app-add-qualification-grade-form',
  templateUrl: './add-qualification-grade-form.component.html',
  styleUrls: ['./add-qualification-grade-form.component.css']
})
export class AddQualificationGradeFormComponent {


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

  grade_data={education_level_id:'',grade:'',user_id:'',description:''}
  submoduleId: any;
  my_id: any;
  qualificationDetails: any;

  constructor(
    public general: GeneralService,
    public permission: PermissionsService,
    public script: ScriptConfigService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private qualification:EducationLevelService,
    private grade:EducationLevelGradeService
  ) { }

  ngOnInit(): void {
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id')
    this.id= sessionStorage.getItem("id");
    this.getqualification();
    
  }

  fileUpload(e: any) {
    this.selectedFile = e.target.files[0];
  }



  getqualification() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.qualification.getEducationLevels().subscribe(
      res => {
        this.qualificationDetails = res;
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



   registerQualification_grade() {
    this.bfrcreating = false;
    this.creating = true;
    let formData = new FormData();
    this.my_id=this.general.decryptionId(this.id);
    this.grade_data.user_id=this.my_id;
    formData.append('name', this.grade_data.grade);
    formData.append('education_level_id', this.grade_data.education_level_id);
    formData.append('description', this.grade_data.description);
    formData.append('user_id', this.grade_data.user_id);
    this.grade.addEducationLevel_grade(this.grade_data).subscribe(
      res => {
        this.appSuccess = true;
        this.successMessage = res.message;
        this.router.navigate(['/qualification-grades/' + this.submoduleId]);
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





