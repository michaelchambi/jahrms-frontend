import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { LeaveTypeService} from '../../../../../services/leave/leaveType.service';
import { PermissionsService} from '../../../../../services/permissions/permissions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'

@Component({
  selector: 'app-leave-type-view',
  templateUrl: './leave-type-view.component.html',
  styleUrls: ['./leave-type-view.component.css']
})
export class LeaveTypeViewComponent {

  
  
    
      leave_typeList: any;
      leave_type_data: any;
      subleave_typeId: any;
      
      data = {
        uid: '',user_id:''
      }
      leave_type_datas={id:''}
      constructor(
        public general: GeneralService,
        public leave_type: LeaveTypeService,
        public permission: PermissionsService ,
        public script: ScriptConfigService,
        private route: Router,
        private activeRoute: ActivatedRoute
      ) { }
    
      ngOnInit(): void {
        this.subleave_typeId = this.activeRoute.snapshot.paramMap.get('id');
        this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
        this.data.user_id=this.general.decryptionId(sessionStorage.getItem('id') as any)
        this.getleave_type() ;
      }
    
      getleave_type() {
        this.general.bfrcreating = false;
        this.general.creating = true;
        this.leave_type.getLeaveTypes().subscribe(
          res => {
            this.leave_typeList = res;
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
        this.leave_type_datas.id = id
        this.leave_type.showLeaveType(id).subscribe(
          res => {
            this.leave_type_data = res;
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
        this.leave_type_datas.id = id;
        this.general.bfrcreating = false;
        this.general.creating = true;
        this.leave_type.activateLeaveType(this.leave_type_datas).subscribe(
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
        this.leave_type_datas.id = id;
        this.general.bfrcreating = false;
        this.general.creating = true;
        this.leave_type.deactivateLeaveType(this.leave_type_datas).subscribe(
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
    