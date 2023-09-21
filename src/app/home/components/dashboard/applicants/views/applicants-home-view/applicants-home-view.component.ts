import { Component, OnInit } from '@angular/core';
import { PermissionsService } from '../../../../../../services/permissions/permissions.service';
import { GeneralService } from '../../../../../../services/general/general.service';
import { ChartOptions } from 'chart.js';
import { Router } from '@angular/router';
import { UsersService } from '../../../../../../services/users/users.service';



// import { ScriptConfigService } from '../../../services/script-config/script-config.service'


@Component({
  selector: 'app-applicants-home-view',
  templateUrl: './applicants-home-view.component.html',
  styleUrls: ['./applicants-home-view.component.css']
})
export class ApplicantsHomeViewComponent implements OnInit {

  count: any;
  complaint_count: any;
  data = {
    user_id: ''
  }
  totalemployeeDetails: any;
  totalPercentage: any;
 

  constructor(
   
    public permission: PermissionsService,
    public general: GeneralService,
    public users: UsersService,
    public route: Router
  ) { }


  ngOnInit(): void {
    this.permission.module_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this.permission.submodule_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this. getTotalEmployee();


  }


  getTotalEmployee(){
    
    this.users.getAllTotalUsers().subscribe(
            result=>{
             this.totalemployeeDetails=result;
             this.totalPercentage=((parseInt(this.totalemployeeDetails))/(parseInt(this.totalemployeeDetails)))*100
            },
            error=>{
              console.log('error', error);
              if(error.error.token == 0){
                localStorage.setItem('token',error.error.token);
              }
            }
          );
  }








  
  
















}
