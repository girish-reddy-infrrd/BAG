import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavFooterModule } from '../shared/nav-footer/nav-footer.module';
import { NavHeaderModule } from '../shared/nav-header/nav-header.module';
import { HomeComponent } from './home/home.component';
import { HomeQuarantineComponent } from './home-quarantine/home-quarantine.component';

// import { FlickityModule } from 'ngx-flickity';
import { NgxTweetModule } from 'ngx-tweet';
import { CitizenGroupsComponent } from './citizen-groups/citizen-groups.component';
import { FlickityModule } from '../shared/third-party/flickity/src';
import { CovidWarriorsComponent } from './covid-warriors/covid-warriors.component';
import { LoaderCommonComponent } from '../shared/loader/loader-common.component';
import { LoaderService } from '../shared/loader/loader-service.service';
import { CircularComponent } from './circular/circular.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from '../shared/search.pipe';
import { AlertService } from '../shared/alert.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { DataTablesModule } from 'angular-datatables';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CategoriesComponent } from './categories/categories.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [LayoutComponent,
    HomeComponent,
    LoaderCommonComponent,
     HomeQuarantineComponent,
     CitizenGroupsComponent,
     HomeQuarantineComponent,
     CovidWarriorsComponent,
     CircularComponent,
     FilterPipe,
     CartPageComponent,
     CategoriesComponent,
     ViewDetailComponent,
     RegistrationComponent,
     ContactusComponent,
   ],
  imports: [
    CommonModule,
    NgSelectModule,
    LayoutRoutingModule,
    NavFooterModule,
    NavHeaderModule,
    FlickityModule,
    NgxTweetModule,
    FormsModule,
    DataTablesModule,
    NgbModule,
    ReactiveFormsModule
   ],
  exports: [
  ],
  providers: [
    AlertService, LoaderService
  ]
})
export class LayoutModule { }
