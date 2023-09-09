
import { ProfessioanlService} from '../../../../../services/professional/professioanl.service';
import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService} from '../../../../../services/permissions/permissions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'

@Component({
  selector: 'app-professional-skills-view',
  templateUrl: './professional-skills-view.component.html',
  styleUrls: ['./professional-skills-view.component.css']
})
export class ProfessionalSkillsViewComponent {

  
    professionalList: any;
    professional_data: any;
    submoduleId: any;
    
    data = {
      uid: '',user_id:''
    }
    professional_deta={id:''}
    constructor(
      public general: GeneralService,
      public professional: ProfessioanlService,
      public permission: PermissionsService ,
      public script: ScriptConfigService,
      private route: Router,
      private activeRoute: ActivatedRoute
    ) { }
  
    ngOnInit(): void {
      this.submoduleId = this.activeRoute.snapshot.paramMap.get('id');
      this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
      this.data.user_id=this.general.decryptionId(sessionStorage.getItem('id') as any)
      this.getProfessional() ;
    }
  
    getProfessional() {
      this.general.bfrcreating = false;
      this.general.creating = true;
      this.professional.getProfessionals().subscribe(
        res => {
          this.professionalList = res;
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
  
  
  
  
    showProfessional(id: any) {
     
      this.professional.showProfessional(id).subscribe(
        res => {
          this.professional_data = res;
        },
        err => {
          if (err.error.token == 0) {
            sessionStorage.setItem('current_url', this.route.url)
            this.route.navigate(['/restore-session']);
          }
        }
      );
    }
  
  
    activate(id: any) {
      this.professional_deta.id = id
      this.general.bfrcreating = false;
      this.general.creating = true;
      this.professional.activateProfessional(this.professional_deta).subscribe(
        res => {
          this.general.bfrcreating = true;
          this.general.creating = false;
          this.general.successMessage(res.sw_message, (e: any) => {
            if (e) {
              window.location.reload();
            }
  
          });
        },
        err => {
          this.general.bfrcreating = true;
          this.general.creating = false;
          this.general.errorMessage(err.error.sw_message, (e: any) => {
            if (e) {
              window.location.reload();
            }
  
          });
          if (err.error.token == 0) {
            sessionStorage.setItem('current_url', this.route.url)
            this.route.navigate(['/restore-session']);
          }
        }
      );
    }
  
    deactivate(id: any) {
      this.professional_deta.id = id
      this.general.bfrcreating = false;
      this.general.creating = true;
      this.professional.deactivateProfessional(this.professional_deta).subscribe(
        res => {
          this.general.bfrcreating = true;
          this.general.creating = false;
          this.general.successMessage(res.sw_message, (e: any) => {
            if (e) {
              window.location.reload();
            }
  
          });
        },
        err => {
          this.general.bfrcreating = true;
          this.general.creating = false;
          this.general.errorMessage(err.error.sw_message, (e: any) => {
            if (e) {
              window.location.reload();
            }
  
          });
          if (err.error.token == 0) {
            sessionStorage.setItem('current_url', this.route.url)
            this.route.navigate(['/restore-session']);
          }
        }
      );
    }
  }
  