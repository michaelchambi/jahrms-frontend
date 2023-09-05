import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { QualificationGradeService} from '../../../../../services/qualification/qualification-grade.service';
import { PermissionsService} from '../../../../../services/permissions/permissions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'
import { QualificationService} from '../../../../../services/qualification/qualification.service';


@Component({
  selector: 'app-qualification-grade-view',
  templateUrl: './qualification-grade-view.component.html',
  styleUrls: ['./qualification-grade-view.component.css']
})
export class QualificationGradeViewComponent {




  
    qualificationList: any;
    qualification_data: any;
    subqualificationId: any;
    
    data = {
      uid: '',user_id:''
    }
    qualification_datas={id:''}
    constructor(
      public general: GeneralService,
      public qualification: QualificationGradeService ,
      public permission: PermissionsService ,
      public script: ScriptConfigService,
      private route: Router,
      private activeRoute: ActivatedRoute
    ) { }
  
    ngOnInit(): void {
      this.subqualificationId = this.activeRoute.snapshot.paramMap.get('id');
      this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
      this.data.user_id=this.general.decryptionId(sessionStorage.getItem('id') as any)
      this.getqualificationGrade() ;
    }
  
    getqualificationGrade() {
      this.general.bfrcreating = false;
      this.general.creating = true;
      this.qualification.getQualification_grades().subscribe(
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
      this.qualification.showQualification_grade(id).subscribe(
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
      this.qualification.activateQualification_grade(this.qualification_datas).subscribe(
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
      this.qualification.deactivateQualification_grade(this.qualification_datas).subscribe(
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
  