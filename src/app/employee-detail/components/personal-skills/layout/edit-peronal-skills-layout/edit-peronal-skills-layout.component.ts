
import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-peronal-skills-layout',
  templateUrl: './edit-peronal-skills-layout.component.html',
  styleUrls: ['./edit-peronal-skills-layout.component.css']
})
export class EditPeronalSkillsLayoutComponent {

  uid: any;
  submoduleId: any;
  constructor(
    private activeRoute: ActivatedRoute,
    public permission: PermissionsService,
    public general: GeneralService,
  ) { }

  ngOnInit(): void {
    this.uid = this.activeRoute.snapshot.paramMap.get('id')
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id2')
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
  }

}

