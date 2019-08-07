import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  //used @output inrder to pass data from child to parent
  @Output() public childEvent=new EventEmitter()

  constructor() { }

  ngOnInit() {
  }
  //called fireEvent function and written the message that should pass to parent a
  fireEvent()
  {
    this.childEvent.emit('Hey Angular');
  }

}
