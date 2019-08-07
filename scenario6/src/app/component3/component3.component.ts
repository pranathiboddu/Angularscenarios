import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  //used output to send data from child to parent and that data is sent to sibling component
@Output() public childEvent=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  fireEvent()
  {
    this.childEvent.emit('hey angular');
  }

}
