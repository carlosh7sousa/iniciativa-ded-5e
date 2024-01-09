import INpc from "./inpc";
import NpcDetails from "./npcDetails";

export default class Npc implements INpc {
    id: number;
    initiativeModifier: number;
    isPlayer: boolean;
    name: string;
    currentHp: number;
    seuTurno: boolean;
    active: boolean;
    details: NpcDetails;

    constructor(id: number){
        this.id = id;
        this.initiativeModifier = 0;
        this.name = "";
        this.active = true;
        this.currentHp = 0;
        this.seuTurno = false;
        this.isPlayer = false;
        this.details = new NpcDetails();
    }
}