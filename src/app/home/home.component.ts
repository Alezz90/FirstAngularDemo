import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showContainer: boolean = false;
  HideLohin: boolean = true;
 displayName=""
 getValue(val:string) {
  console.warn()
  this.displayName=val
}
HomePage(): void {
  this.showContainer = !this.showContainer;
  this.HideLohin =!this.HideLohin;
 
}
}
