import Attack from "./attack";
import Attributes from "./attributes";
import Skills from "./skills";

export default interface Npc{
    
    id: number;
    name: string;

    race: string;
    class: string;
    alignment: string;

    initiativeModifier: number;    

    isPlayer: boolean;
    
    movement: string;
    armorClass: number;

    currentHp: number;
    notes: string;

    attributes: Attributes;
    mainSkills: Skills[];
    attacks: Attack[]; 

    seuTurno: boolean;
    ativo: boolean;
}





