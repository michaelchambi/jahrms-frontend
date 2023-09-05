import { Component, OnInit } from '@angular/core';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { GeneralService } from '../../../../../services/general/general.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-institution-user-layout',
  templateUrl: './add-institution-user-layout.component.html',
  styleUrls: ['./add-institution-user-layout.component.css']
})
export class AddInstitutionUserLayoutComponent implements OnInit {

  submoduleId: any;
  constructor(
    public permission: PermissionsService,
    public general: GeneralService,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id');
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
  }
}
