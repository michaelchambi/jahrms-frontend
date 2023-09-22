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
  selector: 'app-view-final-post',
  templateUrl: './view-final-post.component.html',
  styleUrls: ['./view-final-post.component.css']
})
export class ViewFinalPostComponent {
  out_post: boolean = false;
  approved: boolean = false;
  all_job_list_out_post: any;
  all_job_list: any;
  job_list_details: any;
  tableId: any;
  cardeList: any;
  showModal: boolean = false;
  submoduleId: any;
  user_deta={id:''}
  user_data:any;
  court_level_list:any;
  court_list:any;
  dashboard_data:any;
  all_job_list_approved:any;
  data = {
    organization_code: '',
    remove_reason: ''
  }
  job_list_id = {
    id: ''
  }
  my_data={uid:'',directorate_return_comment: '',}

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
    this.getAllJOTJobLists()
    
    this.permission.module_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this.permission.submodule_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id');
    this.user_id=this.general.decryptionId(sessionStorage.getItem('id') as any);
    this.approvedJobList();
    this.countAssignedJobLists();
  }

  deactivateUser() {

  }



  // ======================================================



  getAllJOTJobLists() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.job_list.getAllJOTJobLists().subscribe(
      res => {
        this.all_job_list = res;
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


  

  showJobLists(id: any) {

    this.job_list_id.id = id;

    this.job_list.showJobLists(this.job_list_id).subscribe(
      res => {
        this.job_list_details = res.job_list;
      
      console.log('data hizi',this.job_list_details);
      
      },
      err => {
        if (err.error.token == 0) {
          sessionStorage.setItem('current_url', this.route.url)
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }


  deactivate(id: any) {
    this.my_data.uid = id;
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.users.deactivateUser(this.my_data).subscribe(
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
  countAssignedJobLists() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.job_list.countAssignedJobLists().subscribe(
      res => {
        this.dashboard_data = res.data;
        console.log('hizi ni total ya dashboard zote',this.dashboard_data);
        
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

  closeModal() {
    this.showModal = false;

  }

  openModal() {
    this.showModal = true;
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  approvedJobList(){
    this.approved = true;
  }

}

