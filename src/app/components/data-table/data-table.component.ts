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
  private changeCell = [];
  private changeOneCell = -1;
  condition = false;
  isActive = true;

  name: string = '';

  setValue() { this.name = 'Nancy'; }

  values = '';
values1 = 'test';
  onKey(event: any) { // without type info
    console.log(event);
    this.values += event.target.value + ' | ';
  }
  onFocus(event: any) { // without type info
    console.log(event);
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
      this.changeCell.push(false);
    });
  }

  getChangeCell(h,v){
    return this.changeCell[h*10+v];
  }

  changeFocusCell(h,v,event){
    if (event.cancelable)
      console.log('Cancelable');
      // this.changeCell[this.changeOneCell] = false;
  }

  changeShowCell(h,v){
    if (this.changeOneCell < 0)
        this.changeOneCell = h*10+v;
    else
    {
      this.changeCell[this.changeOneCell] = false;
      this.changeOneCell = h*10+v;
    }
    this.changeCell[this.changeOneCell] = true;
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
