import { Match } from './match.model';
import { Player } from './player.model';
export class Bracket{
    private _matches : Match[] = [];

    constructor (private _level : number = 0){ }


    get MaxPlayers(){
        return Math.pow(2, this._level);        
    }

    get Level(){
        return this._level;
    }

    get IsFull(){
        return this.Players.length == this.MaxPlayers;
    }

    get Matches(){
        return this._matches;
    }

    get Players(){
        var players = [];

        this._matches.forEach(m => {
            if(m.Player1 != null){
                players.push(m.Player1);
            }
            if(m.Player2 != null){            
                players.push(m.Player2);
            }
        });

        return players;
    }

    addPlayer(player : Player){
        if(this.IsFull){ 
            return;
        }

        var match = new Match();

        if(this._matches.length == 0){
            this._matches.push(match);
        } else {
            for(var x; x < this._matches.length; x++){
                let m = this._matches[x];
                if(m.Player1 == null || m.Player2 == null){
                    match = m;
                    break;
                }
            }
        }
        match.add(player);
    }   
}