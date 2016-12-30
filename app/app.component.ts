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
  competitionName = "";
  participants = [];
  isDisabled = true;

  competition : Competition;

  constructor(){
    
  }

  ngOnInit() {}

  createCompetition(){
    this.competition = new Competition(this.competitionName);
    this.isDisabled = false;
  }

  addParticipant(){
    this.competition.addParticipantName(this.participantName);
    this.participants = this.competition.Participants;
    this.participantName = "";
    console.log(this.participants);
    console.log(this.competition);
  }
}