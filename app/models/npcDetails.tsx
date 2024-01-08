import Attack from "./attack";
import Skill from "./skill";

export default interface NpcDetails{
    
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
}