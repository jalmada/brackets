export class Player
{
    

    constructor (private _id : number, private _name : string){ }

    get Name()
    {
        return this._name;
    }

     get Id()
    {
        return this._id;
    }
}