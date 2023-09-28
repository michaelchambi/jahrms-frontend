import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../../services/general/general.service';
import { PermissionsService} from '../../../../../../services/permissions/permissions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ScriptConfigService } from '../../../../../../services/script-config/script-config.service'
import { PersonalSkillInfoService } from '../../../../../../services/employee/personal-skill/personal-skill-info.service';

@Component({
  selector: 'app-self-professional-details-view',
  templateUrl: './self-professional-details-view.component.html',
  styleUrls: ['./self-professional-details-view.component.css']
})
export class SelfProfessionalDetailsViewComponent {
      skillDetails: any;
      personal_skills_type_data: any;
      submoduleId: any;
      
      data = {
        uid: '',user_id:''
      }
      kin_datas={id:''}
      constructor(
        public general: GeneralService,
        public personal_skills:PersonalSkillInfoService ,
        public permission: PermissionsService ,
        public script: ScriptConfigService,
        private route: Router,
        
        private activeRoute: ActivatedRoute
      ) { }
    
      ngOnInit(): void {
        this.submoduleId = this.activeRoute.snapshot.paramMap.get('id');
        this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
        this.data.user_id=this.general.decryptionId(sessionStorage.getItem('id') as any)
        this.getskillDetails() ;
      }
    
      getskillDetails() {
        this.general.bfrcreating = false;
        this.general.creating = true;
        this.personal_skills.getPersonnalSkills().subscribe(
          res => {
            this.skillDetails = res;
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
    
