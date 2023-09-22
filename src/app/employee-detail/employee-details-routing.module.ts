import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/auth/auth.guard';

import { CadreLayoutComponent } from '../employee-detail/components/cadre/layout/cadre-layout/cadre-layout.component';
import { AddCadreLayoutComponent } from '../employee-detail/components/cadre/layout/add-cadre-layout/add-cadre-layout.component';
import { EditCadreLayoutComponent } from '../employee-detail/components/cadre/layout/edit-cadre-layout/edit-cadre-layout.component';
import { DesignationLayoutComponent } from '../employee-detail/components/designation/layout/designation-layout/designation-layout.component';
import { AddDesignationLayoutComponent } from '../employee-detail/components/designation/layout/add-designation-layout/add-designation-layout.component';
import { EditDesignationLayoutComponent } from '../employee-detail/components/designation/layout/edit-designation-layout/edit-designation-layout.component';
import { BankLayoutComponent } from './components/bank/layout/bank-layout/bank-layout.component';
import { EditBankLayoutComponent } from './components/bank/layout/edit-bank-layout/edit-bank-layout.component';
import { DepartmentLayoutComponent } from './components/department/layout/department-layout/department-layout.component';
import { AddDepartmentLayoutComponent } from './components/department/layout/add-department-layout/add-department-layout.component';
import { EditDepartmentLayoutComponent } from './components/department/layout/edit-department-layout/edit-department-layout.component';
import { EducationlLevelLayoutComponent } from './components/education-level/layout/educationl-level-layout/educationl-level-layout.component';
import { AddEducationlLevelLayoutComponent } from './components/education-level/layout/add-educationl-level-layout/add-educationl-level-layout.component';
import { EditEducationLevelLayoutComponent } from './components/education-level/layout/edit-education-level-layout/edit-education-level-layout.component';
import { AddZoneLayoutComponent } from './components/zone/layout/add-zone-layout/add-zone-layout.component';
import { EditZoneLayoutComponent } from './components/zone/layout/edit-zone-layout/edit-zone-layout.component';
import { ZoneLayoutComponent } from './components/zone/layout/zone-layout/zone-layout.component';
import { CourtLayoutComponent } from './components/courts/layout/court-layout/court-layout.component';
import { AddCourtLayoutComponent } from './components/courts/forms/add-court-layout/add-court-layout.component';
import { EditCourtLayoutComponent } from './components/courts/layout/edit-court-layout/edit-court-layout.component';
import { CourtLevelLayoutComponent } from './components/court-level/layout/court-level-layout/court-level-layout.component';
import { AddCourtLevelLayoutComponent } from './components/court-level/layout/add-court-level-layout/add-court-level-layout.component';
import { EditCourtLevelLayoutComponent } from './components/court-level/layout/edit-court-level-layout/edit-court-level-layout.component';
import { NonJudicialWorkStationLayoutComponent } from './components/non-judicial-work-station/layout/non-judicial-work-station-layout/non-judicial-work-station-layout.component';
import { AddNonJudicialWorkStationLayoutComponent } from './components/non-judicial-work-station/layout/add-non-judicial-work-station-layout/add-non-judicial-work-station-layout.component';
import { EditNonJudicialWorkStationLayoutComponent } from './components/non-judicial-work-station/layout/edit-non-judicial-work-station-layout/edit-non-judicial-work-station-layout.component';
import { DependantTypeLayoutComponent } from './components/dependant-type/layout/dependant-type-layout/dependant-type-layout.component';
import { AddDependantTypeLayoutComponent } from './components/dependant-type/layout/add-dependant-type-layout/add-dependant-type-layout.component';
import { EditDependantTypeLayoutComponent } from './components/dependant-type/layout/edit-dependant-type-layout/edit-dependant-type-layout.component';
import { QualificationLayoutComponent } from './components/qualification/layout/qualification-layout/qualification-layout.component';
import { AddQualificationLayoutComponent } from './components/qualification/layout/add-qualification-layout/add-qualification-layout.component';
import { EditQualificationLayoutComponent } from './components/qualification/layout/edit-qualification-layout/edit-qualification-layout.component';
import { EditQualificationGradeLayoutComponent } from './components/qualification-grade/layout/edit-qualification-grade-layout/edit-qualification-grade-layout.component';
import { AddQualificationGradeLayoutComponent } from './components/qualification-grade/layout/add-qualification-grade-layout/add-qualification-grade-layout.component';
import { QualificationGradeLayoutComponent } from './components/qualification-grade/layout/qualification-grade-layout/qualification-grade-layout.component';
import { BankDetailsLayoutComponent } from './components/bank-details/layout/bank-details-layout/bank-details-layout.component';
import { AddBankDetailsLayoutComponent } from './components/bank-details/layout/add-bank-details-layout/add-bank-details-layout.component';
import { EditBankDetailsLayoutComponent } from './components/bank-details/layout/edit-bank-details-layout/edit-bank-details-layout.component';
import { DependantDetailsLayoutComponent } from './components/dependant-details/layout/dependant-details-layout/dependant-details-layout.component';
import { AddDependantDetailsLayoutComponent } from './components/dependant-details/layout/add-dependant-details-layout/add-dependant-details-layout.component';
import { EditDependantDetailsLayoutComponent } from './components/dependant-details/layout/edit-dependant-details-layout/edit-dependant-details-layout.component';
import { EducationDetailsLayoutComponent } from './components/education-details/layout/education-details-layout/education-details-layout.component';
import { AddEducationDetailsLayoutComponent } from './components/education-details/layout/add-education-details-layout/add-education-details-layout.component';
import { EditEducationDetailsLayoutComponent } from './components/education-details/layout/edit-education-details-layout/edit-education-details-layout.component';
import { ProfessionalSkillsLayoutComponent } from './components/professional-skills/layout/professional-skills-layout/professional-skills-layout.component';
import { AddProfessionalSkillsLayoutComponent } from './components/professional-skills/layout/add-professional-skills-layout/add-professional-skills-layout.component';
import { EditProfessionalSkillsLayoutComponent } from './components/professional-skills/layout/edit-professional-skills-layout/edit-professional-skills-layout.component';
import { PeronalSkillsLayoutComponent } from './components/personal-skills/layout/peronal-skills-layout/peronal-skills-layout.component';
import { AddPeronalSkillsLayoutComponent } from './components/personal-skills/layout/add-peronal-skills-layout/add-peronal-skills-layout.component';
import { EditPeronalSkillsLayoutComponent } from './components/personal-skills/layout/edit-peronal-skills-layout/edit-peronal-skills-layout.component';
import { NextOfKinLayoutComponent } from './components/next-of-kin/layout/next-of-kin-layout/next-of-kin-layout.component';
import { AddNextOfKinLayoutComponent } from './components/next-of-kin/layout/add-next-of-kin-layout/add-next-of-kin-layout.component';
import { EditNextOfKinLayoutComponent } from './components/next-of-kin/layout/edit-next-of-kin-layout/edit-next-of-kin-layout.component';
import { RegionLayoutComponent } from './components/region/layout/region-layout/region-layout.component';
import { AddRegionLayoutComponent } from './components/region/layout/add-region-layout/add-region-layout.component';
import { EditRegionLayoutComponent } from './components/region/layout/edit-region-layout/edit-region-layout.component';
import { DistrictLayoutComponent } from './components/districts/layout/district-layout/district-layout.component';
import { AddDistrictLayoutComponent } from './components/districts/layout/add-district-layout/add-district-layout.component';
import { EditDistrictLayoutComponent } from './components/districts/layout/edit-district-layout/edit-district-layout.component';
import { UnitLayoutComponent } from './components/unit/layout/unit-layout/unit-layout.component';
import { AddUnitLayoutComponent } from './components/unit/layout/add-unit-layout/add-unit-layout.component';
import { EditUnitLayoutComponent } from './components/unit/layout/edit-unit-layout/edit-unit-layout.component';
import { SectionLayoutComponent } from './components/section/layout/section-layout/section-layout.component';
import { AddSectionLayoutComponent } from './components/section/layout/add-section-layout/add-section-layout.component';
import { EditSectionLayoutComponent } from './components/section/layout/edit-section-layout/edit-section-layout.component';
import { LeaveTypeLayoutComponent } from './components/leave-type/layout/leave-type-layout/leave-type-layout.component';
import { AddLeaveTypeLayoutComponent } from './components/leave-type/layout/add-leave-type-layout/add-leave-type-layout.component';
import { EditLeaveTypeLayoutComponent } from './components/leave-type/layout/edit-leave-type-layout/edit-leave-type-layout.component';
import { JotUsersLayoutComponent } from './components/employee/user-registration/layout/jot-users-layout/jot-users-layout.component';
import { AddJotUsersLayoutComponent } from './components/employee/user-registration/layout/add-jot-users-layout/add-jot-users-layout.component';
import { EditJotUsersLayoutComponent } from './components/employee/user-registration/layout/edit-jot-users-layout/edit-jot-users-layout.component';
import { JotUsersDetailsLayoutComponent } from './components/employee/user-registration/layout/jot-users-details-layout/jot-users-details-layout.component';
import { AttachmentLayoutComponent } from './components/attachments/layout/attachment-layout/attachment-layout.component';
import { EditAttachmentLayoutComponent } from './components/attachments/layout/edit-attachment-layout/edit-attachment-layout.component';
import { MaritalStatusLayoutComponent } from './components/employee/marital-status/layout/marital-status-layout/marital-status-layout.component';
import { ProfileLayoutComponent } from '../employee-detail/components/profile/layout/profile-layout/profile-layout.component';
import { EditProfileLayoutComponent } from '../employee-detail/components/profile/layout/edit-profile-layout/edit-profile-layout.component';
import { MyRetirementLayoutComponent } from './components/retirement/layout/my-retirement-layout/my-retirement-layout.component';
import { EmployeeRetirementLayoutComponent } from './components/retirement/layout/employee-retirement-layout/employee-retirement-layout.component';



