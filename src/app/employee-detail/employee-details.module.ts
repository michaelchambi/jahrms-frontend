import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { NgSelectModule } from '@ng-select/ng-select';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeDetailsRoutingModule } from './employee-details-routing.module';
import { StructureModule } from '../structure/structure.module';
import { AddBankFormComponent } from './components/bank/forms/add-bank-form/add-bank-form.component';
import { EditBankFormComponent } from './components/bank/forms/edit-bank-form/edit-bank-form.component';
import { BankViewComponent } from './components/bank/views/bank-view/bank-view.component';
import { BankLayoutComponent } from './components/bank/layout/bank-layout/bank-layout.component';
import { EditBankLayoutComponent } from './components/bank/layout/edit-bank-layout/edit-bank-layout.component';
import { CadreLayoutComponent } from '../employee-detail/components/cadre/layout/cadre-layout/cadre-layout.component';
import { AddCadreLayoutComponent } from '../employee-detail/components/cadre/layout/add-cadre-layout/add-cadre-layout.component';
import { EditCadreLayoutComponent } from '../employee-detail/components/cadre/layout/edit-cadre-layout/edit-cadre-layout.component';
import { EditCadreFormComponent } from '../employee-detail/components/cadre/forms/edit-cadre-form/edit-cadre-form.component';
import { AddCadreFormComponent } from '../employee-detail/components/cadre/forms/add-cadre-form/add-cadre-form.component';
import { CadreViewComponent } from '../employee-detail/components/cadre/views/cadre-view/cadre-view.component';
import { DesignationLayoutComponent } from '../employee-detail/components/designation/layout/designation-layout/designation-layout.component';
import { AddDesignationLayoutComponent } from '../employee-detail/components/designation/layout/add-designation-layout/add-designation-layout.component';
import { EditDesignationLayoutComponent } from '../employee-detail/components/designation/layout/edit-designation-layout/edit-designation-layout.component';
import { EditDesignationFormComponent } from '../employee-detail/components/designation/forms/edit-designation-form/edit-designation-form.component';
import { AddDesignationFormComponent } from '../employee-detail/components/designation/forms/add-designation-form/add-designation-form.component';
import { DesignationViewComponent } from '../employee-detail/components/designation/views/designation-view/designation-view.component';
import { DepartmentLayoutComponent } from './components/department/layout/department-layout/department-layout.component';
import { AddDepartmentLayoutComponent } from './components/department/layout/add-department-layout/add-department-layout.component';
import { EditDepartmentLayoutComponent } from './components/department/layout/edit-department-layout/edit-department-layout.component';
import { EditDepartmentFormsComponent } from './components/department/forms/edit-department-forms/edit-department-forms.component';
import { AddDepartmentFormsComponent } from './components/department/forms/add-department-forms/add-department-forms.component';
import { DepartmentViewComponent } from './components/department/views/department-view/department-view.component';
import { EducationlLevelViewComponent } from './components/education-level/views/educationl-level-view/educationl-level-view.component';
import { EducationlLevelLayoutComponent } from './components/education-level/layout/educationl-level-layout/educationl-level-layout.component';
import { AddEducationlLevelLayoutComponent } from './components/education-level/layout/add-educationl-level-layout/add-educationl-level-layout.component';
import { EditEducationLevelLayoutComponent } from './components/education-level/layout/edit-education-level-layout/edit-education-level-layout.component';
import { EditEducationLevelFormComponent } from './components/education-level/forms/edit-education-level-form/edit-education-level-form.component';
import { AddEducationLevelFormComponent } from './components/education-level/forms/add-education-level-form/add-education-level-form.component';
import { AddZoneFormComponent } from './components/zone/forms/add-zone-form/add-zone-form.component';
import { EditZoneFormComponent } from './components/zone/forms/edit-zone-form/edit-zone-form.component';
import { AddZoneLayoutComponent } from './components/zone/layout/add-zone-layout/add-zone-layout.component';
import { EditZoneLayoutComponent } from './components/zone/layout/edit-zone-layout/edit-zone-layout.component';
import { ZoneLayoutComponent } from './components/zone/layout/zone-layout/zone-layout.component';
import { ZoneViewComponent } from './components/zone/views/zone-view/zone-view.component';
import { CourtLayoutComponent } from './components/courts/layout/court-layout/court-layout.component';
import { AddCourtLayoutComponent } from './components/courts/forms/add-court-layout/add-court-layout.component';
import { EditCourtLayoutComponent } from './components/courts/layout/edit-court-layout/edit-court-layout.component';
import { EditCourtFormsComponent } from './components/courts/forms/edit-court-forms/edit-court-forms.component';
import { AddCourtFormsComponent } from './components/courts/forms/add-court-forms/add-court-forms.component';
import { CourtViewComponent } from './components/courts/views/court-view/court-view.component';
import { CourtLevelLayoutComponent } from './components/court-level/layout/court-level-layout/court-level-layout.component';
import { AddCourtLevelLayoutComponent } from './components/court-level/layout/add-court-level-layout/add-court-level-layout.component';
import { EditCourtLevelLayoutComponent } from './components/court-level/layout/edit-court-level-layout/edit-court-level-layout.component';
import { AddCourtLevelFormComponent } from './components/court-level/forms/add-court-level-form/add-court-level-form.component';
import { EditCourtLevelFormComponent } from './components/court-level/forms/edit-court-level-form/edit-court-level-form.component';
import { CourtLevelViewComponent } from './components/court-level/views/court-level-view/court-level-view.component';
import { NonJudicialWorkStationLayoutComponent } from './components/non-judicial-work-station/layout/non-judicial-work-station-layout/non-judicial-work-station-layout.component';
import { AddNonJudicialWorkStationLayoutComponent } from './components/non-judicial-work-station/layout/add-non-judicial-work-station-layout/add-non-judicial-work-station-layout.component';
import { EditNonJudicialWorkStationLayoutComponent } from './components/non-judicial-work-station/layout/edit-non-judicial-work-station-layout/edit-non-judicial-work-station-layout.component';
import { EditNonJudicialWorkStationFormComponent } from './components/non-judicial-work-station/forms/edit-non-judicial-work-station-form/edit-non-judicial-work-station-form.component';
import { AddNonJudicialWorkStationFormComponent } from './components/non-judicial-work-station/forms/add-non-judicial-work-station-form/add-non-judicial-work-station-form.component';
import { NonJudicialWorkStationViewComponent } from './components/non-judicial-work-station/views/non-judicial-work-station-view/non-judicial-work-station-view.component';
import { DependantTypeLayoutComponent } from './components/dependant-type/layout/dependant-type-layout/dependant-type-layout.component';
import { AddDependantTypeLayoutComponent } from './components/dependant-type/layout/add-dependant-type-layout/add-dependant-type-layout.component';
import { EditDependantTypeLayoutComponent } from './components/dependant-type/layout/edit-dependant-type-layout/edit-dependant-type-layout.component';
import { EditDependantTypeFormComponent } from './components/dependant-type/form/edit-dependant-type-form/edit-dependant-type-form.component';
import { AddDependantTypeFormComponent } from './components/dependant-type/form/add-dependant-type-form/add-dependant-type-form.component';
import { DependantTypeViewComponent } from './components/dependant-type/views/dependant-type-view/dependant-type-view.component';
import { QualificationLayoutComponent } from './components/qualification/layout/qualification-layout/qualification-layout.component';
import { AddQualificationLayoutComponent } from './components/qualification/layout/add-qualification-layout/add-qualification-layout.component';
import { EditQualificationLayoutComponent } from './components/qualification/layout/edit-qualification-layout/edit-qualification-layout.component';
import { EditQualificationFormComponent } from './components/qualification/forms/edit-qualification-form/edit-qualification-form.component';
import { AddQualificationFormComponent } from './components/qualification/forms/add-qualification-form/add-qualification-form.component';
import { EducationLevelViewComponent } from './components/qualification/views/qualification-view/qualification-view.component';
import { EducationLevelGradeViewComponent } from './components/qualification-grade/views/qualification-grade-view/qualification-grade-view.component';
import { AddQualificationGradeFormComponent } from './components/qualification-grade/forms/add-qualification-grade-form/add-qualification-grade-form.component';
import { EditQualificationGradeFormComponent } from './components/qualification-grade/forms/edit-qualification-grade-form/edit-qualification-grade-form.component';
import { EditQualificationGradeLayoutComponent } from './components/qualification-grade/layout/edit-qualification-grade-layout/edit-qualification-grade-layout.component';
import { AddQualificationGradeLayoutComponent } from './components/qualification-grade/layout/add-qualification-grade-layout/add-qualification-grade-layout.component';
import { QualificationGradeLayoutComponent } from './components/qualification-grade/layout/qualification-grade-layout/qualification-grade-layout.component';
import { BankDetailsLayoutComponent } from './components/bank-details/layout/bank-details-layout/bank-details-layout.component';
import { AddBankDetailsLayoutComponent } from './components/bank-details/layout/add-bank-details-layout/add-bank-details-layout.component';
import { EditBankDetailsLayoutComponent } from './components/bank-details/layout/edit-bank-details-layout/edit-bank-details-layout.component';
import { BankDetailsViewComponent } from './components/bank-details/views/bank-details-view/bank-details-view.component';
import { DependantDetailsLayoutComponent } from './components/dependant-details/layout/dependant-details-layout/dependant-details-layout.component';
import { AddDependantDetailsLayoutComponent } from './components/dependant-details/layout/add-dependant-details-layout/add-dependant-details-layout.component';
import { EditDependantDetailsLayoutComponent } from './components/dependant-details/layout/edit-dependant-details-layout/edit-dependant-details-layout.component';
import { AddDependantDetailsViewComponent } from './components/dependant-details/views/add-dependant-details-view/add-dependant-details-view.component';
import { EducationDetailsLayoutComponent } from './components/education-details/layout/education-details-layout/education-details-layout.component';
import { AddEducationDetailsLayoutComponent } from './components/education-details/layout/add-education-details-layout/add-education-details-layout.component';
import { EditEducationDetailsLayoutComponent } from './components/education-details/layout/edit-education-details-layout/edit-education-details-layout.component';
import { EducationDetailsViewComponent } from './components/education-details/views/education-details-view/education-details-view.component';
import { ProfessionalSkillsLayoutComponent } from './components/professional-skills/layout/professional-skills-layout/professional-skills-layout.component';
import { AddProfessionalSkillsLayoutComponent } from './components/professional-skills/layout/add-professional-skills-layout/add-professional-skills-layout.component';
import { EditProfessionalSkillsLayoutComponent } from './components/professional-skills/layout/edit-professional-skills-layout/edit-professional-skills-layout.component';
import { AddProfessionalSkillsFormComponent } from './components/professional-skills/forms/add-professional-skills-form/add-professional-skills-form.component';
import { EditProfessionalSkillsFormComponent } from './components/professional-skills/forms/edit-professional-skills-form/edit-professional-skills-form.component';
import { ProfessionalSkillsViewComponent } from './components/professional-skills/views/professional-skills-view/professional-skills-view.component';
import { PeronalSkillsLayoutComponent } from './components/personal-skills/layout/peronal-skills-layout/peronal-skills-layout.component';
import { AddPeronalSkillsLayoutComponent } from './components/personal-skills/layout/add-peronal-skills-layout/add-peronal-skills-layout.component';
import { EditPeronalSkillsLayoutComponent } from './components/personal-skills/layout/edit-peronal-skills-layout/edit-peronal-skills-layout.component';
import { EditPeronalSkillsFormComponent } from './components/personal-skills/forms/edit-peronal-skills-form/edit-peronal-skills-form.component';
import { AddPeronalSkillsFormComponent } from './components/personal-skills/forms/add-peronal-skills-form/add-peronal-skills-form.component';
import { PeronalSkillsViewComponent } from './components/personal-skills/views/peronal-skills-view/peronal-skills-view.component';
import { NextOfKinLayoutComponent } from './components/next-of-kin/layout/next-of-kin-layout/next-of-kin-layout.component';
import { AddNextOfKinLayoutComponent } from './components/next-of-kin/layout/add-next-of-kin-layout/add-next-of-kin-layout.component';
import { EditNextOfKinLayoutComponent } from './components/next-of-kin/layout/edit-next-of-kin-layout/edit-next-of-kin-layout.component';
import { AddNextOfKinFormComponent } from './components/next-of-kin/forms/add-next-of-kin-form/add-next-of-kin-form.component';
import { EditNextOfKinFormComponent } from './components/next-of-kin/forms/edit-next-of-kin-form/edit-next-of-kin-form.component';
import { NextOfKinViewComponent } from './components/next-of-kin/views/next-of-kin-view/next-of-kin-view.component';
import { RegionLayoutComponent } from './components/region/layout/region-layout/region-layout.component';
import { AddRegionLayoutComponent } from './components/region/layout/add-region-layout/add-region-layout.component';
import { EditRegionLayoutComponent } from './components/region/layout/edit-region-layout/edit-region-layout.component';
import { EditRegionFormComponent } from './components/region/forms/edit-region-form/edit-region-form.component';
import { AddRegionFormComponent } from './components/region/forms/add-region-form/add-region-form.component';
import { AddRegionViewComponent } from './components/region/views/add-region-view/add-region-view.component';
import { DistrictLayoutComponent } from './components/districts/layout/district-layout/district-layout.component';
import { AddDistrictLayoutComponent } from './components/districts/layout/add-district-layout/add-district-layout.component';
import { EditDistrictLayoutComponent } from './components/districts/layout/edit-district-layout/edit-district-layout.component';
import { AddDistrictFormComponent } from './components/districts/forms/add-district-form/add-district-form.component';
import { EditDistrictFormComponent } from './components/districts/forms/edit-district-form/edit-district-form.component';
import { DistrictViewComponent } from './components/districts/views/district-view/district-view.component';
import { UnitLayoutComponent } from './components/unit/layout/unit-layout/unit-layout.component';
import { AddUnitLayoutComponent } from './components/unit/layout/add-unit-layout/add-unit-layout.component';
import { EditUnitLayoutComponent } from './components/unit/layout/edit-unit-layout/edit-unit-layout.component';
import { AddUnitFormComponent } from './components/unit/forms/add-unit-form/add-unit-form.component';
import { EditUnitFormComponent } from './components/unit/forms/edit-unit-form/edit-unit-form.component';
import { UnitViewComponent } from './components/unit/views/unit-view/unit-view.component';
import { SectionLayoutComponent } from './components/section/layout/section-layout/section-layout.component';
import { AddSectionLayoutComponent } from './components/section/layout/add-section-layout/add-section-layout.component';
import { EditSectionLayoutComponent } from './components/section/layout/edit-section-layout/edit-section-layout.component';
import { AddSectionFormComponent } from './components/section/forms/add-section-form/add-section-form.component';
import { EditSectionFormComponent } from './components/section/forms/edit-section-form/edit-section-form.component';
import { SectionViewComponent } from './components/section/views/section-view/section-view.component';
import { LeaveTypeLayoutComponent } from './components/leave-type/layout/leave-type-layout/leave-type-layout.component';
import { AddLeaveTypeLayoutComponent } from './components/leave-type/layout/add-leave-type-layout/add-leave-type-layout.component';
import { EditLeaveTypeLayoutComponent } from './components/leave-type/layout/edit-leave-type-layout/edit-leave-type-layout.component';
import { AddLeaveTypeFormComponent } from './components/leave-type/forms/add-leave-type-form/add-leave-type-form.component';
import { EditLeaveTypeFormComponent } from './components/leave-type/forms/edit-leave-type-form/edit-leave-type-form.component';
import { LeaveTypeViewComponent } from './components/leave-type/views/leave-type-view/leave-type-view.component';
import { JotUsersLayoutComponent } from './components/employee/user-registration/layout/jot-users-layout/jot-users-layout.component';
import { AddJotUsersLayoutComponent } from './components/employee/user-registration/layout/add-jot-users-layout/add-jot-users-layout.component';
import { EditJotUsersLayoutComponent } from './components/employee/user-registration/layout/edit-jot-users-layout/edit-jot-users-layout.component';
import { AddJotUsersFormComponent } from './components/employee/user-registration/forms/add-jot-users-form/add-jot-users-form.component';
import { EditJotUsersFormComponent } from './components/employee/user-registration/forms/edit-jot-users-form/edit-jot-users-form.component';
import { JotUsersViewComponent } from './components/employee/user-registration/views/jot-users-view/jot-users-view.component';
import { JotUsersDetailsViewComponent } from './components/employee/user-registration/views/jot-users-details-view/jot-users-details-view.component';
import { JotUsersDetailsLayoutComponent } from './components/employee/user-registration/layout/jot-users-details-layout/jot-users-details-layout.component';
import { AddEmploymentDetailsFormComponent } from './components/employee/employment-details-registration/forms/add-employment-details-form/add-employment-details-form.component';
import { EditEmploymentDetailsFormComponent } from './components/employee/employment-details-registration/forms/edit-employment-details-form/edit-employment-details-form.component';
import { AddOfficeDetailsFormComponent } from './components/employee/office-details-registration/forms/add-office-details-form/add-office-details-form.component';
import { EditOfficeDetailsFormComponent } from './components/employee/office-details-registration/forms/edit-office-details-form/edit-office-details-form.component';
import { AddNextKinsDetailsFormComponent } from './components/employee/next-of-kin-details-registration/forms/add-next-kins-details-form/add-next-kins-details-form.component';
import { EditNextKinsDetailsFormComponent } from './components/employee/next-of-kin-details-registration/forms/edit-next-kins-details-form/edit-next-kins-details-form.component';
import { EditDependantDetailsFormComponent } from './components/employee/dependant-details-registration/forms/edit-dependant-details-form/edit-dependant-details-form.component';
import { AddDependantDetailsFormComponent } from './components/employee/dependant-details-registration/forms/add-dependant-details-form/add-dependant-details-form.component';
import { AddEducationDetailsFormComponent } from './components/employee/education-details-registration/forms/add-education-details-form/add-education-details-form.component';
import { EditEducationDetailsFormComponent } from './components/employee/education-details-registration/forms/edit-education-details-form/edit-education-details-form.component';
import { EditProfessionalDetailsFormComponent } from './components/employee/professional-details-registration/forms/edit-professional-details-form/edit-professional-details-form.component';
import { AddProfessionalDetailsFormComponent } from './components/employee/professional-details-registration/forms/add-professional-details-form/add-professional-details-form.component';
import { AddSkillsDetailsFormComponent } from './components/employee/skills-details-registration/forms/add-skills-details-form/add-skills-details-form.component';
import { EditSkillsDetailsFormComponent } from './components/employee/skills-details-registration/forms/edit-skills-details-form/edit-skills-details-form.component';
import { EmployeeDetailsRegistrationViewComponent } from './components/employee/employment-details-registration/views/employee-details-registration-view/employee-details-registration-view.component';
import { AttachmentLayoutComponent } from './components/attachments/layout/attachment-layout/attachment-layout.component';
import { EditAttachmentLayoutComponent } from './components/attachments/layout/edit-attachment-layout/edit-attachment-layout.component';
import { AttachmentViewComponent } from './components/attachments/views/attachment-view/attachment-view.component';
import { AddAttachmentFormsComponent } from './components/attachments/forms/add-attachment-forms/add-attachment-forms.component';
import { EditAttachmentFormsComponent } from './components/attachments/forms/edit-attachment-forms/edit-attachment-forms.component';
import { AddEmployeeAssignmentFormComponent } from './components/employee/employee-assignment/forms/add-employee-assignment-form/add-employee-assignment-form.component';
import { EditEmployeeAssignmentFormComponent } from './components/employee/employee-assignment/forms/edit-employee-assignment-form/edit-employee-assignment-form.component';
import { EmployeeAssignmentViewComponent } from './components/employee/employee-assignment/views/employee-assignment-view/employee-assignment-view.component';
import { EmployeeAssignmentComponent } from './components/employee/employee-assignment/layout/employee-assignment/employee-assignment.component';
import { MaritalStatusLayoutComponent } from './components/employee/marital-status/layout/marital-status-layout/marital-status-layout.component';
import { AddMaritalStatusFormsComponent } from './components/employee/marital-status/forms/add-marital-status-forms/add-marital-status-forms.component';
import { EditMaritalStatusFormsComponent } from './components/employee/marital-status/forms/edit-marital-status-forms/edit-marital-status-forms.component';
import { MaritalStatusViewComponent } from './components/employee/marital-status/views/marital-status-view/marital-status-view.component';
import { SkillDetailsViewComponent } from './components/employee/skills-details-registration/views/skill-details-view/skill-details-view.component';
import { DependantDetailsViewComponent } from './components/employee/dependant-details-registration/views/dependant-details-view/dependant-details-view.component';
import { NextOfKinDetailsViewComponent } from './components/employee/next-of-kin-details-registration/views/next-of-kin-details-view/next-of-kin-details-view.component';
import { OfficeDetailsViewComponent } from './components/employee/office-details-registration/views/office-details-view/office-details-view.component';
import { EducationDetailsRegistrationViewComponent } from './components/employee/education-details-registration/views/education-details-registration-view/education-details-registration-view.component';
import { ProfessionalDetailsRegistrationViewComponent } from './components/employee/professional-details-registration/views/professional-details-registration-view/professional-details-registration-view.component';
import { ProfileLayoutComponent } from '../employee-detail/components/profile/layout/profile-layout/profile-layout.component';
import { ProfileViewComponent } from '../employee-detail/components/profile/views/profile-view/profile-view.component';
import { EditProfileLayoutComponent } from '../employee-detail/components/profile/layout/edit-profile-layout/edit-profile-layout.component';
import { EditProfileViewComponent } from '../employee-detail/components/profile/views/edit-profile-view/edit-profile-view.component';
import { SelfBankDetailsViewComponent } from './components/self-employee/self-bank-details-registration/views/self-bank-details-view/self-bank-details-view.component';
import { AddSelfBankDetailsFormComponent } from './components/self-employee/self-bank-details-registration/forms/add-self-bank-details-form/add-self-bank-details-form.component';
import { EditSelfBankDetailsFormComponent } from './components/self-employee/self-bank-details-registration/forms/edit-self-bank-details-form/edit-self-bank-details-form.component';
import { SelfDependantDetailsViewComponent } from './components/self-employee/self-dependant-details-registration/views/self-dependant-details-view/self-dependant-details-view.component';
import { AddSelfDependantDetailsFormComponent } from './components/self-employee/self-dependant-details-registration/forms/add-self-dependant-details-form/add-self-dependant-details-form.component';
import { SelfEmploymentAsignmentViewComponent } from './components/self-employee/self-assignment-details/views/self-employment-asignment-view/self-employment-asignment-view.component';
import { SelfMaritalStatusViewComponent } from './components/self-employee/self-marital-status/views/self-marital-status-view/self-marital-status-view.component';
import { AddSelfMaritalStatusFormComponent } from './components/self-employee/self-marital-status/forms/add-self-marital-status-form/add-self-marital-status-form.component';
import { EditSelfMaritalStatusFormComponent } from './components/self-employee/self-marital-status/forms/edit-self-marital-status-form/edit-self-marital-status-form.component';
import { EditSelfSkillsDetailsFormComponent } from './components/self-employee/self-skills-detail-registration/forms/edit-self-skills-details-form/edit-self-skills-details-form.component';
import { AddSelfSkillsDetailsFormComponent } from './components/self-employee/self-skills-detail-registration/forms/add-self-skills-details-form/add-self-skills-details-form.component';
import { SelfSkillsDetailsViewComponent } from './components/self-employee/self-skills-detail-registration/views/self-skills-details-view/self-skills-details-view.component';
import { SelfOfficeDetailsViewComponent } from './components/self-employee/self-office-detail-registration/views/self-office-details-view/self-office-details-view.component';
import { SelfProfessionalDetailsViewComponent } from './components/self-employee/self-professional-details-registration/views/self-professional-details-view/self-professional-details-view.component';
import { AddSelfProfessionalDetailsFormComponent } from './components/self-employee/self-professional-details-registration/forms/add-self-professional-details-form/add-self-professional-details-form.component';
import { EditSelfProfessionalDetailsFormComponent } from './components/self-employee/self-professional-details-registration/forms/edit-self-professional-details-form/edit-self-professional-details-form.component';
import { EditSelfNextOfKinDetailsFormComponent } from './components/self-employee/self-next-of-kin-details-registration/forms/edit-self-next-of-kin-details-form/edit-self-next-of-kin-details-form.component';
import { AddSelfNextOfKinDetailsFormComponent } from './components/self-employee/self-next-of-kin-details-registration/forms/add-self-next-of-kin-details-form/add-self-next-of-kin-details-form.component';
import { SelfNextOfKinDetailsViewComponent } from './components/self-employee/self-next-of-kin-details-registration/views/self-next-of-kin-details-view/self-next-of-kin-details-view.component';
import { SelfEmploymentDetailsViewComponent } from './components/self-employee/self-employment-details-registration/view/self-employment-details-view/self-employment-details-view.component';
import { AddSelfEducationDetailsFormComponent } from './components/self-employee/self-education-details/forms/add-self-education-details-form/add-self-education-details-form.component';
import { EditSelfEducationDetailsFormComponent } from './components/self-employee/self-education-details/forms/edit-self-education-details-form/edit-self-education-details-form.component';
import { SelfEducationDetailsViewComponent } from './components/self-employee/self-education-details/views/self-education-details-view/self-education-details-view.component';
import { MyRetirementLayoutComponent } from './components/retirement/layout/my-retirement-layout/my-retirement-layout.component';
import { EmployeeRetirementLayoutComponent } from './components/retirement/layout/employee-retirement-layout/employee-retirement-layout.component';
import { EmployeeRetirementViewComponent } from './components/retirement/views/employee-retirement-view/employee-retirement-view.component';
import { MyRetirementViewComponent } from './components/retirement/views/my-retirement-view/my-retirement-view.component';
import { AcademicInstitutionLayoutComponent } from './components/Academic-Institution/Layout/academic-institution-layout/academic-institution-layout.component';
import { AcademicInstitutionViewComponent } from './components/Academic-Institution/views/academic-institution-view/academic-institution-view.component';
import { AcademicSpecializationViewComponent } from './components/Academic-specialization/views/academic-specialization-view/academic-specialization-view.component';
import { AddAcademicInstitutionFormComponent } from './components/Academic-Institution/forms/add-academic-institution-form/add-academic-institution-form.component';
import { EditAcademicInstitutionFormComponent } from './components/Academic-Institution/forms/edit-academic-institution-form/edit-academic-institution-form.component';
import { EditAcademicSpecializationFormComponent } from './components/Academic-specialization/forms/edit-academic-specialization-form/edit-academic-specialization-form.component';
import { AddAcademicSpecializationFormComponent } from './components/Academic-specialization/forms/add-academic-specialization-form/add-academic-specialization-form.component';
import { AcademicSpecializationLayoutComponent } from './components/Academic-specialization/layout/academic-specialization-layout/academic-specialization-layout.component';





