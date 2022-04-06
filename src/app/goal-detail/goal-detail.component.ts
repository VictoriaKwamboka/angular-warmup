import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
// import { EventEmitter } from 'stream';
import {Goal} from '../goal'


@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {
  
  //input property binding
  @Input() goal:Goal | undefined;
  @Output() isComplete = new EventEmitter();

  goalComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit(){
  }

}
//this is a comment
