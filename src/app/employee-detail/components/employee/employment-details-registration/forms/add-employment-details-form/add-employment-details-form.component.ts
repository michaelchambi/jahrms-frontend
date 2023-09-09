import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../../services/general/general.service';
import { SettingsService } from '../../../../../../services/settings/settings.service';
import { UsersService } from '../../../../../../services/users/users.service';
import { ScriptConfigService } from '../../../../../../services/script-config/script-config.service'
import { Router, ActivatedRoute } from '@angular/router';
import { PermissionsService } from '../../../../../../services/permissions/permissions.service';
import {DesignationsService } from '../../../../../../services/designations/designations.service'


@Component({
  selector: 'app-add-employment-details-form',
  templateUrl: './add-employment-details-form.component.html',
  styleUrls: ['./add-employment-details-form.component.css']
})
export class AddEmploymentDetailsFormComponent {


  selectedFile: any;
  created_by: any;
  role_list: any;
  submoduleId: any;
  uid: any;
  data = {
    confirmation_date:'',
    hired_date:'',
    pf_number:'',
    check_number:'',
    hired_latter:'',
    confirmation_later: '',
    created_by:'',
    roles: [],
    designation_id:''
  }
  designationDetails: any;

  fileHiringUpload(e: any) {
    this.selectedFile = e.target.files[0];
  }

  fileConfirmationUpload(e: any) {
    this.selectedFile = e.target.files[0];
  }
 

  constructor(
    public general: GeneralService,
    public settings: SettingsService,
    public users: UsersService,
    public script: ScriptConfigService,
    private route: Router,
    public designation:DesignationsService,
    public permission: PermissionsService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.permission.getRole();
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id');
  }


  getdesignation() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.designation.getDesignations().subscribe(
      res => {
        this.designationDetails = res;
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

  userRegistration() {
    this.created_by = sessionStorage.getItem('id')
    this.data.created_by = this.general.decryptionId(this.created_by);

    // return console.log(this.data);


    this.general.bfrcreating = false;
    this.general.creating = true;
    this.users.addUser(this.data).subscribe(
      res => {
        this.uid = res.data;
        this.general.creating = false;
        this.general.bfrcreating = true;
        this.route.navigate(['/view-users/' + this.uid ]);
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

}
