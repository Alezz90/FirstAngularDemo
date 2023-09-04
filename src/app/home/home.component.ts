import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public welocme="azza"
  public myInput=""
 displayValue=""
 getValue(val:string) {
  console.warn()
  this.displayValue=val
}
}
