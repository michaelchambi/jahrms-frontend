import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-designation-layout',
  templateUrl: './designation-layout.component.html',
  styleUrls: ['./designation-layout.component.css']
})
export class DesignationLayoutComponent {

  submoduleId: any;
  constructor(
    private activeRoute: ActivatedRoute,
    public permission: PermissionsService,
    public general: GeneralService,
  ) { }

  ngOnInit(): void {
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
  }
}
