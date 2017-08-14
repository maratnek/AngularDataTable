import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataTableComponent } from './components/data-table/data-table.component';

import { DataTableService } from './services/data-table.service';
import {HttpModule} from '@angular/http';
import { ChangeTdDirective } from './directives/change-td.directive';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    ChangeTdDirective,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule

  ],
  providers: [DataTableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
