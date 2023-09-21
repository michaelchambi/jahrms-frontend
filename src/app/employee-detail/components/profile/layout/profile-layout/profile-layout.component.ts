import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrls: ['./profile-layout.component.css']
})
export class ProfileLayoutComponent {
  ngOnInit(): void {
    this.defaultValue()
  }
maximize:boolean=false
maximizer_show:boolean=false;
maximizer_hide:boolean=false;
maximizeWindow(){
  this.maximize=true
  this.maximizer_hide=false
  this.maximizer_show=true
}
minimizeWindow(){
  this.maximize=false
  this.maximizer_hide=true
  this.maximizer_show=false
}
defaultValue(){
  this.maximize=false
  this.maximizer_hide=true
  this.maximizer_show=false
}
}
