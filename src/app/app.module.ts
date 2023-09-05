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
import { EmployeeDetailsModule } from './employee-detail/employee-details.module';
import { LeaveModule } from './leave/leave/leave.module';
import { NgChartsModule } from 'ng2-charts';
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
    LeaveModule,
    SettingsModule,
    ReactiveFormsModule,
    FormsModule,





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
