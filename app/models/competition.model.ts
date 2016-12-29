import { Match } from './match.model';
import { Player } from './player.model';
export class Competition
{
    private _matches : Match[] = [];

    constructor (private _name : string){ }

    get Name()
    {
        return this._name;
    }

    get Matches()
    {
        return this._matches;
    }

    get Participants()
    {
        let participants : Player[] = []; 

        this._matches.forEach(m => {
            participants.push(m.Player1);
            if(m.Player2 != null) {
                participants.push(m.Player2);
            }
        });
        return participants;
    }

    addMatch(match : Match)
    {
        this._matches.push(match);
    }

    addParticipantName(player : string){
        this.addParticipant(new Player(player));
    }

    addParticipant(player : Player)
    {
        let count = this._matches.length;

        if(count < 1 || (count >= 1 && this._matches[count-1].Player2 != null)){
            let newMatch = new Match();
            this._matches.push(newMatch);
            count++;
        }

        let lastMatch = this._matches[count - 1];
        lastMatch.add(player);

    }

}