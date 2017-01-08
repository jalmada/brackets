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

  @Input()  brackets : Bracket[] = [];

  constructor(){
  }

  ngOnInit( ) {
     
  }
}