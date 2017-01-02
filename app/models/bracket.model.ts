import { Match } from './match.model';
import { Player } from './player.model';
export class Bracket{
    private _matches : Match[] = [];

    constructor (private _level : number = 0){ }

    get MaxMatches(){
        return Math.pow(2, this._level);
    }

    get Level(){
        return this._level;
    }

    get IsFull(){
        return this._matches.length == this.MaxMatches;
    }

    addMatch(match : Match){
        if(!this.IsFull){
            this._matches.push(match);
        }
    }
}