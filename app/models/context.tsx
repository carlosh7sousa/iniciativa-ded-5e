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

        arr = arr.filter(x => x.ativo);
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
            alignment: "neutro bom",
            armorClass: 10,
            attacks: [],
            attributes: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 },
            class: "guerreiro",
            currentHp: 10,
            maxHp: 10,
            movement: "9m",
            mainSkills: [],
            notes: "",
            race: "Humano",
            primeiroTurno: false,
            seuTurno: false,
            ativo: true
        };

        return item;
    }
}