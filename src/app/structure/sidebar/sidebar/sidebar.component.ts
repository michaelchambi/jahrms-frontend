import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../services//general/general.service';
import { PermissionsService } from '../../../services/permissions/permissions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ScriptConfigService } from '../../../services/script-config/script-config.service'


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  user_id: any;
  constructor(
    public general: GeneralService,
    public permission: PermissionsService,
    public script: ScriptConfigService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.permission.module_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this.permission.submodule_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
  }



}
