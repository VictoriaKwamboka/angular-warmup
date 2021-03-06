import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal';

@Component({
  selector: 'app-goal', //this is the app-goal selector to use in the root app
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals: Goal[] = [
    new Goal(1,'Watch Finding Nemo','Find an online version and watch merlin find his son', new Date(2023,3,12)),
    new Goal(2,  'Buy Cookies',  'I have to buy cookies for the parrot', new Date(2022,7,9)),
    new Goal(3,  'Get New Phone Case',  'Dian has her birthday coming up soon ', new Date(2022,3,12)),
    new Goal(4,  'Get Dog Food',  'Pupper likes expensive snacks', new Date(2020,0,18) ),
    new Goal(5,  'Solve Maths Homework',  'Damn Math', new Date(2025,2,14)),
    new Goal(6,  'Plot My World Domination Plan', 'Cause I am an evil overload', new Date(2030,2,19) ),
  ];

  toggleDetails(index:number){
    this.goals[index].showDescription =! this.goals[index].showDescription
  }
  completeGoal(isComplete:boolean, index:number){
    if(isComplete){
      this.goals.splice(index,1)
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
