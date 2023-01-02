import { MatTableDataSource } from '@angular/material/table';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-table-detail',
  templateUrl: './custom-table-detail.component.html',
  styleUrls: ['./custom-table-detail.component.css'],
})
export class CustomTableDetailComponent implements OnInit {
  @Input() columnsSet: any = [];
  @Input() dataSet: any = [];
  @Input() totalColumns: any = [];
  @Input() showTotalRow: boolean = false;
  totalRow: any = [];

  dataSource: MatTableDataSource<any>;

  constructor() {}

  ngOnInit(): void {
    // console.log('dataSet =>', this.dataSet);
    // console.log('columnsSet =>', this.columnsSet);
    // console.log('totalColumns =>', this.totalColumns);
    this.dataSource = new MatTableDataSource(this.dataSet);

    if (this.showTotalRow)
      this.columnsSet.forEach((element: any, index: any) => {
        if (
          this.totalColumns?.length > 0 &&
          this.totalColumns[index] == element
        ) {
          this.setTotalColumnsArr(this.dataSet, this.totalColumns[index]);
        } else if (!this.totalColumns || this.totalColumns?.length == 0) {
          this.setTotalColumnsArr(this.dataSet, element);
        }
      });
    // console.log('totalRow =>', this.totalRow);
  }

  setTotalColumnsArr(arr: any, prop: any) {
    let obj: any = {};
    obj[prop] = this.calculatePropTotal(this.dataSet, prop);
    this.totalRow.push(obj);
  }

  calculatePropTotal(arr: any, prop: any) {
    // console.log('prop =>', prop);
    const total = arr.reduce((accumulator: any, obj: any) => {
      return accumulator + obj[prop];
    }, 0);
    return total;
  }

  hasProp(o: any, name: any) {
    // console.log('o =>', o);
    // console.log('name =>', name);
    return o?.hasOwnProperty(name) || false;
  }
}
