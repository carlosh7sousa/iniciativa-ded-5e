import NpcDetails from "./npcDetails";

export default interface Npc {
    id: number;
    initiativeModifier: number;
    isPlayer: boolean;
    name: string;
    currentHp: number;
    seuTurno: boolean;
    active: boolean;
    details: NpcDetails;
}