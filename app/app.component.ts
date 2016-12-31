import { Component, ViewChild } from '@angular/core';
import { Player } from './models/player.model';
import { Match } from './models/match.model';
import { Competition } from './models/competition.model';
import { ParticipantsListComponent } from './components/participantslist.component';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers : [ ]
})
export class AppComponent { 

  private _currentParticipantId : number = 0;

  participantName = "";
  competitionName = "";
  participants = [];
  isDisabled = true;

  competition : Competition;

  @ViewChild('participantsList') private participantsList: ParticipantsListComponent;

  constructor(){  
  }

  ngOnInit() {}

  createCompetition(){
    this.competition = new Competition(this.competitionName);
    this.isDisabled = false;
    this.competitionName = "";
  }

  addParticipant(){
    this.competition.addParticipant(++this._currentParticipantId, this.participantName);
    this.participantName = "";
    this.participantsList.players = this.competition.Participants;
    //console.log(this.participants);
    console.log(this.competition);
  }
}