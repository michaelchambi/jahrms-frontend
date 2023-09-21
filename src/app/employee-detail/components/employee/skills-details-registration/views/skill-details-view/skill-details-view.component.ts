import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../../services/general/general.service';

import { UsersService } from '../../../../../../services/users/users.service';
import { ScriptConfigService } from '../../../../../../services/script-config/script-config.service'
import { ActivatedRoute, Router } from '@angular/router';
import { PermissionsService } from '../../../../../../services/permissions/permissions.service';
import { environment } from '../../../../../../../environments/environment';
@Component({
  selector: 'app-skill-details-view',
  templateUrl: './skill-details-view.component.html',
  styleUrls: ['./skill-details-view.component.css']
})
export class SkillDetailsViewComponent {
  constructor(
    public general: GeneralService,
    
    public users: UsersService,
    public script: ScriptConfigService,
    private route: Router,
    private activeRoute: ActivatedRoute,
    public permission: PermissionsService,
  ) { }

}
