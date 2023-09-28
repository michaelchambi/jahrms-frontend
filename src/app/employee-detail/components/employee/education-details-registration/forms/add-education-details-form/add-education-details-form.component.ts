import { Component } from '@angular/core';
import { GeneralService } from '../../../../../../services/general/general.service';
import { UsersService } from '../../../../../../services/users/users.service';
import { EducationLevelService } from '../../../../../../services/qualification/qualification.service';
// import { EducationLevelService } from '../../../../../../services/education-level/education-level.service';
import { ScriptConfigService } from '../../../../../../services/script-config/script-config.service'
import { Router, ActivatedRoute } from '@angular/router';
import { SpecializationService } from '../../../../../../services/specialization/specialization.service';
import { InstitutionService } from '../../../../../../services/institution/institution.service';
import { EducationDetailsService } from '../../../../../../services/education-details/education-details.service';
@Component({
  selector: 'app-add-education-details-form',
  templateUrl: './add-education-details-form.component.html',
  styleUrls: ['./add-education-details-form.component.css']
})
export class AddEducationDetailsFormComponent {


  selectedCertificateFile: any;
  selectedTranscriptFile: any;
  created_by: any;
  role_list: any;
  submoduleId: any;
  uid: any;

  data = {
    level_id:'',
    index_number:'',
    specialization_id:'',
    institution_id:'',
    starting_date:'',
    completion_date:'',
    result:'',
    certificate_attachment:'',
    transcript_attachment:'',
    created_by:'',
    employee_id:'',
    employee_folder:''
  }
  
  levelDetails: any;
  specializationDetails: any;
  institutionDetails: any;
  employeeDetails: any;

  certificateAttachmentUpload(e: any) {
    this.selectedCertificateFile = e.target.files[0];
  }


  transcriptAttachmentUpload(e: any) {
    this.selectedTranscriptFile = e.target.files[0];
  }


  constructor(
    public general: GeneralService,
    public qualification:EducationLevelService,
    public users: UsersService,
    public script: ScriptConfigService,
    private specialization:SpecializationService,
    private institution:InstitutionService,
    private route: Router,
    private education_detail:EducationDetailsService,
    public level: EducationLevelService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getLevel();
    this. getInstitution();
    this.getSpecialization();
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id2');
    this.uid= this.activeRoute.snapshot.paramMap.get('id');
    this.userDetails(this.uid);
  }

  educationRegistration(id:any,folder:any) {
    this.data.employee_id=id;
    this.created_by = sessionStorage.getItem('id')
    this.data.created_by = this.general.decryptionId(this.created_by);
    this.data.employee_folder=folder;
    this.general.bfrcreating = false;
    this.general.creating = true;
    let formData=new FormData();
    formData.append('start_date', this.data.starting_date);
    formData.append('end_date', this.data.completion_date);
    formData.append('user_id', this.data.created_by);
    formData.append('employee_id', this.data.employee_id);
    formData.append('certificate_attachment', this.selectedCertificateFile);
    formData.append('transcript_attachment', this.selectedTranscriptFile);
    formData.append('index_number', this.data.index_number);
    formData.append('institution_id', this.data.institution_id);
    formData.append('specialization_id', this.data.specialization_id);
    formData.append('level_id', this.data.level_id);
    formData.append('result', this.data.result);
    formData.append('employee_folder', this.data.employee_folder);
    this.education_detail.addEducationDetails(formData).subscribe(
      res => {
        this.uid = res.data;
        this.general.creating = false;
        this.general.bfrcreating = true;
        this.route.navigate(['/user/' + this.uid+'/'+this.submoduleId ]);
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

  
  getLevel() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.qualification.getEducationLevels().subscribe(
      res => {
        this.levelDetails = res;
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

  getSpecialization() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.specialization.getSpecializations().subscribe(
      res => {
        this.specializationDetails = res;
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

  getInstitution() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.institution.getInstitutions().subscribe(
      res => {
        this.institutionDetails = res;
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
        this.employeeDetails = res.data;
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
