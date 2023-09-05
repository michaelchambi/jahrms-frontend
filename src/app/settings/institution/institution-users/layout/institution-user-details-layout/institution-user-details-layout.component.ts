import { Component, OnInit } from '@angular/core';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { GeneralService } from '../../../../../services/general/general.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-institution-user-details-layout',
  templateUrl: './institution-user-details-layout.component.html',
  styleUrls: ['./institution-user-details-layout.component.css']
})
export class InstitutionUserDetailsLayoutComponent implements OnInit {

  submoduleId: any;
  constructor(
    public permission: PermissionsService,
    public general: GeneralService,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id2');
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
  }
}
