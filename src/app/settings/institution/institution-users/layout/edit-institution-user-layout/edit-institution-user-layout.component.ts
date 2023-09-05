import { Component, OnInit } from '@angular/core';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { GeneralService } from '../../../../../services/general/general.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-institution-user-layout',
  templateUrl: './edit-institution-user-layout.component.html',
  styleUrls: ['./edit-institution-user-layout.component.css']
})
export class EditInstitutionUserLayoutComponent implements OnInit {

  submoduleId: any;
  id: any;
  constructor(
    public permission: PermissionsService,
    public general: GeneralService,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id2');
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
  }
}
