import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  //used @input inorder to pass data from parent to child that means component1 to component2 
  @Input() public parentData;
  constructor() { }

  ngOnInit() {
  }

}
