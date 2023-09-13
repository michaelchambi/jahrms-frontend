
import { SectionService} from '../../../../../services/section/section.service';
import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService} from '../../../../../services/permissions/permissions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'

@Component({
  selector: 'app-section-view',
  templateUrl: './section-view.component.html',
  styleUrls: ['./section-view.component.css']
})
export class SectionViewComponent {


  
  
    
      sectionList: any;
      section_data: any;
      submoduleId: any;
      
      data = {
        uid: '',user_id:''
      }
      section_deta={id:''}
      constructor(
        public general: GeneralService,
        public section: SectionService,
        public permission: PermissionsService ,
        public script: ScriptConfigService,
        private route: Router,
        private activeRoute: ActivatedRoute
      ) { }
    
      ngOnInit(): void {
        this.submoduleId = this.activeRoute.snapshot.paramMap.get('id');
        this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
        this.data.user_id=this.general.decryptionId(sessionStorage.getItem('id') as any)
        this.getSection() ;
      }
    
      getSection() {
        this.general.bfrcreating = false;
        this.general.creating = true;
        this.section.getSections().subscribe(
          res => {
            this.sectionList = res;
           
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
    
    
    
    
      showSection(id: any) {
       
        this.section.showSection(id).subscribe(
          res => {
            this.section_data = res;
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
        this.section_deta.id = id
        this.general.bfrcreating = false;
        this.general.creating = true;
        this.section.activateSection(this.section_deta).subscribe(
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
        this.section_deta.id = id
        this.general.bfrcreating = false;
        this.general.creating = true;
        this.section.deactivateSection(this.section_deta).subscribe(
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
    