import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

 
  isOn = false;

  constructor() { }

  ngOnInit(): void {
  }
    clicked(){
    this.isOn = !this.isOn;
  }
  get message(){
    return `The light is ${this.isOn ? 'On' : 'Off'}`;
    }

}
