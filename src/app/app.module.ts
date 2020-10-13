import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FlickityModule } from 'ngx-flickity';
import { HttpClientModule } from '@angular/common/http';
import { LoaderCommonComponent } from './shared/loader/loader-common.component';
import { LoaderService } from './shared/loader/loader-service.service';
import { SimpleTableComponent } from './shared/simple-table/simple-table.component';
import { CommonModule } from '@angular/common';
import { PipeTablePipe } from './shared/pipe-table.pipe';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SimpleTableComponent,
    PipeTablePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    DataTablesModule,
    NgbModule,
    HttpClientModule
  ],
  exports:[PipeTablePipe],
  providers: [LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
