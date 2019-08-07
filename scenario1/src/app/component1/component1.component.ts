import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl:'./component1.component.html',
  styles: []
})
export class Component1Component implements OnInit {
  
  
  logMessage(value)
  {
    console.log(value); //to print on console
  }

  constructor() { }

  ngOnInit() {
  }

}
