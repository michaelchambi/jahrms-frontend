import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';

import { Router } from '@angular/router';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
@Component({
  selector: 'app-jot-info-view',
  templateUrl: './jot-info-view.component.html',
  styleUrls: ['./jot-info-view.component.css']
})
export class JotInfoViewComponent implements OnInit {

  info: any;
  showModal: boolean = false;
  constructor(
    public general: GeneralService,
    
    private route: Router,
    public permission: PermissionsService,
  ) { }

  ngOnInit(): void {
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
  }


  openModal() {
    this.showModal = true;
  }

}
