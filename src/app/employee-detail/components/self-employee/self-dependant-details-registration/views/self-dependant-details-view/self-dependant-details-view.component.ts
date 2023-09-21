import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../../services/general/general.service';
import { PermissionsService} from '../../../../../../services/permissions/permissions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ScriptConfigService } from '../../../../../../services/script-config/script-config.service'
import { DependantInfoService } from '../../../../../../services/employee/dependant/dependant-info.service';

@Component({
  selector: 'app-self-dependant-details-view',
  templateUrl: './self-dependant-details-view.component.html',
  styleUrls: ['./self-dependant-details-view.component.css']
})
export class SelfDependantDetailsViewComponent {
      dependant_typeList: any;
      dependant_type_data: any;
      submoduleId: any;
      
      data = {
        uid: '',user_id:''
      }
      dependant_type_datas={id:''}
      constructor(
        public general: GeneralService,
        public dependant:DependantInfoService ,
        public permission: PermissionsService ,
        public script: ScriptConfigService,
        private route: Router,
        
        private activeRoute: ActivatedRoute
      ) { }
    
      ngOnInit(): void {
        this.submoduleId = this.activeRoute.snapshot.paramMap.get('id');
        this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
        this.data.user_id=this.general.decryptionId(sessionStorage.getItem('id') as any)
        this.getDependants() ;
      }
    
      getDependants() {
        this.general.bfrcreating = false;
        this.general.creating = true;
        this.dependant.getDependants().subscribe(
          res => {
            this.dependant_typeList = res;
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
    
    
    
   
    
      activate(id: any) {
        this.dependant_type_datas.id = id;
        this.general.bfrcreating = false;
        this.general.creating = true;
        this.dependant.activateDependant(this.dependant_type_datas).subscribe(
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
        this.dependant_type_datas.id = id;
        this.general.bfrcreating = false;
        this.general.creating = true;
        this.dependant.deactivateDependant(this.dependant_type_datas).subscribe(
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
    
