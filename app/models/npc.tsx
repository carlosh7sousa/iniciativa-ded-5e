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

    constructor(){
        this.details = new NpcDetails();
    }
}