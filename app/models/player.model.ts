export class Player
{
    private _hideEditMode : boolean = true;
    private _nameView : string = '';


    constructor (private _id : number, private _name : string){ }

    get Name(){
        return this._name;
    }

    set NameView(value){
        this._nameView = value;
    }

    get Id(){
        return this._id;
    }

    get HideEditMode(){
        return this._hideEditMode;
    }

    set HideEditMode(value){
        this._hideEditMode = value;
    }

    edit(){
        this._hideEditMode = false;
    }

    save(){
        this._name = this._nameView;
        this._hideEditMode = true;
    }
    cancel(){
        this._hideEditMode = true;
    }
}