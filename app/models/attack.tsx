import IAttack from "./iattack";

export default class Attack implements IAttack{
    id: number;
    weapon:string;
    modifier: string;
    damage: string;

    constructor(){
        this.id = 0;
        this.weapon = "";
        this.modifier = "";
        this.damage = "";
    }
}