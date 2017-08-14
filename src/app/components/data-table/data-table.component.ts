import { Component, OnInit } from '@angular/core';
import { DataTableService } from '../../services/data-table.service';
import { ChangeTdDirective } from '../../directives/change-td.directive';
// import {Observable} from 'rxjs';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  private dataTable: any;

  private head: string[];
  private tableName: string;
  condition = false;
  isActive = true;
  isInputActive = false;

  values = '';
   onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }

  constructor(private dtService: DataTableService) {
    console.log('DataTableComponent...');
    this.tableName = 'Table Name';
  }

  ngOnInit() {
    this.head = [];
    this.dtService.getDataTable().subscribe((data)=>{
      this.dataTable = data;
      for(let key in data[0])
        this.head.push(key);
        console.log(this.head);
    });
  }

  getHeadTable(){
      return this.head;
  }

  getColumnSize(){
    return this.head.length? 1 : this.head.length;
  }

  getDataTable(){
    return this.dataTable;
  }

}
