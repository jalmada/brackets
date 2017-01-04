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
        var matches : Match[];
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
        this.addaddParticipantObj(new Player(id, name));
    }

    addaddParticipantObj(player : Player)
    {
        //Logic to adjust the brackets on the fly
    }

}