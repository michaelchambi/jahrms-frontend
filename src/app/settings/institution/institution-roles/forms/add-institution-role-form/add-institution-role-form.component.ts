import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';

@Component({
  selector: 'app-add-institution-role-form',
  templateUrl: './add-institution-role-form.component.html',
  styleUrls: ['./add-institution-role-form.component.css']
})
export class AddInstitutionRoleFormComponent implements OnInit {


  data = {
    name: ''
  }
  constructor(
    public general: GeneralService,
  ) { }
  ngOnInit(): void {

  }


  addInstitutionRole() {

  }
}
