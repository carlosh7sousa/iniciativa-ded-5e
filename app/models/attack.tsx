import IAttack from "./iattack";

export default class Attack implements IAttack{
    id: number;
    weapon:string;
    modifier: number;
    damage: string;

    constructor(){
        this.id = 0;
        this.weapon = "";
        this.modifier = 0;
        this.damage = "";
    }
}