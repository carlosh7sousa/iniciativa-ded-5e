import ISkill from "./iskill";

export  default class Skill implements ISkill {
    id: number;
    name: string;
    modifier: string;

    constructor(){
        this.id = 0;
        this.name = "",
        this.modifier = "";
    }
}