@NgModule({
  declarations: [
    DesignationLayoutComponent,
    AddDesignationLayoutComponent,
    EditDesignationLayoutComponent,
    EditDesignationFormComponent,
    AddDesignationFormComponent,
    DesignationViewComponent,
    CadreLayoutComponent,
    AddCadreLayoutComponent,
    EditCadreLayoutComponent,
    EditCadreFormComponent,
    AddCadreFormComponent,
    CadreViewComponent,
    AddBankFormComponent,
    EditBankFormComponent,
    BankViewComponent,
    BankLayoutComponent,
    EditBankLayoutComponent,
    BankLayoutComponent,
    EditBankLayoutComponent,
    BankViewComponent,
    DepartmentLayoutComponent,
    AddDepartmentLayoutComponent,
    EditDepartmentLayoutComponent,
    EditDepartmentFormsComponent,
    AddDepartmentFormsComponent,
    DepartmentViewComponent,
    EducationlLevelViewComponent,
    EducationlLevelLayoutComponent,
    AddEducationlLevelLayoutComponent,
    EditEducationLevelLayoutComponent,
    EditEducationLevelFormComponent,
    AddEducationLevelFormComponent,
    AddZoneFormComponent,
    EditZoneFormComponent,
    AddZoneLayoutComponent,
    EditZoneLayoutComponent,
    ZoneLayoutComponent,
    ZoneViewComponent,
    CourtLayoutComponent,
    AddCourtLayoutComponent,
    EditCourtLayoutComponent,
    EditCourtFormsComponent,
    AddCourtFormsComponent,
    CourtViewComponent,
    CourtLevelLayoutComponent,
    AddCourtLevelLayoutComponent,
    EditCourtLevelLayoutComponent,
    AddCourtLevelFormComponent,
    EditCourtLevelFormComponent,
    CourtLevelViewComponent,
    NonJudicialWorkStationLayoutComponent,
    AddNonJudicialWorkStationLayoutComponent,
    EditNonJudicialWorkStationLayoutComponent,
    EditNonJudicialWorkStationFormComponent,
    AddNonJudicialWorkStationFormComponent,
    NonJudicialWorkStationViewComponent,
    DependantTypeLayoutComponent,
    AddDependantTypeLayoutComponent,
    EditDependantTypeLayoutComponent,
    EditDependantTypeFormComponent,
    AddDependantTypeFormComponent,
    DependantTypeViewComponent,
    QualificationLayoutComponent,
    AddQualificationLayoutComponent,
    EditQualificationLayoutComponent,
    EditQualificationFormComponent,
    AddQualificationFormComponent,
    EducationLevelViewComponent,
    EducationLevelGradeViewComponent,
    AddQualificationGradeFormComponent,
    EditQualificationGradeFormComponent,
    EditQualificationGradeLayoutComponent,
    AddQualificationGradeLayoutComponent,
    QualificationGradeLayoutComponent,
    BankDetailsLayoutComponent,
    AddBankDetailsLayoutComponent,
    EditBankDetailsLayoutComponent,
    BankDetailsViewComponent,
    DependantDetailsLayoutComponent,
    AddDependantDetailsLayoutComponent,
    EditDependantDetailsLayoutComponent,
    EditDependantDetailsFormComponent,
    AddDependantDetailsFormComponent,
    AddDependantDetailsViewComponent,
    EducationDetailsLayoutComponent,
    AddEducationDetailsLayoutComponent,
    EditEducationDetailsLayoutComponent,
    EditEducationDetailsFormComponent,
    AddEducationDetailsFormComponent,
    EducationDetailsViewComponent,
    ProfessionalSkillsLayoutComponent,
    AddProfessionalSkillsLayoutComponent,
    EditProfessionalSkillsLayoutComponent,
    AddProfessionalSkillsFormComponent,
    EditProfessionalSkillsFormComponent,
    ProfessionalSkillsViewComponent,
    PeronalSkillsLayoutComponent,
    AddPeronalSkillsLayoutComponent,
    EditPeronalSkillsLayoutComponent,
    EditPeronalSkillsFormComponent,
    AddPeronalSkillsFormComponent,
    PeronalSkillsViewComponent,
    NextOfKinLayoutComponent,
    AddNextOfKinLayoutComponent,
    EditNextOfKinLayoutComponent,
    AddNextOfKinFormComponent,
    EditNextOfKinFormComponent,
    NextOfKinViewComponent,
    RegionLayoutComponent,
    AddRegionLayoutComponent,
    EditRegionLayoutComponent,
    EditRegionFormComponent,
    AddRegionFormComponent,
    AddRegionViewComponent,
    DistrictLayoutComponent,
    AddDistrictLayoutComponent,
    EditDistrictLayoutComponent,
    AddDistrictFormComponent,
    EditDistrictFormComponent,
    DistrictViewComponent,
    UnitLayoutComponent,
    AddUnitLayoutComponent,
    EditUnitLayoutComponent,
    AddUnitFormComponent,
    EditUnitFormComponent,
    UnitViewComponent,
    SectionLayoutComponent,
    AddSectionLayoutComponent,
    EditSectionLayoutComponent,
    AddSectionFormComponent,
    EditSectionFormComponent,
    SectionViewComponent,
    LeaveTypeLayoutComponent,
    AddLeaveTypeLayoutComponent,
    EditLeaveTypeLayoutComponent,
    AddLeaveTypeFormComponent,
    EditLeaveTypeFormComponent,
    LeaveTypeViewComponent,
    JotUsersLayoutComponent,
    AddJotUsersLayoutComponent,
    EditJotUsersLayoutComponent,
    AddJotUsersFormComponent,
    EditJotUsersFormComponent,
    JotUsersViewComponent,
    JotUsersDetailsViewComponent,
    JotUsersDetailsLayoutComponent,
    AcademicSpecializationViewComponent ,
    AddEmploymentDetailsFormComponent,
    EditEmploymentDetailsFormComponent,
    AddOfficeDetailsFormComponent,
    EditOfficeDetailsFormComponent,
    AddNextKinsDetailsFormComponent,
    EditNextKinsDetailsFormComponent,
    EditDependantDetailsFormComponent,
    AddDependantDetailsFormComponent,
    AddEducationDetailsFormComponent,
    EditEducationDetailsFormComponent,
    EditProfessionalDetailsFormComponent,
    AddProfessionalDetailsFormComponent,
    AddSkillsDetailsFormComponent,
    EditSkillsDetailsFormComponent,
    EmployeeDetailsRegistrationViewComponent,
    AttachmentLayoutComponent,
    EditAttachmentLayoutComponent,
    AttachmentViewComponent,
    AddAttachmentFormsComponent,
    EditAttachmentFormsComponent,
    AddEmployeeAssignmentFormComponent,
    EditEmployeeAssignmentFormComponent,
    EmployeeAssignmentViewComponent,
    EmployeeAssignmentComponent,
    MaritalStatusLayoutComponent,
    AddMaritalStatusFormsComponent,
    EditMaritalStatusFormsComponent,
    MaritalStatusViewComponent,
    SkillDetailsViewComponent,
    DependantDetailsViewComponent,
    NextOfKinDetailsViewComponent,
    OfficeDetailsViewComponent,
    EducationDetailsRegistrationViewComponent,
    ProfessionalDetailsRegistrationViewComponent,

    ProfileLayoutComponent,
    ProfileViewComponent,
    EditProfileLayoutComponent,
    EditProfileViewComponent,
    SelfBankDetailsViewComponent,
    AddSelfBankDetailsFormComponent,
    EditSelfBankDetailsFormComponent,
    SelfDependantDetailsViewComponent,
    AddSelfDependantDetailsFormComponent,
    SelfEmploymentAsignmentViewComponent,
    SelfMaritalStatusViewComponent,
    AddSelfMaritalStatusFormComponent,
    EditSelfMaritalStatusFormComponent,
    EditSelfSkillsDetailsFormComponent,
    AddSelfSkillsDetailsFormComponent,
    SelfSkillsDetailsViewComponent,
    SelfOfficeDetailsViewComponent,
    SelfProfessionalDetailsViewComponent,
    AddSelfProfessionalDetailsFormComponent,
    EditSelfProfessionalDetailsFormComponent,
    EditSelfNextOfKinDetailsFormComponent,
    AddSelfNextOfKinDetailsFormComponent,
    SelfNextOfKinDetailsViewComponent,
    SelfEmploymentDetailsViewComponent,
    AddSelfEducationDetailsFormComponent,
    EditSelfEducationDetailsFormComponent,
    SelfEducationDetailsViewComponent,
    MyRetirementLayoutComponent,
    EmployeeRetirementLayoutComponent,
    EmployeeRetirementViewComponent,
    MyRetirementViewComponent,
    AcademicInstitutionLayoutComponent,
    AcademicInstitutionViewComponent,
    AddAcademicInstitutionFormComponent,
    EditAcademicInstitutionFormComponent,
    EditAcademicSpecializationFormComponent,
    AddAcademicSpecializationFormComponent,
    AcademicSpecializationLayoutComponent,
   

  ],
  imports: [
    CommonModule,
    NgChartsModule,
    EmployeeDetailsRoutingModule,
    StructureModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    AngularEditorModule,
    NgxExtendedPdfViewerModule,
    PdfViewerModule 
  ],
  exports: [
    DesignationLayoutComponent,
    AddDesignationLayoutComponent,
    JotUsersLayoutComponent,
    AddJotUsersLayoutComponent,
    EditJotUsersLayoutComponent,
    AddJotUsersFormComponent,
    EditJotUsersFormComponent,
    JotUsersViewComponent,
    JotUsersDetailsViewComponent,
    JotUsersDetailsLayoutComponent,
    // ApplicantsHomeChartsViewComponent,
  ]
})
export class EmployeeDetailsModule { }
