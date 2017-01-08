import { Match } from './match.model';
import { Player } from './player.model';
import { Bracket } from './bracket.model';

export class Competition
{
    private _brackets : Bracket[] = [];
    private _participants : Player[] = [];

    constructor (private _name : string){ }

    get Name()
    {
        return this._name;
    }

    get Brackets(){
        return this._brackets;
    }

    get Matches()
    {
        var matches : Match[] = [];
        this._brackets.forEach(b => {
            matches.concat(b.Matches);
        });
        return matches;
    }

    get Participants()
    {
        return this._participants;
    }

    addParticipant(id : number, name : string){
        this.addParticipantObj(new Player(id, name));
    }

    addParticipantObj(player : Player)
    {
        var lastBracket = new Bracket(4);
        if(this._brackets.length == 0 ||(this._brackets.length > 0 && this._brackets[this._brackets.length - 1].IsFull)){
            this._brackets.push(lastBracket);
        } 

        lastBracket = this._brackets[this._brackets.length - 1];

        lastBracket.addPlayer(player);
    }
}