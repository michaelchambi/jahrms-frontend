import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
@Component({
  selector: 'app-jot-roles-layout',
  templateUrl: './jot-roles-layout.component.html',
  styleUrls: ['./jot-roles-layout.component.css']
})
export class JotRolesLayoutComponent implements OnInit {

  constructor(
    public permission: PermissionsService,
    public general: GeneralService,
  ) { }

  ngOnInit(): void {
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
  }
}
