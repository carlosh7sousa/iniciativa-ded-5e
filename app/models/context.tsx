import Npc from "./npc"
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
            details: null
        };

        return item;
    }
}