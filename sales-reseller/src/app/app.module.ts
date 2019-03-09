import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PolicyBlockComponent} from './components/policy-block/policy-block.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { BannerComponent } from './banner/banner.component';
@NgModule({
  declarations: [
    AppComponent,
    PageFooterComponent,
    PageHeaderComponent,
    PolicyBlockComponent,
    NavmenuComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
