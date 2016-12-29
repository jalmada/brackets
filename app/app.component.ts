import { Component, ViewChild } from '@angular/core';
import { Player } from './models/player.model';
import { Match } from './models/match.model';
import { Competition } from './models/competition.model';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers : [ ]

})
export class AppComponent { 

  participantName = "";
  participants = [];

  competition : Competition;

  constructor(){
    this.competition = new Competition("Default");
  }

  ngOnInit() {}

  add(){
    this.competition.addParticipantName(this.participantName);
    this.participants = this.competition.Participants;

    console.log(this.participants);
  }
}