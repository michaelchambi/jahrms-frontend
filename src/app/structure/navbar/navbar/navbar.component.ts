import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { GeneralService } from '../../../services//general/general.service';
import { PermissionsService } from '../../../services/permissions/permissions.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  labelName: any
  my_uid: any;
  constructor(
    public auth: AuthService,
    public general: GeneralService,
    public permission: PermissionsService,
  ) { }

  ngOnInit(): void {
    this.labelName = sessionStorage.getItem("name")
    this. my_uid=sessionStorage.getItem('id')
    this.permission.module_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this.permission.submodule_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
  }

}
