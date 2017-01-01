import { Component, Input } from '@angular/core';
import { Player } from '../models/player.model'
import { Match } from '../models/match.model'

@Component({
  moduleId: module.id,
  selector: 'matches-list',
  templateUrl: 'matcheslist.component.html',
  providers : [  ]

})
export class MatchesListComponent { 

  @Input()  matches : Match[] = [];

  constructor(){
  }

  ngOnInit( ) {
     
  }
}