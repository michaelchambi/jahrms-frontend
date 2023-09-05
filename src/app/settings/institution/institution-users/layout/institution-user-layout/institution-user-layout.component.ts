import { Component, OnInit } from '@angular/core';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { GeneralService } from '../../../../../services/general/general.service';

@Component({
  selector: 'app-institution-user-layout',
  templateUrl: './institution-user-layout.component.html',
  styleUrls: ['./institution-user-layout.component.css']
})
export class InstitutionUserLayoutComponent implements OnInit {


  constructor(
    public permission: PermissionsService,
    public general: GeneralService,
  ) { }

  ngOnInit(): void {
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
  }


}
