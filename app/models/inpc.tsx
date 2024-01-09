import NpcDetails from "./inpcDetails";

export default interface INpc {
    id: number;
    initiativeModifier: number;
    isPlayer: boolean;
    name: string;
    currentHp: number;
    seuTurno: boolean;
    active: boolean;
    details: NpcDetails;
}