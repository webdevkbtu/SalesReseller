import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { ContentComponent } from './content/content.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PolicyBlockComponent} from './components/policy-block/policy-block.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
@NgModule({
  declarations: [
    AppComponent,
    PageFooterComponent,
    ContentComponent,
    PageHeaderComponent,
    PolicyBlockComponent,
    NavmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
