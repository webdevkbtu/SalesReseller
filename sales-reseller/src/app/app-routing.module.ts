import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UserAgreeComponent } from './user-agree/user-agree.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {Item1Component} from './item1/item1.component';


const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'user-agreement', component: UserAgreeComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'item1', component: Item1Component}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
