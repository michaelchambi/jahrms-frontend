import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';

@Component({
  selector: 'app-view-employee-trensfer-details-layout',
  templateUrl: './view-employee-trensfer-details-layout.component.html',
  styleUrls: ['./view-employee-trensfer-details-layout.component.css']
})
export class ViewEmployeeTrensferDetailsLayoutComponent {
  userList: any;

  constructor(
    public permission: PermissionsService,
    public general: GeneralService,
   
  ) { }

  ngOnInit(): void {
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
  }
  
 
}
