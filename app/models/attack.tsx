import IAttack from "./iattack";

export default class Attack implements IAttack{
    id: number;
    weapon:string;
    modifier: number;
    damage: string;
}