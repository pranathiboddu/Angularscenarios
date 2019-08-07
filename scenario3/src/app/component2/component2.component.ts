import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component2',
  template: `
  <!--printing the parentdata getting from component1 -->
  <h2>
  {{"Hello " +parentData}}
  </h2>
  `,
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  //used @Input to get data from component1 
  @Input() public parentData;
  constructor() { }

  ngOnInit() {
  }
  
}
