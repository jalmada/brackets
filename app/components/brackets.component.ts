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

  addMatches(matches : Match[]){
      matches.forEach(m => {
          this.addMatch(m);
      });
  }

  addMatch(match : Match){

    var lastBracket : Bracket;

    if(this._brackets.length == 0){
        lastBracket = new Bracket();
        this._brackets.push(lastBracket);
    } else {

        lastBracket = this._brackets[this._brackets.length - 1];
        if(lastBracket.IsFull){
            lastBracket = new Bracket(this._brackets.length);
            this._brackets.push(lastBracket);
        }
    }
    lastBracket.addMatch(match);
  }
}