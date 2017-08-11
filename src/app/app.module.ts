import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataTableComponent } from './components/data-table/data-table.component';

import { DataTableService } from './services/data-table.service';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [DataTableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