const routes: Routes = [

    //======================================================================================
  //  UUSER DETAILS ROUTES
//======================================================================================
  {path: 'employee-details/:id', component: JotUsersLayoutComponent,title: 'Watumiaji',canActivate: [AuthGuard]},
  {path: 'add-jot-setting-user/:id', component: AddJotUsersLayoutComponent,title: 'Submit mtumiaji',canActivate: [AuthGuard]},
  {path: 'edit-jot-setting-user/:id/:id2',component: EditJotUsersLayoutComponent, title: 'Badili taarifa za mtumiaji',canActivate: [AuthGuard]},
  { path: 'user/:id/:id2', component: JotUsersDetailsLayoutComponent, title: 'Employee Details',canActivate: [AuthGuard]},
  

  //======================================================================================
  //  DEPARTMENT DETAILS ROUTES
  //======================================================================================
 
  { path: 'departments/:id', component: DepartmentLayoutComponent,title: 'Kurugenzi', canActivate: [AuthGuard]},
  { path: 'add-departments/:id', component: AddDepartmentLayoutComponent,title: 'Ongeza Kurugenzi', canActivate: [AuthGuard]},
  { path: 'edit-departments/:id', component: EditDepartmentLayoutComponent,title: 'Hariri Kurugenzi', canActivate: [AuthGuard]},

   //======================================================================================
  //  UNIT DETAILS ROUTES
  //======================================================================================
  { path: 'unit/:id', component:UnitLayoutComponent ,title: 'Kurugenzi', canActivate: [AuthGuard]},
  { path: 'add-unit/:id', component:  AddUnitLayoutComponent,title: 'Ongeza Kurugenzi', canActivate: [AuthGuard]},
  { path: 'edit-unit/:id', component: EditUnitLayoutComponent,title: 'Hariri Kurugenzi', canActivate: [AuthGuard]},

  //======================================================================================
  //  DESIGNATION ROUTES
  //======================================================================================
  { path: 'designation/:id', component: DesignationLayoutComponent,title: 'Cheo', canActivate: [AuthGuard]},
  { path: 'add-designation/:id', component: AddDesignationLayoutComponent,title: 'Ongeza Cheo', canActivate: [AuthGuard]},
  { path: 'edit-designation/:id', component: EditDesignationLayoutComponent,title: 'Hariri Cheo', canActivate: [AuthGuard]},
   
    //======================================================================================
  //  DESIGNATION ROUTES
  //======================================================================================
  { path: 'cadre/:id', component: CadreLayoutComponent,title: 'Cheo', canActivate: [AuthGuard]},
  { path: 'add-cadre/:id', component: AddCadreLayoutComponent,title: 'Ongeza Cheo', canActivate: [AuthGuard]},
  { path: 'edit-cadre/:id', component: EditCadreLayoutComponent,title: 'Hariri Cheo', canActivate: [AuthGuard]},
   

  //======================================================================================
  //  EDUCATION LEVEL DETAILS ROUTES
  //======================================================================================
 
  { path: 'education-level-details/:id', component: EducationlLevelLayoutComponent,title: 'Kiwango cha Elimu', canActivate: [AuthGuard]},
  { path: 'add-education-level-details/:id', component: AddEducationlLevelLayoutComponent,title: 'Ongeza Kiwango cha Elimu', canActivate: [AuthGuard]},
  { path: 'edit-education-level-details/:id', component:  EditEducationLevelLayoutComponent,title: 'Hariri KKiwango cha Elimu', canActivate: [AuthGuard]},


    //======================================================================================
  //  EDUCATION DETAILS ROUTES
  //======================================================================================
  { path: 'education-details/:id', component: EducationDetailsLayoutComponent,title: 'Taarifa za Elimu', canActivate: [AuthGuard]},
  { path: 'add-education-details/:id', component: AddEducationDetailsLayoutComponent,title: 'Ongeza Taarifa za Elimu', canActivate: [AuthGuard]},
  { path: 'edit-education-details/:id', component: EditEducationDetailsLayoutComponent,title: 'Hariri Taarifa za Elimu', canActivate: [AuthGuard]},

  //======================================================================================
  //  BANK ROUTES
  //======================================================================================
 
  { path: 'bank/:id', component: BankLayoutComponent,title: 'Benki', canActivate: [AuthGuard]},
  { path: 'edit-bank/:id', component: EditBankLayoutComponent,title: 'hariri benki', canActivate: [AuthGuard]},
 
  //======================================================================================
  //  DEPENDANT TYPE DETAILS ROUTES
  //======================================================================================
  { path: 'dependant-types/:id', component:   DependantTypeLayoutComponent ,title: 'Aina za Wategemezi', canActivate: [AuthGuard]},
  { path: 'add-dependant-type/:id', component:  AddDependantTypeLayoutComponent,title: 'Ongeza Aina za Wategemezi', canActivate: [AuthGuard]},
  { path: 'edit-dependant-type/:id', component: EditDependantTypeLayoutComponent,title: 'Hariri Aina za Wategemezi', canActivate: [AuthGuard]},


  //======================================================================================
  //  QUALIFICATION  DETAILS ROUTES
  //======================================================================================
  { path: 'qualification/:id', component:   QualificationLayoutComponent ,title: 'Kurugenzi', canActivate: [AuthGuard]},
  { path: 'add-qualification/:id', component:  AddQualificationLayoutComponent,title: 'Ongeza Kurugenzi', canActivate: [AuthGuard]},
  { path: 'edit-qualification/:id', component: EditQualificationLayoutComponent,title: 'Hariri Kurugenzi', canActivate: [AuthGuard]},

  //======================================================================================
  //  NEXT OF KIN  DETAILS ROUTES
  //======================================================================================
  { path: 'next-of-kins/:id', component:   NextOfKinLayoutComponent ,title: 'Mtu wa Karibu', canActivate: [AuthGuard]},
  { path: 'add-next-of-kin/:id', component:  AddNextOfKinLayoutComponent,title: 'Ongeza Mtu wa Karibu', canActivate: [AuthGuard]},
  { path: 'edit-next-of-kin/:id', component: EditNextOfKinLayoutComponent,title: 'Hariri Mtu wa Karibu', canActivate: [AuthGuard]},

  //======================================================================================
  //  PERSONAL SKILLS  DETAILS ROUTES
  //======================================================================================
  { path: 'personal-skills/:id', component:   PeronalSkillsLayoutComponent ,title: 'Utaalamu binafsi', canActivate: [AuthGuard]},
  { path: 'add-personal-skills/:id', component:  AddPeronalSkillsLayoutComponent,title: 'Ongeza Utaalamu binafsi', canActivate: [AuthGuard]},
  { path: 'edit-personal-skills/:id', component: EditPeronalSkillsLayoutComponent,title: 'Hariri Utaalamu binafsi', canActivate: [AuthGuard]},

  //======================================================================================
  //  PROFESSIONAL SKILLS  DETAILS ROUTES
  //======================================================================================
  { path: 'professional-skills/:id', component:   ProfessionalSkillsLayoutComponent ,title: 'Utaalamu', canActivate: [AuthGuard]},
  { path: 'add-professional-skills/:id', component:  AddProfessionalSkillsLayoutComponent,title: 'Ongeza Utaalamu', canActivate: [AuthGuard]},
  { path: 'edit-professional-skills/:id', component: EditProfessionalSkillsLayoutComponent,title: 'Hariri Utaalamu', canActivate: [AuthGuard]},

//======================================================================================
  //  PROFESSIONAL DETAILS ROUTES
  //======================================================================================
  { path: 'professional/:id', component:   ProfessionalSkillsLayoutComponent ,title: 'Taaluma', canActivate: [AuthGuard]},
  // { path: 'add-professional/:id', component:  AddProfessionalSkillsLayoutComponent,title: 'Ongeza Taaluma', canActivate: [AuthGuard]},
  { path: 'edit-professional/:id', component: EditProfessionalSkillsLayoutComponent,title: 'Hariri Taaluma', canActivate: [AuthGuard]},


   //======================================================================================
  //  DEPENDANT  DETAILS ROUTES
  //======================================================================================
  { path: 'dependants/:id', component:   DependantDetailsLayoutComponent ,title: 'Taarifa za Wategemezi', canActivate: [AuthGuard]},
  { path: 'add-dependant/:id', component:  AddDependantDetailsLayoutComponent,title: 'Ongeza Taarifa za Wategemezi', canActivate: [AuthGuard]},
  { path: 'edit-dependant/:id', component: EditDependantDetailsLayoutComponent,title: 'Hariri Taarifa za Wategemezi', canActivate: [AuthGuard]},

   //======================================================================================
  //  BANK DETAILS ROUTES
  //======================================================================================
  { path: 'bank-details/:id', component:BankDetailsLayoutComponent ,title: 'Kurugenzi', canActivate: [AuthGuard]},
  { path: 'add-bank-details/:id', component:  AddBankDetailsLayoutComponent,title: 'Ongeza Kurugenzi', canActivate: [AuthGuard]},
  { path: 'edit-bank-details/:id', component: EditBankDetailsLayoutComponent,title: 'Hariri Kurugenzi', canActivate: [AuthGuard]},

   //======================================================================================
  //  QUALIFICATION GRADE DETAILS ROUTES
  //======================================================================================
  { path: 'qualification-grades/:id', component:QualificationGradeLayoutComponent ,title: 'Kurugenzi', canActivate: [AuthGuard]},
  { path: 'add-qualification-grade/:id', component:  AddQualificationGradeLayoutComponent,title: 'Ongeza Kurugenzi', canActivate: [AuthGuard]},
  { path: 'edit-qualification-grade/:id', component: EditQualificationGradeLayoutComponent,title: 'Hariri Kurugenzi', canActivate: [AuthGuard]},

  //======================================================================================
  //  QUALIFICATION DETAILS ROUTES
  //======================================================================================
  { path: 'qualifications/:id', component:QualificationLayoutComponent ,title: 'Kurugenzi', canActivate: [AuthGuard]},
  { path: 'add-qualification/:id', component:  AddQualificationLayoutComponent,title: 'Ongeza Kurugenzi', canActivate: [AuthGuard]},
  { path: 'edit-qualification/:id', component: EditQualificationLayoutComponent,title: 'Hariri Kurugenzi', canActivate: [AuthGuard]},


  //======================================================================================
  //  ZONE DETAILS ROUTES
  //======================================================================================
  { path: 'zones/:id', component:ZoneLayoutComponent ,title: 'Nyanda za kimahakama', canActivate: [AuthGuard]},
  { path: 'add-zone/:id', component:  AddZoneLayoutComponent,title: 'Ongeza Nyanda za kimahakama', canActivate: [AuthGuard]},
  { path: 'edit-zone/:id', component: EditZoneLayoutComponent,title: 'Hariri Nyanda za kimahakama', canActivate: [AuthGuard]},


  //======================================================================================
  //  COURTS LEVEL DETAILS ROUTES
  //======================================================================================
  { path: 'court-level/:id', component:CourtLevelLayoutComponent ,title: 'Ngazi za Mahakama', canActivate: [AuthGuard]},
  { path: 'add-court-level/:id', component:  AddCourtLevelLayoutComponent,title: 'Ongeza Ngazi za Mahakama', canActivate: [AuthGuard]},
  { path: 'edit-court-level/:id', component: EditCourtLevelLayoutComponent,title: 'Hariri Ngazi za Mahakama', canActivate: [AuthGuard]},


  //======================================================================================
  //  COURTS LEVEL DETAILS ROUTES
  //======================================================================================
  { path: 'courts/:id', component:CourtLayoutComponent ,title: 'Mahakama', canActivate: [AuthGuard]},
  { path: 'add-court/:id', component:  AddCourtLayoutComponent,title: 'Ongeza Mahakama', canActivate: [AuthGuard]},
  { path: 'edit-court/:id', component: EditCourtLayoutComponent,title: 'Hariri  Mahakama', canActivate: [AuthGuard]},


  //======================================================================================
  //  JUDICIAL WORK STATION DETAILS ROUTES
  //======================================================================================
  { path: 'judicial-work-station/:id', component:CourtLayoutComponent ,title: 'Mahakama', canActivate: [AuthGuard]},
  { path: 'add-judicial-work-station/:id', component:  AddCourtLayoutComponent,title: 'Ongeza Mahakama', canActivate: [AuthGuard]},
  { path: 'edit-judicial-work-station/:id', component: EditCourtLayoutComponent,title: 'Hariri Mahakama', canActivate: [AuthGuard]},

 //======================================================================================
  //  NON JUDICIAL WORK STATION DETAILS ROUTES
  //======================================================================================
  { path: 'non-judicial-work-station/:id', component:NonJudicialWorkStationLayoutComponent ,title: 'Kituo cha Kazi', canActivate: [AuthGuard]},
  { path: 'add-non-judicial-work-station/:id', component:  AddNonJudicialWorkStationLayoutComponent,title: 'Ongeza kituo cha kazi', canActivate: [AuthGuard]},
  { path: 'edit-non-judicial-work-station/:id', component: EditNonJudicialWorkStationLayoutComponent,title: 'Hariri Vituo vya kazi', canActivate: [AuthGuard]},

  //======================================================================================
  //  REGION DETAILS ROUTES
  //======================================================================================
  { path: 'region/:id', component:RegionLayoutComponent ,title: 'Mkoa', canActivate: [AuthGuard]},
  { path: 'add-region/:id', component:  AddRegionLayoutComponent,title: 'Ongeza Mkoa', canActivate: [AuthGuard]},
  { path: 'edit-region/:id', component: EditRegionLayoutComponent,title: 'Hariri Mkoa', canActivate: [AuthGuard]},


  //======================================================================================
  //  DISTRICT DETAILS ROUTES
  //======================================================================================
  { path: 'district/:id', component:DistrictLayoutComponent ,title: 'Wilaya', canActivate: [AuthGuard]},
  { path: 'add-district/:id', component:  AddDistrictLayoutComponent,title: 'Ongeza Wilaya', canActivate: [AuthGuard]},
  { path: 'edit-district/:id', component: EditDistrictLayoutComponent,title: 'Hariri Wilaya', canActivate: [AuthGuard]},

  //======================================================================================
  //  SECTION DETAILS ROUTES
  //======================================================================================
  { path: 'all-sections/:id', component:SectionLayoutComponent ,title: 'Kitengo', canActivate: [AuthGuard]},
  { path: 'add-section/:id', component:  AddSectionLayoutComponent,title: 'Ongeza Kitengo', canActivate: [AuthGuard]},
  { path: 'edit-section/:id', component: EditSectionLayoutComponent,title: 'Hariri Kitengo', canActivate: [AuthGuard]},

//======================================================================================
  //  LEAVE TYPES DETAILS ROUTES
  //======================================================================================
  { path: 'leave-type/:id', component:LeaveTypeLayoutComponent ,title: 'Likizo', canActivate: [AuthGuard]},
  { path: 'add-leave-type/:id', component:  AddLeaveTypeLayoutComponent,title: 'Ongeza Likizo', canActivate: [AuthGuard]},
  { path: 'edit-leave-type/:id', component: EditLeaveTypeLayoutComponent,title: 'Hariri Likizo', canActivate: [AuthGuard]},

//======================================================================================
  //  ATTACHMENTS TYPES DETAILS ROUTES
  //======================================================================================
  { path: 'attachments/:id', component:AttachmentLayoutComponent ,title: 'VIAMBATA', canActivate: [AuthGuard]},
 { path: 'edit-attachment/:id', component: EditAttachmentLayoutComponent,title: 'VIAMBATA', canActivate: [AuthGuard]},

  //======================================================================================
  //  MARITAL STATUS  ROUTES
  //======================================================================================
  { path: 'marital-status/:id', component:MaritalStatusLayoutComponent ,title: 'NDOA', canActivate: [AuthGuard]},
  { path: 'my-profile',component: ProfileLayoutComponent,title: 'Ukurasa wangu',canActivate: [AuthGuard] },
  { path: 'edit-my-profile',component: EditProfileLayoutComponent,title: 'Change Details',canActivate: [AuthGuard]},

 //======================================================================================
  //  MARITAL STATUS  ROUTES
  //======================================================================================
  { path: 'my-retirement',component: MyRetirementLayoutComponent,title: 'Ukurasa wangu',canActivate: [AuthGuard] },
  { path: 'employee-retirement/:id',component: EmployeeRetirementLayoutComponent,title: 'Change Details',canActivate: [AuthGuard]}






];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeDetailsRoutingModule { }
