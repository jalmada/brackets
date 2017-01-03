import { Component, Input } from '@angular/core';
import { Player } from '../models/player.model'
import { Match } from '../models/match.model'
import { Bracket } from '../models/bracket.model'

@Component({
  moduleId: module.id,
  selector: 'brackets',
  templateUrl: 'brackets.component.html',
  providers : [  ]

})
export class BracketsComponent { 

  private _brackets : Bracket[] = [];
  @Input()  matches : Match[] = [];

  constructor(){
  }

  ngOnInit( ) {
     
  }

  get Brackets(){
      return this._brackets;
  }

  addPlayers(players : Player[]){
      players.forEach(p => {
          this.addPlayer(p);
      });
  }

  addPlayer(player : Player){

      var bracketsCount = this._brackets.length;

      if(bracketsCount <= 0 || (bracketsCount > 0 && this._brackets[bracketsCount - 1].IsFull)){
          this._brackets.push(new Bracket());
      }
      
      let lastBracket = this._brackets[this._brackets.length - 1];

      lastBracket.addPlayer(player);

  }
}