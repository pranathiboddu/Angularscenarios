import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
   public message3="";
   //used @output inorder to send data from child to parent
  @Output() public childEvent=new EventEmitter()

  fireEvent()
  {
    this.childEvent.emit('Hey Angular in child event');
  }
  
  constructor() { }
 

  ngOnInit() {
  }

}
