import Attack from "./attack";
import INpcDetails from "./inpcDetails";
import Skill from "./skill";

export default class NpcDetails implements INpcDetails{
    
    id: number;
    movement: number;
    armorClass: number;
    note1:string;
    note2:string;
    note3:string;
    note4:string;
    note5:string;
    note6:string;
    


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
        this.id = 0;
        this.movement = 6;
        this.armorClass = 10;
        this.note1 = "";
        this.note2 = "";
        this.note3 = "";
        this.note4 = "";
        this.note5 = "";
        this.note6 = "";
    }
}
