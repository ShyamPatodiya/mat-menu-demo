import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatMenu } from '@angular/material/menu';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-button-menu',
  templateUrl: './button-menu.component.html',
  styleUrls: ['./button-menu.component.css'],
})
export class ButtonMenuComponent implements OnInit {
  @ViewChild('menu') menu: MatMenu;
  searchInput: ElementRef;
  myForm: FormGroup;
  list = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' },
    { id: 4, name: 'Option 4' },
    { id: 5, name: 'Option 5' },
    { id: 6, name: 'Option 6' },
    { id: 7, name: 'Option 7' },
    { id: 8, name: 'Option 8' },
    { id: 9, name: 'Option 9' },
    { id: 10, name: 'Option 10' },
  ];

  options: any = [];

  menuSubcp: Subscription;

  constructor() {
    this.filterOptions();
    // setTimeout(() => {
    //     window.addEventListener("scroll", this.scrollEvent, true);
    // });
  }

  ngOnInit(): void {}

  filterOptions(searchText?: any) {
    searchText = searchText?.value;
    if (searchText)
      this.options = this.list.filter((x) =>
        x.name.toLowerCase().includes(searchText.toLowerCase())
      );
    else this.options = this.list;
  }

  showEle(evnt?: any) {
    console.log('menu =>', this.menu);
    // this.menuSubcp = this.menu.closed.subscribe((x) => {
    //   console.log('x =>', x);
    // });

    // console.log('menuSubcp =>', this.menuSubcp);
    this.menu._handleKeydown(evnt);
    // this.menu
    // let sub: Subscription;
    // sub = this.menu.closed.subscribe((x) => {
    //   console.log('sub > x =>', x);
    // });
    // console.log('evnt =>', evnt);
    // console.log('evnt.keyCode =>', evnt.keyCode);
    // console.log('menu =>', this.menu._handleKeydown);
    // console.log('menu =>', this.menu._handleKeydown(evnt));
    // this.menu
    // if (evnt.key != 'ArrowUp' || evnt.key != 'ArrowDown')
    //   document.getElementById('searchBox1')?.focus();
    // sub.unsubscribe();
  }

  onDestroy() {
    this.menuSubcp.unsubscribe();
  }
}
