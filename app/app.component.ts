import { Component, ViewChild } from '@angular/core';
import { Player } from './models/player.model';
import { Match } from './models/match.model';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers : [ ]

})
export class AppComponent { 

  participantName = "";
  participants = [];
  matches : Match[] = [];

  constructor(){
  }

  ngOnInit() {}

  add(){
    this.participants.push(this.participantName);

    let newPlayer = new Player(this.participantName);
    let count = this.matches.length;

    if(count < 1 || (count >= 1 && this.matches[count-1].Player2 != null)){
      let newMatch = new Match();
      this.matches.push(newMatch);
      count++;
    }

    let lastMatch = this.matches[count - 1];
    lastMatch.add(newPlayer);


    console.log(this.participants);
    console.log(this.matches);
  }
}