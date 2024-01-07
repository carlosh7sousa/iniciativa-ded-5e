import { Text, SafeAreaView, Alert, AlertButton, StatusBar } from 'react-native';
import { labels } from "../../models/labels";
import { cssInitiative as css } from "./initiative-style";
import React, { Component } from 'react';
import Ctx from '../../models/context';
import HeaderPage from '../header/header-page';
import Npc from '../../models/npc';
import NpcListPage from '../npcList/npc-list-page';
import HeaderInfo from '../../models/headerInfo';
import FooterPage from '../footer/footer-page';

export default class InitiativePage extends Component<{}, { npcs: Npc[], headerInfo: HeaderInfo, generatedId: number, npcNum: number }> {


    constructor(props) {
        super(props);

        let ctx: Ctx = new Ctx();

        this.state = {
            npcs: ctx.npcs,
            headerInfo: ctx.headerInfo,
            generatedId: 1,
            npcNum: 1
        };

        this.handleGetNpcs.bind(this);
        this.handleSetNpcs.bind(this);
        this.handleSortTurnButtonClick.bind(this);
    }

    resetNpcNum(restartNpcNum: number) {
        this.setState({ npcNum: restartNpcNum })
    }

    generateNewId(): number {
        let countId: number = this.state.generatedId;
        countId++;
        this.setState({ generatedId: countId });
        return countId;
    }

    generateNewNpcNum(): number {
        let countNpcNum: number = this.state.npcNum;
        countNpcNum++;
        this.setState({ npcNum: countNpcNum });
        return countNpcNum;
    }

    handleTurnValueChange = (turno) => {
        let headerInfo: HeaderInfo = this.state.headerInfo;
        headerInfo.turno = turno;
        this.setState({ headerInfo });
    };

    handleGetNpcs = (): Npc[] => {
        return this.state.npcs;
    }

    handleSetNpcs = (npcs: Npc[]) => {
        this.setState({ npcs });
    }

    handleGetTurn = (): number => {
        return this.state.headerInfo.turno;
    }

    handleSortTurnButtonClick = () => {

        let npcs: Npc[] = this.handleGetNpcs();

    }

    handleNextTurnButtonClick = () => {
        let turno: number = this.state.headerInfo.turno;
        let npcs: Npc[] = this.handleGetNpcs();

        let index: number = npcs.findIndex(x => x.seuTurno);

        if (index >= 0 && npcs.length === index) {
            npcs[index].seuTurno = false;
            npcs[0].seuTurno = true;
            turno += 1;
            // this.setState({ npcs: npcs });

            let info: HeaderInfo = this.state.headerInfo;
            info.idSelected = npcs[0].id;
            this.setState({ headerInfo: info });
        }

        if (index >= 0 && npcs.length < index) {
            npcs[index].seuTurno = false;
            npcs[index + 1].seuTurno = true;
            // this.setState({ npcs: npcs });

            let info: HeaderInfo = this.state.headerInfo;
            info.idSelected = npcs[index + 1].id
            this.setState({ headerInfo: info });
        }

        this.handleTurnValueChange(turno);
    };

    handlePreviousTurnButtonClick = () => {
        let turno: number = this.state.headerInfo.turno;
        turno -= 1;

        if (turno == -1) {
            turno = 0;
        }

        this.handleTurnValueChange(turno);
    };


    handleAddNcpButtonClick = () => {
        let npcs: Npc[] = this.state.npcs;
        npcs.push(this.createNpc(this.state.headerInfo.txtNameAdd));
    };

    handleClearAllNpcButtonClick = () => {

        let alertYes: AlertButton = {
            isPreferred: true,
            text: labels.header.limparNpcsApenas.Titulo,
            onPress: () => {

                if (this.state.npcs != null) {
                    let onlyPlayers: Npc[] = this.state.npcs.filter(x => x.isPlayer);
                    this.setState({ npcs: onlyPlayers });
                    this.resetNpcNum(0);
                }
            }

        };

        let alertCancel: AlertButton = { isPreferred: false, text: labels.header.limparNpcsApenas.Cancelar, onPress: () => { } };

        Alert.alert(labels.header.limparNpcsApenas.Titulo, labels.header.limparNpcsApenas.Mensagem, [alertCancel, alertYes]);

    }
    handleClearAllLongClick = () => {
        let alertYes: AlertButton = {
            isPreferred: true, text: labels.header.limparNpcsEJogadores.Titulo, onPress: () => {
                this.setState({ npcs: [] });
                this.resetNpcNum(0);
            }
        };

        let alertCancel: AlertButton = { isPreferred: false, text: labels.header.limparNpcsEJogadores.Cancelar, onPress: () => { } };
        Alert.alert(labels.header.limparNpcsEJogadores.Titulo, labels.header.limparNpcsEJogadores.Mensagem, [alertCancel, alertYes]);
    }

    handleAddTextChange = (newText: string) => {
        let info: HeaderInfo = this.state.headerInfo;
        info.txtNameAdd = newText;
        this.setState({ headerInfo: info });
    }

    createNpc(npcName: string): Npc {
        let npc: Npc = {
            id: this.generateNewId(),
            name: npcName + " " + this.generateNewNpcNum(),
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

        return <SafeAreaView style={css.bodyContainer}>
            <StatusBar />


            <HeaderPage sortList={this.handleSortTurnButtonClick} nextTurn={this.handleNextTurnButtonClick} previousTurn={this.handlePreviousTurnButtonClick} getTurn={this.handleGetTurn} addNpc={this.handleAddNcpButtonClick} clearAllNpc={this.handleClearAllNpcButtonClick} addTextChange={this.handleAddTextChange} clearAllList={this.handleClearAllLongClick} />

            <NpcListPage npcs={this.state.npcs} idSelected={this.state.headerInfo.idSelected}>
            </NpcListPage>


            <FooterPage sortList={this.handleSortTurnButtonClick} nextTurn={this.handleNextTurnButtonClick} previousTurn={this.handlePreviousTurnButtonClick} getTurn={this.handleGetTurn} addNpc={this.handleAddNcpButtonClick} clearAllNpc={this.handleClearAllNpcButtonClick} addTextChange={this.handleAddTextChange} clearAllList={this.handleClearAllLongClick} />
        </SafeAreaView >
    }
}