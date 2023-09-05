import { Component, OnInit } from '@angular/core';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { GeneralService } from '../../../../../services/general/general.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-role-permission-layout',
  templateUrl: './role-permission-layout.component.html',
  styleUrls: ['./role-permission-layout.component.css']
})
export class RolePermissionLayoutComponent implements OnInit {

  submoduleId: any;
  data = {
    id: '',
    name: ''
  }
 
  constructor(
    public permission: PermissionsService,
    private route: Router,
    private activeRoute: ActivatedRoute,
    public general: GeneralService,
  ) { }

  ngOnInit(): void {
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id2');
    this.showRole(this.activeRoute.snapshot.paramMap.get('id'));
  
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
  }


 
  showRole(id: any) {
    this.data.id = id;

    this.permission.showRoles(this.data).subscribe({
      next: (res: any) => {
        this.data.name = res.data?.name;
      },
      error: (err: any) => {
        if (err.error.token == 0) {
          sessionStorage.setItem('current_url', this.route.url)
          this.route.navigate(['/restore-session']);
        }
      }
    })
  }
}
