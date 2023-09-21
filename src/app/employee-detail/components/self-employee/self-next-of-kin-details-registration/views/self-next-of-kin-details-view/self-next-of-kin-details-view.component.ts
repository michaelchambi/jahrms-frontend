
import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../../services/general/general.service';
import { PermissionsService} from '../../../../../../services/permissions/permissions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ScriptConfigService } from '../../../../../../services/script-config/script-config.service'
import { NextOfKinInfoService } from '../../../../../../services/employee/next-of-kin/next-of-kin-info.service';

@Component({
  selector: 'app-self-next-of-kin-details-view',
  templateUrl: './self-next-of-kin-details-view.component.html',
  styleUrls: ['./self-next-of-kin-details-view.component.css']
})
export class SelfNextOfKinDetailsViewComponent {


      kinDetails: any;
      next_of_kin_type_data: any;
      submoduleId: any;
      
      data = {
        uid: '',user_id:''
      }
      kin_datas={id:''}
      constructor(
        public general: GeneralService,
        public next_of_kin:NextOfKinInfoService ,
        public permission: PermissionsService ,
        public script: ScriptConfigService,
        private route: Router,
        
        private activeRoute: ActivatedRoute
      ) { }
    
      ngOnInit(): void {
        this.submoduleId = this.activeRoute.snapshot.paramMap.get('id');
        this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
        this.data.user_id=this.general.decryptionId(sessionStorage.getItem('id') as any)
        this.getNextOfKins() ;
      }
    
      getNextOfKins() {
        this.general.bfrcreating = false;
        this.general.creating = true;
        this.next_of_kin.getNextOfKins().subscribe(
          res => {
            this.kinDetails = res;
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
        this.kin_datas.id = id;
        this.general.bfrcreating = false;
        this.general.creating = true;
        this.next_of_kin.activateNextOfKin(this.kin_datas).subscribe(
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
        this.kin_datas.id = id;
        this.general.bfrcreating = false;
        this.general.creating = true;
        this.next_of_kin.deactivateNextOfKin(this.kin_datas).subscribe(
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
    
