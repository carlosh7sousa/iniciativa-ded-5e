import Attack from "./attack";
import INpcDetails from "./inpcDetails";
import Skill from "./skill";

export default class NpcDetails implements INpcDetails{
    
    id: number;
    movement: number;
    armorClass: number;
    notes: string;

    attack1: Attack;
    attack2: Attack;
    attack3: Attack;

    skill1: Skill;
    skill2: Skill;
    skill3: Skill;

    constructor(){
        this.attack1 = new Attack();
        this.attack2 = new Attack();
        this.attack3 = new Attack();
        this.skill1 = new Skill();
        this.skill2 = new Skill();
        this.skill3 = new Skill();        
    }
}