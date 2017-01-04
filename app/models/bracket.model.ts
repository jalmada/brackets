import { Match } from './match.model';
import { Player } from './player.model';
export class Bracket{
    private _matches : Match[] = [];
    private _players : Player[] = [];

    constructor (private _level : number = 0){ }


    get MaxPlayers(){
        return Math.pow(2, this._level);        
    }

    get Level(){
        return this._level;
    }

    get IsFull(){
        return this._players.length == this.MaxPlayers;
    }

    get Matches(){
        return this._matches;
    }

    addPlayer(player : Player){
        //Basic logic for adding players based on the bracket level
    }
}