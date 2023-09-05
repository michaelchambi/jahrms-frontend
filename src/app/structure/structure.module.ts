import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { FooterComponent } from './footer/footer/footer.component';
import { InfoModule } from '../info/info.module';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    InfoModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class StructureModule { }
