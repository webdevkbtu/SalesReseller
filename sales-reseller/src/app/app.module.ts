import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { CategoryBlockComponent } from './components/category-block/category-block.component';
import { PolicyBlockComponent } from './components/policy-block/policy-block.component';

@NgModule({
  declarations: [
    AppComponent,
    PageFooterComponent,
    CategoryBlockComponent,
    PolicyBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
