import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Player } from './models/player.model';
import { Match } from './models/match.model';
import { Competition } from './models/competition.model';
import { ParticipantsListComponent } from './components/participantslist.component';
import { MatchesListComponent } from './components/matcheslist.component';
import { BracketsComponent } from './components/brackets.component';


//Diseña el Brackets como un organizador no como objectos que se generan.
//Igual pensaba pasar brackets como visualizador pero croe que eso es otra cosa.



@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers : [ ]
})
export class AppComponent implements  AfterViewInit { 

  private _currentParticipantId : number = 0;

  participantName = "";
  competitionName = "";
  participants = [];
  isDisabled = true;

  competition : Competition;

  @ViewChild('participantsList') private participantsList: ParticipantsListComponent;
  @ViewChild('matchesList') private matchesList: MatchesListComponent;
  @ViewChild('brackets') private bracketsList: BracketsComponent;
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
    this.matchesList.matches = this.competition.Matches;
    this.bracketsList.brackets = this.competition.Brackets;
    //console.log(this.participants);
    console.log(this.competition);
  }

  ngAfterViewInit(){
    //Test Data
    this.competitionName = 'Test Competition';
    this.createCompetition();
    this.participantName = 'Jose';
    this.addParticipant();
    this.participantName = 'Pedro';
    this.addParticipant();
    this.participantName = 'Maria';
    this.addParticipant();
    this.participantName = 'Oscar';
    this.addParticipant();
    this.participantName = 'Ruben';
    this.addParticipant();
  }
}