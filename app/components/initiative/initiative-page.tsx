import { Text, SafeAreaView, StatusBar, Alert, AlertButton } from 'react-native';
import { labels } from "../../models/labels";
import { cssInitiative as css } from "./initiative-style";
import React, { Component } from 'react';
import Ctx from '../../models/context';
import HeaderPage from '../header/header-page';
import Npc from '../../models/npc';
import NpcListPage from '../npcList/npc-list-page';

export default class InitiativePage extends Component<{}, { npcs: Npc[], turno: number, countIdNpc: number, txtNameAdd: string, idSelected: number }> {


    constructor(props) {
        super(props);
        this.state = {
            npcs: [],
            turno: 0,
            countIdNpc: 1,
            txtNameAdd: "NPC",
            idSelected: 0
        };

        this.handleGetNpcs.bind(this);
        this.handleSetNpcs.bind(this);
        this.handleSortTurnButtonClick.bind(this);
    }

    generateNewId(): number {
        let countId: number = this.state.countIdNpc;
        countId++;
        this.setState({ countIdNpc: countId });
        return countId;

    }

    handleTurnValueChange = (turno) => {
        this.setState({ turno });
    };

    handleGetNpcs = (): Npc[] => {
        return this.state.npcs;
    }

    handleSetNpcs = (npcs: Npc[]) => {
        this.setState({ npcs });
    }

    handleGetTurn = (): number => {
        return this.state.turno;
    }

    handleSortTurnButtonClick = () => {

        let npcs: Npc[] = this.handleGetNpcs();
        // npcs = npcs.filter(x => x != null);
        // npcs = npcs.sort((a: Npc, b: Npc) => {

        //     if (a.initiativeModifier == b.initiativeModifier) {
        //         return 0
        //     }
        //     else if (a.initiativeModifier < b.initiativeModifier) {
        //         return 1
        //     }
        //     else {
        //         return -1;
        //     }
        // });

        // if (npcs != null && npcs.length == 1) {
        //     npcs[0].primeiroTurno = true;
        //     npcs[0].seuTurno = true;
        //     this.setState({ idSelected: npcs[0].id });
        // }

        // if (npcs != null && npcs.length > 2) {
        //     for (let i = 0; i < npcs.length; i++) {
        //         npcs[i].primeiroTurno = false;
        //         npcs[i].seuTurno = false;

        //         if (i === 0) {
        //             npcs[i].primeiroTurno = true;
        //             npcs[i].seuTurno = true;
        //             this.setState({ idSelected: npcs[i].id });
        //         }
        //     }
        // }

        this.handleSetNpcs(npcs);
    }

    handleNextTurnButtonClick = () => {
        let turno: number = this.state.turno;
        let npcs: Npc[] = this.handleGetNpcs();

        let index: number = npcs.findIndex(x => x.seuTurno);

        if (index >= 0 && npcs.length === index) {
            npcs[index].seuTurno = false;
            npcs[0].seuTurno = true;
            turno += 1;
            // this.setState({ npcs: npcs });
            this.setState({ idSelected: npcs[0].id });
        }

        if (index >= 0 && npcs.length < index) {
            npcs[index].seuTurno = false;
            npcs[index + 1].seuTurno = true;
            // this.setState({ npcs: npcs });
            this.setState({ idSelected: npcs[index + 1].id });
        }

        this.handleTurnValueChange(turno);
    };

    handlePreviousTurnButtonClick = () => {
        let turno: number = this.state.turno;
        turno -= 1;

        if (turno == -1) {
            turno = 0;
        }

        this.handleTurnValueChange(turno);
    };


    handleAddNcpButtonClick = () => {
        let npcs: Npc[] = this.state.npcs;

        npcs.push(this.createNpc(this.state.txtNameAdd));
    };

    handleClearAllNpcButtonClick = () => {

        let alertYes: AlertButton = {
            isPreferred: true,
            text: labels.header.limparNpcsApenas.Titulo,
            onPress: () => {
                let onlyPlayers: Npc[] = this.state.npcs.filter(x => x.isPlayer);
                this.setState({ npcs: onlyPlayers });
            }

        };

        let alertCancel: AlertButton = { isPreferred: false, text: labels.header.limparNpcsApenas.Cancelar, onPress: () => { } };

        Alert.alert(labels.header.limparNpcsApenas.Titulo, labels.header.limparNpcsApenas.Mensagem, [alertCancel, alertYes]);

    }
    handleClearAllLongClick = () => {
        let alertYes: AlertButton = {
            isPreferred: true, text: labels.header.limparNpcsEJogadores.Titulo, onPress: () => {
                this.setState({ npcs: [] });
            }
        };

        let alertCancel: AlertButton = { isPreferred: false, text: labels.header.limparNpcsEJogadores.Cancelar, onPress: () => { } };
        Alert.alert(labels.header.limparNpcsEJogadores.Titulo, labels.header.limparNpcsEJogadores.Mensagem, [alertCancel, alertYes]);
    }

    handleAddTextChange = (newText: string) => {
        this.setState({ txtNameAdd: newText });
    }

    createNpc(npcName: string): Npc {
        let npc: Npc = {
            id: this.generateNewId(),
            name: npcName + " " + this.state.countIdNpc,
            initiativeModifier: 0,
            isPlayer: false,
            alignment: "",
            armorClass: 10,
            attacks: [],
            attributes: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 },
            class: "Npc",
            currentHp: 10,
            maxHp: 10,
            movement: "9m",
            mainSkills: [],
            notes: "",
            race: "",
            primeiroTurno: false,
            seuTurno: false
        };

        return npc;
    }

    render() {

        return <SafeAreaView style={css.bodyContainer} >
            <StatusBar />
            <Text style={css.lblTitle}>{labels.initiative.title}</Text>
            <HeaderPage sortList={this.handleSortTurnButtonClick} nextTurn={this.handleNextTurnButtonClick} previousTurn={this.handlePreviousTurnButtonClick} getTurn={this.handleGetTurn} addNpc={this.handleAddNcpButtonClick} clearAllNpc={this.handleClearAllNpcButtonClick} addTextChange={this.handleAddTextChange} clearAllList={this.handleClearAllLongClick} />

            <NpcListPage npcs={this.handleGetNpcs()} idSelected={this.state.idSelected}>
            </NpcListPage>
        </SafeAreaView >
    }
}