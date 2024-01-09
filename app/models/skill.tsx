import ISkill from "./iskill";

export  default class Skill implements ISkill {
    id: number;
    name: string;
    modifier: number;

    constructor(){
        this.id = 0;
        this.name = "",
        this.modifier = 0;
    }
}