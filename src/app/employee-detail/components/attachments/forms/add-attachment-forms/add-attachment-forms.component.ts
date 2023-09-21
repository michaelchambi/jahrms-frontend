import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'
import { AttachmentService } from '../../../../../services/attachment/attachment.service';

@Component({
  selector: 'app-add-attachment-forms',
  templateUrl: './add-attachment-forms.component.html',
  styleUrls: ['./add-attachment-forms.component.css']
})
export class AddAttachmentFormsComponent {


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

  attachment_details={description:'',attachment_name:'',user_id:''}
  submoduleId: any;
  my_id: any;

  constructor(
    public general: GeneralService,
    public permission: PermissionsService,
    public script: ScriptConfigService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private attachment:AttachmentService
  ) { }

  ngOnInit(): void {
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id')
    this.id= sessionStorage.getItem("id");
    
  }

  fileUpload(e: any) {
    this.selectedFile = e.target.files[0];
  }

  registerAttachment() {
    this.bfrcreating = false;
    this.creating = true;
    let formData = new FormData();
    this.my_id=this.general.decryptionId(this.id);
    this.attachment_details.user_id=this.my_id;


    // const attachment_name = req.body.name;
    // const description = req.body.attachment_description;
    // const user_id = req.body.user_id;


    formData.append('attachment_description', this.attachment_details.description);
    formData.append('name', this.attachment_details.attachment_name);
    formData.append('user_id', this.attachment_details.user_id);
    this.attachment.addAttachment(formData).subscribe(
      res => {
        this.appSuccess = true;
        this.successMessage = res.message;
        this.router.navigate(['/attachments/' + this.submoduleId]);
        this.general.bfrcreating = true;
        this.general.creating = false;
        this.general.successMessage(res.sw_message, (e: any) => {
          if (e) {
            window.location.reload();
          }

        });

      },

      err => {
        this.appError = true;
        this.bfrcreating = true;
        this.creating = false;
        this.messageError = err.error.message;
        this.general.errorMessage(err.error.sw_message, (e: any) => {
          if (e) {
            window.location.reload();
          }

        });
       
        if (err.error.token == 0) {
          localStorage.setItem('token', err.error.token);
        }
      }
    );


   }


}



