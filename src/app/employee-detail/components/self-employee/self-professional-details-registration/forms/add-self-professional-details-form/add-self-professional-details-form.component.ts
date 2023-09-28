
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../../services/general/general.service';
import { ProfessioanlService} from '../../../../../../services/professional/professioanl.service'
import { UsersService } from '../../../../../../services/users/users.service';
import { ScriptConfigService } from '../../../../../../services/script-config/script-config.service'
import { Router, ActivatedRoute } from '@angular/router';
import { ProfessionalSkillsService } from '../../../../../../services/professional-skills/professional-skills.service';


@Component({
  selector: 'app-add-self-professional-details-form',
  templateUrl: './add-self-professional-details-form.component.html',
  styleUrls: ['./add-self-professional-details-form.component.css']
})
export class AddSelfProfessionalDetailsFormComponent {


my_kid:boolean=false;
just_dependant:boolean=false;
  selectedFile: any;
  created_by: any;
  role_list: any;
  submoduleId: any;
  uid: any;

  data = {
    professional_body_id:'',
    completion_date:'',
    certificate_attachment:'',
    created_by:'',
    personal_folder:''
  }
  CurrentDate: any;
  my_date:any;
  age: any;
  difference: any;
  professionalDetails: any;
  employeeDetails: any;
  employee: any;

  new_data={id:''};
  details: any;
  fileCertificateUpload(e: any) {
    this.selectedFile = e.target.files[0];
  }


 

  constructor(
    public general: GeneralService,
    private professional_data:ProfessionalSkillsService,
    public users: UsersService,
    public script: ScriptConfigService,
    private route: Router,
    public professional_skills: ProfessioanlService,
    private activeRoute: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id');
    this.getskillDetails();
  
    this.employee=this.general.decryptionId(sessionStorage.getItem('id') as any);
    this.userDetails(this.employee)
  }

  addProfessional() {
    this.created_by = sessionStorage.getItem('id')
    this.data.created_by = this.general.decryptionId(this.created_by);
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.data.certificate_attachment=this.selectedFile
    let formData=new FormData();
    formData.append('completion_date', this.data.completion_date);
    formData.append('professional_id', this.data.professional_body_id);
    formData.append('employee_id', this.data.created_by);
    formData.append('certificate_attachment', this.data.certificate_attachment);
    formData.append('personal_folder', this.data.personal_folder);
    this.professional_data.addProfessionalSkills(formData).subscribe(
      res => {
        this.uid = res.data;
        this.general.creating = false;
        this.general.bfrcreating = true;
        this.route.navigate(['/my-profile' ]);
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

  
  userDetails(id: any) {
  
    this.new_data.id = id
    // console.log('data received are ', this.data.id)
    this.users.getUser(this.new_data).subscribe(
      res => {
        this.employeeDetails = res;
      this.data.personal_folder=this.employeeDetails.data.personal_folder
        
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


  getskillDetails() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.professional_skills.getProfessionals().subscribe(
      res => {
        this.professionalDetails = res;
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


}
