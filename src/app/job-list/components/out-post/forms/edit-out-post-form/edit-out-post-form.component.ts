
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { SettingsService } from '../../../../../services/settings/settings.service';
import { UsersService } from '../../../../../services/users/users.service';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'
import { Router, ActivatedRoute } from '@angular/router';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { CadreService } from '../../../../../services/cadre/cadre.service';
import { JobListService } from '../../../../../services/job_list/job-list.service';
import { CourtLevelService } from '../../../../../services/court-level/court-level.service';
import { CourtsService } from '../../../../../services/courts/courts.service';
@Component({
  selector: 'app-edit-out-post-form',
  templateUrl: './edit-out-post-form.component.html',
  styleUrls: ['./edit-out-post-form.component.css']
})
export class EditOutPostFormComponent {

  job_list_details: any;
  cardeList: any;
  submoduleId: any;
  user_deta={id:''}
  user_data:any;
  court_level_list:any;
  court_list:any;
  data = {
    organization_code: '',
    remove_reason: ''
  }
  job_list_id = {
    id: '',
    uid:''
  }
  my_data={uid:'',return_comment: '',}

  cadre_Data = {
    minimum_number: '',
    maximum_number: '',
    court_id: '',
    court_level_id: '',
    cadre_id: '',
    created_by: '',
  }

  

  response: boolean = false;
  user_id: any;
  submodule_access: any;
  this_data={userId:''} 
  session_id: any;
  constructor(
    public general: GeneralService,
   
    public carde: CadreService,
    public script: ScriptConfigService,
    private route: Router,
    public permission: PermissionsService,
    public users: UsersService,
    public job_list: JobListService,
    public court: CourtsService,
    public court_level: CourtLevelService,
    private activeRoute: ActivatedRoute
  ) { }


  ngOnInit(): void {
    
    this.getCadres()
    this.permission.module_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this.permission.submodule_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id');
    this.user_id=this.general.decryptionId(sessionStorage.getItem('id') as any);
    this.getCourtLevel();
    this.showJobLists();
  }

  showJobLists() {
    this.job_list_id.uid = this.submoduleId;
    this.job_list.showJobLists(this.job_list_id).subscribe(
      res => {
        this.job_list_details = res.job_list;
      },
      err => {
        if (err.error.token == 0) {
          sessionStorage.setItem('current_url', this.route.url)
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }
  editJobList(){
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.cadre_Data.created_by=this.user_id;
    // this.job_list_details.uid=this.submoduleId;
    // console.log('more energy ni hatariii',this.cadre_Data);
    
    this.job_list.editJobList(this.job_list_details).subscribe(
      res => {
        this.general.bfrcreating = true;
        this.general.creating = false;
        this.general.successMessage(res.sw_message, (e: any) => {
          this.route.navigate(['/out-post/' + this.job_list_details.uid]);
          this.script.successAlert(res.sw_message);

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

  getCadres() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.carde.getCadres().subscribe(
      res => {
        this.cardeList = res;
        this.general.creating = false;
        this.general.bfrcreating = true;
      },
      err => {
        
        this.general.creating = false;
        this.general.bfrcreating = true;
        if (err.error.token == 0) {
          this.general.encryptUrl(this.route.url);
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }





  getCourts(id:any) {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.cadre_Data.court_level_id=id
    this.court.getCourtsByCourtIdNoZone(this.cadre_Data).subscribe(
      res => {
        this.court_list = res;
        this.general.creating = false;
        this.general.bfrcreating = true;
      },
      err => {
        this.general.creating = false;
        this.general.bfrcreating = true;
        this.script.errorAlert(err.error.sw_message);
        if (err.error.token == 0) {
          sessionStorage.setItem('current_url', this.route.url)
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }

    getCourtLevel() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.court_level.getCourt_level().subscribe(
      res => {
        this.court_level_list = res;
        this.script.datatable();
        this.general.creating = false;
        this.general.bfrcreating = true;
      },
      err => {
        this.general.creating = false;
        this.general.bfrcreating = true;
        this.script.errorAlert(err.error.sw_message);
        if (err.error.token == 0) {
          sessionStorage.setItem('current_url', this.route.url)
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }






}

