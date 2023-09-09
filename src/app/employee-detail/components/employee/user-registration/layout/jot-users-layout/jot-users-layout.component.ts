import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../../services/permissions/permissions.service';

@Component({
  selector: 'app-jot-users-layout',
  templateUrl: './jot-users-layout.component.html',
  styleUrls: ['./jot-users-layout.component.css']
})
export class JotUsersLayoutComponent implements OnInit {
  userList: any;

  constructor(
    public permission: PermissionsService,
    public general: GeneralService,
   
  ) { }

  ngOnInit(): void {
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
  }
  
 
}
