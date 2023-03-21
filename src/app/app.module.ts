import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomepageComponent } from './header-pages/homepage/homepage.component';
import { HeaderComponent } from './header-pages/homepage/header/header.component';
import { AboutUsComponent } from './header-pages/homepage/about-us/about-us.component';
import { OurMissionComponent } from './header-pages/homepage/our-mission/our-mission.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './user-dashboard/user-profile/user-profile.component';
import { HelpSupportComponent } from './user-dashboard/help-support/help-support.component';
import { Homesection1Component } from './header-pages/homepage/homesection1/homesection1.component';
import { LeftNavComponent } from './user-dashboard/left-nav/left-nav.component';
import { MainDashboardComponent } from './user-dashboard/main-dashboard/main-dashboard.component';
import { HeaderPagesComponent } from './header-pages/header-pages.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SearchComponent } from './user-dashboard/main-dashboard/search/search.component';
import { AddServeFoodComponent } from './user-dashboard/main-dashboard/add-serve-food/add-serve-food.component';
import { FooterComponent } from './header-pages/footer/footer.component';
import { ResetPasswordComponent } from './user-dashboard/reset-password/reset-password.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { ReactiveFormsModule } from '@angular/forms';
// import { UserDashboardRoutingModule } from './user-dashboard/user-dashboard-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomepageComponent,
    HeaderComponent,
    AboutUsComponent,
    OurMissionComponent,
    JoinUsComponent,
    ForgetPassComponent,
    Homesection1Component,
    UserDashboardComponent,
    LeftNavComponent,
    UserProfileComponent,
    HelpSupportComponent,
    MainDashboardComponent,
    HeaderPagesComponent,
    PagenotfoundComponent,
    SearchComponent,
    AddServeFoodComponent,
    FooterComponent,
    ResetPasswordComponent,
    
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideStorage(() => getStorage()),
    // UserDashboardRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
