import { Player } from './player.model';
export class Match
{
    private _p1 : Player;
    private _p2 : Player;

    constructor (){ }

    get Player1()
    {
        return this._p1;
    }

    get Player2()
    {
        return this._p2;
    }

    public add(newPlayer : Player)
    {
        if(this._p1 == null){
            this._p1 = newPlayer;
        } else if ( this._p2 == null){
            this._p2 = newPlayer;
        }
    }

    
}