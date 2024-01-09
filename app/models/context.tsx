import Npc from "./npc"
import HeaderInfo from "./headerInfo";
import * as FileSystem from 'expo-file-system'
import FileJsonBd from "../../app-config/fileJsonBd";
import labels from "../../app-config/labels.json";

export default class Ctx {
    npcs: Npc[];
    headerInfo: HeaderInfo;
    fileUri: string = FileSystem.bundleDirectory + 'app-config/ded-context.json';
    fileName: string = "ded-context";

    constructor() {
        this.init();
    }

    init() {
        this.headerInfo = {
            idSelected: -1,
            turno: 0,
            txtNameAdd: ""
        }

        this.persist(this.npcs);
    }

    persist(npcs: Npc[]) {
        let jsonBd: FileJsonBd = new FileJsonBd();
        jsonBd.fileExists(this.fileUri)
            .then((value: FileSystem.FileInfo) => {

                if (!value.exists && !value.isDirectory) {
                    let objJson = { npcs: npcs };
                    this.npcs = npcs;

                    jsonBd.createFileAsync(this.fileUri, this.fileName, objJson).then((value: void) => {
                        this.lerNpcs(jsonBd);
                    }).catch((reason: any) => { console.log(labels.debugConsole.erroAoCriarJson + reason); });
                }
                else if (value.exists && !value.isDirectory) {
                    this.lerNpcs(jsonBd);
                }
            }).catch((reason: any) => {
                this.npcs = [];
                console.log(labels.debugConsole.erroAoVerificarSeJsonExiste + reason);
            });
    }


    lerNpcs(jsonFile: FileJsonBd) {
        jsonFile.readFileAsync(this.fileUri).then((value: string) => {
            let objNpcs: any = JSON.parse(value);
            this.npcs = objNpcs.npcs;
        }).catch((reason: any) => {
            this.npcs = [];
            console.log(labels.debugConsole.erroAoCriarJson + reason);
        });
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

    generatetNpcs(num: number): Npc[] {
        let npcs: Npc[] = [];
        for (let i = 1; i < num; i++) {
            npcs.push(this.createNpc(i, `npc ${i}`, i, false));
        }

        return npcs;
    }

    generatePlayers(num: number): Npc[] {
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
                    modifier: "",
                    damage: ""
                },
                attack2: {
                    id: 20,
                    weapon: "",
                    modifier: "",
                    damage: ""
                },
                attack3: {
                    id: 30,
                    weapon: "",
                    modifier: "",
                    damage: ""
                },
                skill1: {
                    id: 40,
                    name: "",
                    modifier: "",
                },
                skill2: {
                    id: 50,
                    name: "",
                    modifier: "",
                },
                skill3: {
                    id: 60,
                    name: "",
                    modifier: "",
                }
            }
        };

        return item;
    }
}