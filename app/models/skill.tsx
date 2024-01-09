import ISkill from "./iskill";

export  default class Skill implements ISkill {
    id: number;
    name: string;
    modifier: number;
}