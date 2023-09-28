import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService} from '../../../../../services/permissions/permissions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'
import { SpecializationService } from '../../../../../services/specialization/specialization.service';
@Component({
  selector: 'app-academic-specialization-view',
  templateUrl: './academic-specialization-view.component.html',
  styleUrls: ['./academic-specialization-view.component.css']
})
export class AcademicSpecializationViewComponent {

  SpecializationList: any;
  Specialization_data: any;
  subSpecializationId: any;
  
  data = {
    uid: '',user_id:''
  }
  Specialization_datas={id:''}
  constructor(
    public general: GeneralService,
    public Specialization: SpecializationService  ,
    public permission: PermissionsService ,
    public script: ScriptConfigService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subSpecializationId = this.activeRoute.snapshot.paramMap.get('id');
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this.data.user_id=this.general.decryptionId(sessionStorage.getItem('id') as any)
    this.getSpecialization() ;
  }

  getSpecialization() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.Specialization.getSpecializations().subscribe(
      res => {
        this.SpecializationList = res;
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




  showSpecialization(id: any) {
    this.Specialization_datas.id = id
    this.Specialization.showSpecialization(id).subscribe(
      res => {
        this.Specialization_data = res;
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
    this.Specialization_datas.id = id;
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.Specialization.activateSpecialization(this.Specialization_datas).subscribe(
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
    this.Specialization_datas.id = id;
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.Specialization.deactivateSpecialization(this.Specialization_datas).subscribe(
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
