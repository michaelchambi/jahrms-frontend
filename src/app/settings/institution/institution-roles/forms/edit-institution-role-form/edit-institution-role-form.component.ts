import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';


@Component({
  selector: 'app-edit-institution-role-form',
  templateUrl: './edit-institution-role-form.component.html',
  styleUrls: ['./edit-institution-role-form.component.css']
})
export class EditInstitutionRoleFormComponent implements OnInit {

  data = {
    name: ''
  }
  constructor(
    public general: GeneralService,
  ) { }
  ngOnInit(): void {

  }


  editInstitutionRole() {

  }
}
