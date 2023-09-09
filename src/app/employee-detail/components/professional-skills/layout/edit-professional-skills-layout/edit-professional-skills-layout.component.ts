import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'

@Component({
  selector: 'app-edit-professional-skills-layout',
  templateUrl: './edit-professional-skills-layout.component.html',
  styleUrls: ['./edit-professional-skills-layout.component.css']
})
export class EditProfessionalSkillsLayoutComponent {



  data = {
    uid: ''
  }

  submoduleId: any;
  constructor(
    public general: GeneralService,
    public permission: PermissionsService,
    public script: ScriptConfigService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id2');
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this.permission.submodule(this.activeRoute.snapshot.paramMap.get('id'));
  }




}
