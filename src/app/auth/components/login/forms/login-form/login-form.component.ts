import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../../../services/auth/auth.service';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service';
import { AnnouncemntService } from '../../../../../services/announcement/announcemnt.service';
import { environment } from '../../../../../../environments/environment';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  myUrl:any
  en_message: any;
  sw_message: any;
  secretKey: any;
  token: any;
  id: any;
  name: any;
  email: any;

  data = {
    email: '',
    password: '',
  }

  bfrsigin: boolean = true;
  signing:boolean = false;
  announcementList: any;

  constructor(
    public general: GeneralService,
    public script: ScriptConfigService,
    private auth: AuthService,
    private announcement:AnnouncemntService, 
    private route: Router,
  ) { }

  // <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>


public concatenator='hrm-storage-files/announcement/'
  public API_URL = environment.API_URL;
  ngOnInit(): void {  
   this.getAnnouncement() ;
  }
  // getSlider(){
  //   this.staffdata.getSlider().subscribe(
  //       response => {
  //         this.selectedFile = response.staffImage;
  //         this.slideContents=response; 
  //       }
  //     );
  // }
//API_URL+'/'+concatenator+annoucement_folder+announcement_image
  //http://localhost:8000/jahrm-connect/api/v1/hrm-storage-files/announcement/jot-9CPY6G9P/jot-ikvk27.png
  //http://localhost:8000/jahrm-connect/api/v1/hrm-storage-files/announcement/jot-CSUXU069/jot-qududy.jpg
  // getAnnouncement() {
  //   this.general.bfrcreating = false;
  //   this.general.creating = true;
  //   this.announcement.getAnnouncements().subscribe(
  //     res => {
  //       this.announcementList = res;
  //       this.script.datatable();
  //       this.general.creating = false;
  //       this.general.bfrcreating = true;
  //     },
  //     err => {
        
  //       this.general.creating = false;
  //       this.general.bfrcreating = true;
  //       this.script.errorAlert(err.error.sw_message);
  //       if (err.error.token == 0) {
  //         this.general.encryptUrl(this.route.url);
  //         this.route.navigate(['/restore-session']);
  //       }
  //     }
  //   );
  // }

  getAnnouncement() {
    this.announcement.getfreeAnnouncements().subscribe(
      res => {
        this.announcementList = res;
        this.script.datatable();
      },
      err => {
        this.script.errorAlert(err.error.sw_message);
        if (err.error.token == 0) {
          this.general.encryptUrl(this.route.url);
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }



  login() {
    // this.general.bfrcreating = false;
    // this.general.creating = true;

    this.bfrsigin = false;
    this.signing = true;
    this.auth.login(this.data).subscribe(
      res => {
        // this.general.creating = false;
        // this.general.bfrcreating = true;

        this.bfrsigin = true;
        this.signing = false;

        //============================================
        //data Encrytption
        //============================================

        this.general.encryptToken(res.data.accessToken);
        this.general.encryptId(res.data.id);
        sessionStorage.setItem('email', res.data.email);
        sessionStorage.setItem('name', res.data.name);
        sessionStorage.setItem('myrole', res.data.staff_role);

        if (res.data.first_login == true) {
          this.sw_message = "Tafadhali badili neno la siri";
          this.en_message = "Kindly change your password";
          this.script.successAlert(this.sw_message)
          this.route.navigate(['change-password/' + res.data.uid]);
        }
        if (res.data.first_login == false) {
          this.route.navigate(['/home']);
          this.script.successAlert(res.sw_message)
        }


      },
      err => {
        // this.general.creating = false;
        // this.general.bfrcreating = true;
        this.bfrsigin = true;
        this.signing = false;
        this.script.errorAlert(err.error.sw_message);
      }
    );

  }
}
