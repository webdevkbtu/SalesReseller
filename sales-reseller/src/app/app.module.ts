import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PolicyBlockComponent} from './components/policy-block/policy-block.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { BannerComponent } from './banner/banner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UserAgreeComponent } from './user-agree/user-agree.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CollectionsComponent } from './collections/collections.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HotComponent } from './hot/hot.component';
import { Item1Component } from './item1/item1.component';
import { RecomItemComponent } from './recom-item/recom-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PageFooterComponent,
    PageHeaderComponent,
    PolicyBlockComponent,
    NavmenuComponent,
    BannerComponent,
    AboutUsComponent,
    MainPageComponent,
    UserAgreeComponent,
    ContactUsComponent,
    CollectionsComponent,
    ContactsComponent,
    HotComponent,
    Item1Component,
    RecomItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
