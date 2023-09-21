import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../../services/permissions/permissions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jot-users-details-layout',
  templateUrl: './jot-users-details-layout.component.html',
  styleUrls: ['./jot-users-details-layout.component.css']
})
export class JotUsersDetailsLayoutComponent implements OnInit {

  maximize:boolean=false
  maximizer_show:boolean=false;
  maximizer_hide:boolean=false;
  maximizeWindow(){
    this.maximize=true
    this.maximizer_hide=false
    this.maximizer_show=true
  }
  minimizeWindow(){
    this.maximize=false
    this.maximizer_hide=true
    this.maximizer_show=false
  }
  defaultValue(){
    this.maximize=false
    this.maximizer_hide=true
    this.maximizer_show=false
  }


  submoduleId: any;
  constructor(
    public permission: PermissionsService,
    public general: GeneralService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id2');
    this.defaultValue()
  }

}
