import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'
import { AnnouncemntService } from '../../../../../services/announcement/announcemnt.service';

@Component({
  selector: 'app-add-zone-form',
  templateUrl: './add-zone-form.component.html',
  styleUrls: ['./add-zone-form.component.css']
})
export class AddZoneFormComponent {


  selectedFile: any;
  sub_moduleId:any;
  messageError: any;
  id: any;
  successMessage: any;
  errorMessage: any;
  appError: boolean = false;
  appSuccess: boolean = false;
  addUserError: boolean = false;
  addUserSuccess: boolean = false;
  bfrcreating: boolean = true;
  creating: boolean = false;

  announcement_details={description:'',fileUrl:'',user_id:''}
  submoduleId: any;
  my_id: any;

  constructor(
    public general: GeneralService,
    public permission: PermissionsService,
    public script: ScriptConfigService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private announcement:AnnouncemntService
  ) { }

  ngOnInit(): void {
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id')
    this.id= sessionStorage.getItem("id");
    
  }

  fileUpload(e: any) {
    this.selectedFile = e.target.files[0];
  }

  registerAnnouncement() {
    this.bfrcreating = false;
    this.creating = true;
    let formData = new FormData();
    this.my_id=this.general.decryptionId(this.id);
    this.announcement_details.user_id=this.my_id;
    formData.append('description', this.announcement_details.description);
    formData.append('fileUrl', this.selectedFile);
    formData.append('user_id', this.announcement_details.user_id);
    this.announcement.addAnnouncement(formData).subscribe(
      res => {
        this.appSuccess = true;
        this.successMessage = res.message;
        this.router.navigate(['/announcement/' + this.submoduleId]);

      },

      err => {
        this.appError = true;
        this.bfrcreating = true;
        this.creating = false;
        this.messageError = err.error.message;
        if (err.error.token == 0) {
          localStorage.setItem('token', err.error.token);
        }
      }
    );


   }




// uploadImage() {
    
//     this.announcement_details.fileUrl=this.selectedFile
//     let formData = new FormData();
//     formData.append('description', this.announcement_details.announcement_description );
//     formData.append('fileUrl', this.selectedFile);

//     this.announcement.addAnnouncement(formData).subscribe(
//       result=>{
//         this.id = this.activeRoute.snapshot.paramMap.get('id2');
//         this.router.navigate(['/add-announcement/'+this.activeRoute.snapshot.paramMap.get('id')+'/'+this.id]);
        
//       },
//       error=>{
//         console.log('error', error);
//         if(error.error.token == 0){
//           localStorage.setItem('token',error.error.token);
//         }
//       }
//     );
    

//   }
}


