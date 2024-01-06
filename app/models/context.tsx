import Npc from "./npc"
import * as context from "../../app-config/context.json";

export default class Ctx
{
    npcs: Npc[] = [];


    constructor() {
        this.init();
    }

    init(){
        this.npcs = context.npcs;   
        this.npcs = [...this.npcs, ...this.initNpcs(20), ...this.initPlayers(3)];
    } 

    initNpcs(num:number): Npc[]{
        let npcs: Npc[] = [];
        for(let i = 0; i < num; i++)
        {
            npcs.push(this.createNpc(i, `npc ${i}`, 5 + i, false));
        }

        return npcs;
    }

    initPlayers(num:number): Npc[]{
        let npcs: Npc[] = [];
        for(let i = 0; i < num; i++)
        {
            npcs.push(this.createNpc(i, `player ${i}`, 10 + i, true));
        }

        return npcs;
    }  

    createNpc(id:number, name:string, init: number, isPlayer: boolean)
    {
        let item:Npc;
        
        item = {
            id: id,
            name: name,
            initiativeModifier: init,
            isPlayer: isPlayer,
            alignment: "neutro bom",
            armorClass: 10,
            attacks: [],
            attributes: {str:10, dex:10,con:10, int: 10, wis:10, cha:10 },
            class: "guerreiro",
            currentHp: 10,
            maxHp: 10,
            movement:"9m",
            mainSkills: [],
            notes:"",
            race: "Humano"
        };

        return item;
    }
}