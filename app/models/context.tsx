import Npc from "./inpc"
import * as context from "../../app-config/context.json";
import HeaderInfo from "./headerInfo";

export default class Ctx {
    npcs: Npc[];
    headerInfo: HeaderInfo;

    constructor() {
        this.init();
    }

    init() {
        this.headerInfo = {
            idSelected: -1,
            turno: 0,
            txtNameAdd: ""
        }

        let arr: Npc[] = [... this.initNpcs(20), ... this.initPlayers(9), ...context.npcs];
        this.npcs = this.obterUniqueNpcs(arr);
    }

    obterUniqueNpcs(arr: Npc[]): Npc[] {

        if (arr == null) {
            return [];
        }

        arr = arr.filter(x => x.active);
        let ids: number[] = [];

        let result: Npc[] = [];
        for (let i: number = 0; i < arr.length; i++) {

            if (!ids.includes(arr[i].id)) {
                ids.push(arr[i].id);
                result.push(arr[i]);
            }
        }

        return result;
    }



    initNpcs(num: number): Npc[] {
        let npcs: Npc[] = [];
        for (let i = 1; i < num; i++) {
            npcs.push(this.createNpc(i, `npc ${i}`, i, false));
        }

        return npcs;
    }

    initPlayers(num: number): Npc[] {
        let npcs: Npc[] = [];
        for (let i = 1; i < num; i++) {
            npcs.push(this.createNpc(500 + i, `player ${i}`, i, true));
        }

        return npcs;
    }

    createNpc(id: number, name: string, init: number, isPlayer: boolean) {
        let item: Npc;

        item = {
            id: id,
            name: name,
            initiativeModifier: init,
            isPlayer: isPlayer,
            currentHp: 10,
            seuTurno: false,
            active: true,
            details: {
                id: 10,
                movement: 9,
                armorClass: 10,
                notes: "",
                attack1: {
                    id: 10,
                    weapon: "",
                    modifier: 0,
                    damage: ""
                },
                attack2: {
                    id: 20,
                    weapon: "",
                    modifier: 0,
                    damage: ""
                },
                attack3: {
                    id: 30,
                    weapon: "",
                    modifier: 0,
                    damage: ""
                },
                skill1: {
                    id: 40,
                    name: "",
                    modifier: 0,
                },
                skill2: {
                    id: 50,
                    name: "",
                    modifier: 0,
                },
                skill3: {
                    id: 60,
                    name: "",
                    modifier: 0,
                } 
            }
        };

        return item;
    }
}