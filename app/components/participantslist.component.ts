import { Component, Input } from '@angular/core';
import { Player } from '../models/player.model'

@Component({
  moduleId: module.id,
  selector: 'participants-list',
  templateUrl: 'participantslist.component.html',
  providers : [  ]

})
export class ParticipantsListComponent { 

  @Input()  players : Player[] = [];

  constructor(){
  }

  ngOnInit( ) {
     
  }
}

