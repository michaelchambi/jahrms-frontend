import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { SettingsService } from '../../../../../services/settings/settings.service';
import { UsersService } from '../../../../../services/users/users.service';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'
import { Router, ActivatedRoute } from '@angular/router';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { LeaveService } from '../../../../../services/leave/leave.service';
import { LeaveTypeService } from '../../../../../services/leave/leaveType.service';
import { RegionService } from '../../../../../services/region/region.service';
import { DistrictsService } from '../../../../../services/districts/districts.service';

@Component({
  selector: 'app-add-my-leave-form',
  templateUrl: './add-my-leave-form.component.html',
  styleUrls: ['./add-my-leave-form.component.css']
})
export class AddMyLeaveFormComponent {
  my_kid: boolean = false;
  just_dependant: boolean = false;
  selectedFile: any;
  created_by: any;
  role_list: any;
  submoduleId: any;
  uid: any;
  user_id: any;
  leave_type_list: any;
  my_leave_List: any;
  data = {
    leave_id: '',
    region_id: '',
    start_date: '',
    end_date: '',
    created_by: '',
    id: '',
    district_id: '',
    coutry_id: '',
    place_to_visit: ''
  }
  my_district_id: any;
  userDetails: any;
  employee_id: any;
  regionDetails: any;
  districtDetails: any;
  dataUserId = {
    id: ''
  }



  getShowDistrictId(id: any) {
    this.my_district_id = id;
  }


  outside: boolean = false;
  inside: boolean = false;

  initietedByOutside() {
    this.outside = true;
    this.inside = false;
  }
  InitietedByInside() {
    this.inside = true;
    this.outside = false;
  }

  constructor(
    public general: GeneralService,
    //
    public users: UsersService,
    public script: ScriptConfigService,
    private route: Router,
    public permission: PermissionsService,
    public leave: LeaveService,
    public LeaveType: LeaveTypeService,
    private districts: DistrictsService,
    private region: RegionService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.permission.getRole();
    this.uid = sessionStorage.getItem('id')
    this.user_id = this.general.decryption(sessionStorage.getItem('id') as any)
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id');

    // this.showUser()
    this.showMyLeave();
    this.getLeaveTypes();
    this.getRegions();
  }

  addLeave(id:any) {
   
   
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.data.id = id
    this.data.created_by = id
    console.log('Data zangu ni hizi', this.data);
    this.leave.addleave(this.data).subscribe(
      res => {
        this.general.creating = false;
        this.general.bfrcreating = true;
        this.route.navigate(['/my-leave/' + this.uid]);
        this.script.successAlert(res.sw_message);
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

  getLeaveTypes() {
    this.LeaveType.getLeaveTypes().subscribe(
      res => {
        this.leave_type_list = res;
        console.log("hizi ni leave types", this.leave_type_list);

      },
      err => {
        {
          this.general.creating = false;
          this.general.bfrcreating = true;
          this.script.errorAlert(err.error.sw_message);
          if (err.error.token == 0) {
            this.general.encryptUrl(this.route.url);
            this.route.navigate(['/restore-session']);
          }
        }
      }
    )
  }




  showUser() {
    this.dataUserId.id = this.user_id;
    this.users.showUserById(this.dataUserId).subscribe(
      res => {
        this.userDetails = res.data;
        this.script.successAlert(res.sw_message)
      },
      err => {
        this.script.errorAlert(err.error.sw_message)
        if (err.error.token == 0) {
          this.general.encryptUrl(this.route.url);
          // this.route.navigate(['/restore-session']);
        }
      }
    );
  }


  showMyLeave() {
    // this.dataUserId.id=id
    // console.log('hiiiii ndio tunayo tafuta sanaaaaaaaaaaaaa',this.data.id);
    this.leave.showLeave(this.dataUserId).subscribe(
      res => {
        this.my_leave_List = res;
        console.log('hiiiii ndio tunayo tafuta sanaaaaaaaaaaaaa', this.my_leave_List);
      },
      err => {
        if (err.error.token == 0) {
          sessionStorage.setItem('current_url', this.route.url)
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }





  getDistricts(id: any) {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.districts.showDistrict(id).subscribe(
      res => {
        this.districtDetails = res;
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
  getRegions() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.region.getRegions().subscribe(
      res => {
        this.regionDetails = res;
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
}
