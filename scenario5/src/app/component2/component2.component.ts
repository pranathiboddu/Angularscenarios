import { Component, OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  //cretaed a message2 with empty string
  public message2="";
  constructor() { }
  ngOnInit() {
  }

}
