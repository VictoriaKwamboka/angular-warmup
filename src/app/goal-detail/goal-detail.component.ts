import { Component, Input, OnInit } from '@angular/core';
import {Goal} from '../goal'

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {
  
  //input property binding
  @Input() goal:Goal | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
//this is a comment
