import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { EducationLevelService} from '../../../../../services/qualification/qualification.service';
import { PermissionsService} from '../../../../../services/permissions/permissions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'

@Component({
  selector: 'app-qualification-view',
  templateUrl: './qualification-view.component.html',
  styleUrls: ['./qualification-view.component.css']
})
export class EducationLevelViewComponent {


  
    qualificationList: any;
    qualification_data: any;
    subqualificationId: any;
    
    data = {
      uid: '',user_id:''
    }
    qualification_datas={id:''}
    constructor(
      public general: GeneralService,
      public qualification: EducationLevelService ,
      public permission: PermissionsService ,
      public script: ScriptConfigService,
      private route: Router,
      private activeRoute: ActivatedRoute
    ) { }
  
    ngOnInit(): void {
      this.subqualificationId = this.activeRoute.snapshot.paramMap.get('id');
      this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
      this.data.user_id=this.general.decryptionId(sessionStorage.getItem('id') as any)
      this.getqualification() ;
    }
  
    getqualification() {
      this.general.bfrcreating = false;
      this.general.creating = true;
      this.qualification.getEducationLevels().subscribe(
        res => {
          this.qualificationList = res;
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
  
  
  
  
    showCourt_level(id: any) {
      this.qualification_datas.id = id
      this.qualification.showEducationLevel(id).subscribe(
        res => {
          this.qualification_data = res;
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
      this.qualification_datas.id = id;
      this.general.bfrcreating = false;
      this.general.creating = true;
      this.qualification.activateEducationLevel(this.qualification_datas).subscribe(
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
      this.qualification_datas.id = id;
      this.general.bfrcreating = false;
      this.general.creating = true;
      this.qualification.deactivateEducationLevel(this.qualification_datas).subscribe(
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
  