
import { Component } from '@angular/core';
import { GeneralService } from '../../../../../../services/general/general.service';
import { NextOfKinInfoService } from '../../../../../../services/employee/next-of-kin/next-of-kin-info.service';
import { UsersService } from '../../../../../../services/users/users.service';
import { ScriptConfigService } from '../../../../../../services/script-config/script-config.service'
import { Router, ActivatedRoute } from '@angular/router';
import { PermissionsService } from '../../../../../../services/permissions/permissions.service';
import { SkillService } from '../../../../../../services/skill/skill.service';
import { PersonalSkillInfoService } from '../../../../../../services/employee/personal-skill/personal-skill-info.service'
@Component({
  selector: 'app-add-self-skills-details-form',
  templateUrl: './add-self-skills-details-form.component.html',
  styleUrls: ['./add-self-skills-details-form.component.css']
})
export class AddSelfSkillsDetailsFormComponent {



my_kid:boolean=false;
just_dependant:boolean=false;
  selectedFile: any;
  created_by: any;
  role_list: any;
  submoduleId: any;
  uid: any;
  data = {
    skills_id:[],
    employee_id:'',
  }

  




  CurrentDate: any;
  my_date:any;
  age: any;
  difference: any;
  skillsDetails: any;
  fileBirthCertificateUpload(e: any) {
    this.selectedFile = e.target.files[0];
  }


  fileStudentIdUpload(e: any) {
    this.selectedFile = e.target.files[0];
  }

  fileAffidavityUpload(e: any) {
    this.selectedFile = e.target.files[0];
  }
 

  constructor(
    public general: GeneralService,
    public dependant: NextOfKinInfoService,
    public users: UsersService,
    public script: ScriptConfigService,
    private route: Router,
    private skills:SkillService,
    private skills_registration:PersonalSkillInfoService,
    public permission: PermissionsService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.permission.getRole();
   this.getDependantType();
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id');
  }

addSkills() {
    this.created_by = sessionStorage.getItem('id')
    this.data.employee_id = this.general.decryptionId(this.created_by);
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.skills_registration.addPersonnalSkill(this.data).subscribe(
      res => {
        this.uid = res.data;
        this.general.creating = false;
        this.general.bfrcreating = true;
        this.route.navigate(['/my-profile']);
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

  



  getDependantType() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.skills.getSkills().subscribe(
      res => {
        this.skillsDetails = res;
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




}
