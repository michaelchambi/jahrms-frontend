import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { InfoModule } from './info/info.module';
import { HomeModule } from './home/home.module';
import { TransferModule} from './transfer/transfer.module'
import { EmployeeDetailsModule } from './employee-detail/employee-details.module';
import { DesignationManagementModule } from './designation-management/designation-management.module'
import { LeaveModule } from './leave/leave/leave.module';
import { NgChartsModule } from 'ng2-charts';
import { JobModule } from './job-list/job.module'
import { SettingsModule } from './settings/settings.module';
@NgModule({
  declarations: [
    AppComponent,

   
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AuthModule,
    InfoModule,
    HomeModule,
    EmployeeDetailsModule,
    DesignationManagementModule,
    LeaveModule,
    TransferModule,
    ReactiveFormsModule,
    FormsModule,
    JobModule,
    SettingsModule,





    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 5000, // 5 seconds
      progressBar: true,
    }),
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
