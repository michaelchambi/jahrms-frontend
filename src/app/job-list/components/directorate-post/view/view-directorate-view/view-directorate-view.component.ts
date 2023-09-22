
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
  selector: 'app-view-directorate-view',
  templateUrl: './view-directorate-view.component.html',
  styleUrls: ['./view-directorate-view.component.css']
})
export class ViewDirectorateViewComponent {
  approved: boolean = false;
  out_post: boolean = false;
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
  all_job_list_approved:any;
  all_job_list_out_post:any;
  dashboard_data:any;
  data = {
    organization_code: '',
    remove_reason: ''
  }
  job_list_id = {
    id: '',
    uid: ''
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
    this.getJobList()
    
    this.getCadres()
    this.permission.module_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this.permission.submodule_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id');
    this.user_id=this.general.decryptionId(sessionStorage.getItem('id') as any);
    this.getCourtLevel()
    this.getMainJobListApproved();
    this.getJobListSuppervised();
    this.approvedJobList();
    this.countAssignedJobLists();
  }

  deactivateUser() {

  }

  addJobList(){
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.cadre_Data.created_by=this.user_id;
    console.log('more energy ni hatariii',this.cadre_Data);
    
    this.job_list.addDirectorateJobList(this.cadre_Data).subscribe(
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
  // ======================================================
  getMainJobListApproved() {
  this.general.bfrcreating = false;
  this.general.creating = true;
  this.job_list.getDirectorateJobLists().subscribe(
    res => {
      this.all_job_list_approved = res;
      
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
// ================================================================
getJobListSuppervised() {
  this.general.bfrcreating = false;
  this.general.creating = true;
  this.job_list.getDirectorateJobListApproved().subscribe(
    res => {
      this.all_job_list_out_post = res;
      console.log('hizi ni out post',this.all_job_list_out_post);
      
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
  getJobList() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.job_list.getMainJobLists().subscribe(
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

    this.job_list_id.uid = id;

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
  approveDirectorateJobList(id: any) {
    this.my_data.uid=id
    this.general.bfrcreating = false;
    this.general.creating = true;
    console.log('hii ni Id ya directorate',this.my_data);
    
    this.job_list.approveDirectorateJobList(this.my_data).subscribe(
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
  commentJobListImmedietSuppervisor(id: any) {
    this.my_data.uid=id
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.job_list.commentMainJobListImmedietSuppervisor(this.my_data).subscribe(
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
  rejectDirectorateJobList(id: any) {
    this.my_data.uid=id
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.job_list.rejectDirectorateJobList(this.my_data).subscribe(
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


  closeModal() {
    this.showModal = false;

  }

  openModal() {
    this.showModal = true;
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  OutPostJobList(){
    this.approved = false;
    this.out_post = true;
  }
  approvedJobList(){
    this.approved = true;
    this.out_post = false;
  }

}

