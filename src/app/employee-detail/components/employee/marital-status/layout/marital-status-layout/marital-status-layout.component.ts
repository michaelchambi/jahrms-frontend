import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../../services/permissions/permissions.service';

@Component({
  selector: 'app-marital-status-layout',
  templateUrl: './marital-status-layout.component.html',
  styleUrls: ['./marital-status-layout.component.css']
})
export class MaritalStatusLayoutComponent {


  userList: any;

  constructor(
    public permission: PermissionsService,
    public general: GeneralService,
   
  ) { }

  ngOnInit(): void {
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
  }
  
 
}
