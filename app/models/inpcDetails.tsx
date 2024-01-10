import Attack from "./iattack";
import Skill from "./iskill";

export default interface INpcDetails{
    
    id: number;
    movement: number;
    armorClass: number;
    note1: string;
    note2: string;
    note3: string;
    note4: string;
    note5: string;
    note6: string;
    

    attack1: Attack;
    attack2: Attack;
    attack3: Attack;

    skill1: Skill;
    skill2: Skill;
    skill3: Skill;
}