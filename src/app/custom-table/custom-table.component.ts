import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css'],
})
export class CustomTableComponent implements OnInit {
  dataList = [];
  tableColumns: any = [];
  totalOfCols: any = [];

  isLoading = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.isLoading = 0;
    this.http
      // .get('https://jsonplaceholder.typicode.com/posts')
      .get('https://jsonplaceholder.typicode.com/todos/')
      .subscribe((res: any) => {
        if (res?.length > 0) {
          this.tableColumns = Object.keys(res[0]);
          this.dataList = res;
          this.totalOfCols = this.tableColumns.slice(0, 2);
          this.isLoading = 1;
        } else {
          this.isLoading = 2;
        }
      });
  }
}
