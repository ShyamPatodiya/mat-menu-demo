import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showChildComponents = false;

  showComponent() {
    if (this.showChildComponents) {
      this.showChildComponents = false;
      this.showChildComponents = true;
    } else {
      this.showChildComponents = !this.showChildComponents;
    }
  }
}
