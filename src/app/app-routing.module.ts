import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomepageComponent } from './header-pages/homepage/homepage.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LoginComponent } from './login/login.component';
import { MainDashboardComponent } from './user-dashboard/main-dashboard/main-dashboard.component';
import { UserProfileComponent } from './user-dashboard/user-profile/user-profile.component';
import { HelpSupportComponent } from './user-dashboard/help-support/help-support.component';
import { HeaderPagesComponent } from './header-pages/header-pages.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { ResetPasswordComponent } from './user-dashboard/reset-password/reset-password.component';

const routes: Routes = [
  // {path:'', component:HomepageComponent, },
  {path:'', redirectTo:'header-pages/homepage', pathMatch:'full'},
  {path:'header-pages', component:HeaderPagesComponent, children:[
    {path:'homepage', component:HomepageComponent, pathMatch:'full', children:[
      {path:'sign-up', component:SignUpComponent},
    ]},
  ]},
  {path:'header-pages/user-dashboard', redirectTo:'user-dashboard'},
  {path:'user-dashboard', component:UserDashboardComponent, children:[
      {path:'user-profile', component:UserProfileComponent},
      {path:'main-dashboard', component:MainDashboardComponent},
      {path:'help-support', component:HelpSupportComponent},
      {path:'reset-password', component:ResetPasswordComponent, children:[
        {path:'forget-pass', redirectTo:'/forget-pass'},
      ]}
  ]},
  {path:'forget-pass', component:ForgetPassComponent},
  {path:'user-dashboard/homepage', redirectTo:'header-pages/homepage'},
  {path:'header-pages/join-us', redirectTo:'sign-up'},
  {path:'sign-up', component:SignUpComponent,},
  {path:'login/sign-up', redirectTo:'sign-up'},
  {path:'login/forget-pass', component:ForgetPassComponent},
  {path:'sign-up/login', redirectTo:'login'},
  {path:'login',  component:LoginComponent, },
  {path:'**', component:PagenotfoundComponent, pathMatch:'full'},
];

const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled"
  //scrollPositionRestoration: "enabled"
};

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled',
anchorScrolling: 'enabled',scrollOffset: [0, 64]})
],
exports: [RouterModule]
})
export class AppRoutingModule { }
