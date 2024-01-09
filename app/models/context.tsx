import Npc from "./npc"
import HeaderInfo from "./headerInfo";
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';


const storage = new Storage({
    // maximum capacity, default 1000 key-ids
    size: 1000,

    // Use AsyncStorage for RN apps, or window.localStorage for web apps.
    // If storageBackend is not set, data will be lost after reload.
    storageBackend: AsyncStorage, // for web: window.localStorage

    // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
    // can be null, which means never expire.
    defaultExpires: null,

    // cache data in the memory. default is true.
    enableCache: true,

    // if data was not found in storage or expired data was found,
    // the corresponding sync method will be invoked returning
    // the latest data.
    sync: {
        // we'll talk about the details later.
    }
});

export default class Ctx {
    npcs: Npc[];
    headerInfo: HeaderInfo;
    storage: Storage;

    constructor() {
        this.init();
    }

    init() {
        this.headerInfo = {
            idSelected: -1,
            turno: 0,
            txtNameAdd: ""
        }

        this.load();
        this.initNpcs();    
    }

    initNpcs() {
        storage.getAllDataForKey('npcs').then(npcs => {
            this.npcs = npcs;
        });

    }

    persist(npcs: Npc[]) {
        storage.save({
            key: 'npcs', // Note: Do not use underscore("_") in key!
            data: {
                npcs: npcs
            },

            // if expires not specified, the defaultExpires will be applied instead.
            // if set to null, then it will never expire.
            expires: null
        });
    }

    // load
    load() {
        storage
            .load({
                key: 'npcs',

                // autoSync (default: true) means if data is not found or has expired,
                // then invoke the corresponding sync method
                autoSync: true,

                // syncInBackground (default: true) means if data expired,
                // return the outdated data first while invoking the sync method.
                // If syncInBackground is set to false, and there is expired data,
                // it will wait for the new data and return only after the sync completed.
                // (This, of course, is slower)
                syncInBackground: true,

                // you can pass extra params to the sync method
                // see sync example below
                syncParams: {
                    extraFetchOptions: {
                        // blahblah
                    },
                    someFlag: true
                }
            })
            .then(ret => {
                this.npcs = ret.npcs;
            })
            .catch(err => {
                // any exception including data not found
                // goes to catch()
                console.warn(err.message);
                switch (err.name) {
                    case 'NotFoundError':
                        this.persist([]);
                        break;
                    case 'ExpiredError':
                        // TODO
                        break;
                }
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