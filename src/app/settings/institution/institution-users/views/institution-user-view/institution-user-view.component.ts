import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';

import { UsersService } from '../../../../../services/users/users.service';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'
import { ActivatedRoute, Router } from '@angular/router';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';

@Component({
  selector: 'app-institution-user-view',
  templateUrl: './institution-user-view.component.html',
  styleUrls: ['./institution-user-view.component.css']
})
export class InstitutionUserViewComponent implements OnInit {

  submoduleId: any;
  data = {
    remove_reason: ''
  }
  constructor(
    public general: GeneralService,
    
    public users: UsersService,
    public script: ScriptConfigService,
    private route: Router,
    private activeRoute: ActivatedRoute,
    public permission: PermissionsService,
  ) { }

  ngOnInit(): void {
    this.users.organizationUserList(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id');
  }


}
