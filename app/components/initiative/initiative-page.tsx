import { SafeAreaView, Alert, AlertButton, StatusBar, BackHandler } from 'react-native';
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

    ctx: Ctx;

    constructor(props) {
        super(props);

        this.ctx = new Ctx();

        this.state = {
            npcs: this.ctx.npcs,
            headerInfo: this.ctx.headerInfo,
            generatedId: 1,
            npcNum: 0
        };

        this.handleGetNpcs.bind(this);
        this.handleSetNpcs.bind(this);
        this.handleSortTurnButtonClick.bind(this);
        this.handleAddNcpButtonClick.bind(this);
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
        return this.obterNpcsAtivos();
    }

    handleSetNpcs = (npcs: Npc[]): void => {
        this.setState({ npcs });
    }

    handleGetTurn = (): number => {
        return this.state.headerInfo.turno;
    }

    handleSortTurnButtonClick = () => {

        let npcs: Npc[] = this.handleGetNpcs();
        if (npcs != null && npcs.length > 0) {

            let sortedNpc = npcs.sort((a: Npc, b: Npc) => {

                if (a.initiativeModifier == b.initiativeModifier) {
                    return 0
                }
                else if (a.initiativeModifier < b.initiativeModifier) {
                    return 1
                }
                else {
                    return -1;
                }
            });

            sortedNpc = sortedNpc.filter(x => x != null && x.active);

            if (sortedNpc != null && sortedNpc.length > 0) {
                sortedNpc.forEach(x => x.seuTurno = false);
                sortedNpc[0].seuTurno = true;

                let info = this.state.headerInfo;
                info.idSelected = sortedNpc[0].id;

                this.setState({ headerInfo: info });
                this.setState({ npcs: sortedNpc });
            }
        }
    }


    existeItensListaNpc = (): boolean => {
        let npcs: Npc[] = this.obterNpcsAtivos();
        return npcs != null && npcs.length > 0;
    }

    obterNpcSelecionado = (): Npc => {
        if (this.existeItensListaNpc()) {
            return this.state.npcs.find(x => x.id === this.state.headerInfo.idSelected && x.active);
        }

        return null;
    }


    selecionarPrimeiroNpc = () => {
        let npcsUpdated: Npc[] = this.obterNpcsAtivos();

        if (this.existeItensListaNpc()) {
            let info: HeaderInfo = this.state.headerInfo;

            for (let i: number = 0; i < npcsUpdated.length; i++) {
                npcsUpdated[i].seuTurno = npcsUpdated[i].id === npcsUpdated[0].id;
            }

            info.idSelected = npcsUpdated[0].id;

            this.setState({ headerInfo: info });
            this.setState({ npcs: npcsUpdated });
        }
    }

    obterNpcsAtivos() {
        if (this.state.npcs != null) {
            return this.state.npcs.filter(x => x.active && x.id > 0);
        }

        return [];
    }

    selecionarProximo = () => {
        let npcSelected: Npc = this.obterNpcSelecionado();

        if (npcSelected == null) {
            this.selecionarPrimeiroNpc();
        }

        if (npcSelected != null) {
            let npcsUpdated: Npc[] = this.obterNpcsAtivos();
            let index: number = npcsUpdated.findIndex(x => x.id === npcSelected.id);

            let nextIndex: number = index + 1;
            let nextSelectedId: number = -1;
            if (nextIndex >= npcsUpdated.length) {
                this.handleTurnValueChange(this.state.headerInfo.turno + 1);
                nextSelectedId = npcsUpdated[0].id;

            }
            else {
                nextSelectedId = npcsUpdated[nextIndex].id;
            }

            for (let i: number = 0; i < npcsUpdated.length; i++) {
                npcsUpdated[i].seuTurno = npcsUpdated[i].id === nextSelectedId;
            }

            let info = this.state.headerInfo;
            info.idSelected = nextSelectedId;



            this.setState({ headerInfo: info });
            this.setState({ npcs: npcsUpdated });
        }
    }

    handleNextTurnButtonClick = () => {

        this.selecionarProximo();
    };

    selecionarAnterior = () => {
        let npcSelected: Npc = this.obterNpcSelecionado();

        if (npcSelected == null) {
            this.selecionarPrimeiroNpc();
        }

        if (npcSelected != null) {
            let npcsUpdated: Npc[] = this.obterNpcsAtivos();
            let index: number = npcsUpdated.findIndex(x => x.id === npcSelected.id);

            let previousIndex: number = index - 1;
            let previousSelectedId: number = -1;

            let turno: number = this.state.headerInfo.turno;
            if (index === 0 && turno === 0) {
                return;
            }
            else if (previousIndex < 0) {
                turno = turno - 1;
                turno = turno <= 0 ? 0 : turno;
                this.handleTurnValueChange(turno);
                let ultimoIndex: number = npcsUpdated.length - 1;
                previousSelectedId = npcsUpdated[ultimoIndex].id;
            }
            else {
                previousSelectedId = npcsUpdated[previousIndex].id;
            }

            for (let i: number = 0; i < npcsUpdated.length; i++) {
                npcsUpdated[i].seuTurno = npcsUpdated[i].id === previousSelectedId;
            }

            let info = this.state.headerInfo;
            info.idSelected = previousSelectedId;

            this.setState({ headerInfo: info });
            this.setState({ npcs: npcsUpdated });
        }
    }

    handlePreviousTurnButtonClick = () => {
        this.selecionarAnterior();
    };


    handleAddNcpButtonClick = () => {
        let npcsUpdated: Npc[] = this.obterNpcsAtivos();
        let npc: Npc = this.createNpc(this.state.headerInfo.txtNameAdd);

        if (npcsUpdated.length === 0) {
            npc.seuTurno = true;
            let info: HeaderInfo = this.state.headerInfo;
            info.idSelected = npc.id;
            this.setState({ headerInfo: info });
        }

        npcsUpdated.push(npc);
        this.setState({ npcs: npcsUpdated });
    };

    handleClearAllNpcButtonClick = () => {

        let alertYes: AlertButton = {
            isPreferred: true,
            text: labels.header.limparNpcsApenas.Yes,
            onPress: () => {
                let npcs: Npc[] = this.obterNpcsAtivos();
                if (npcs != null) {
                    let onlyPlayers: Npc[] = npcs.filter(x => x.isPlayer);
                    this.setState({ npcs: onlyPlayers });
                    this.resetNpcNum(0);
                }

                let info: HeaderInfo = this.state.headerInfo;
                info.turno = 0;
                info.idSelected = -1;
                this.setState({ headerInfo: info });
            }
        };

        let alertCancel: AlertButton = { isPreferred: false, text: labels.header.limparNpcsApenas.Cancelar, onPress: () => { } };

        Alert.alert(labels.header.limparNpcsApenas.Titulo, labels.header.limparNpcsApenas.Mensagem, [alertCancel, alertYes]);
    }

    handleClearAllLongClick = () => {
        let alertYes: AlertButton = {
            isPreferred: true, text: labels.header.limparNpcsEJogadores.Yes, onPress: () => {
                this.setState({ npcs: [] });
                this.resetNpcNum(0);

                let info: HeaderInfo = this.state.headerInfo;
                info.turno = 0;
                info.idSelected = -1;
                this.setState({ headerInfo: info });
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
        let npc: Npc = new Npc(this.generateNewId());
        npc.name = npcName + " " + this.generateNewNpcNum();
        return npc;
    }

    handleSairClick = () => {
        let alertSairSemSalvar: AlertButton = { isPreferred: false, text: labels.app.persistirInfo.SairSemSalvar, onPress: () => { BackHandler.exitApp(); } };

        let alertCancel: AlertButton = { isPreferred: false, text: labels.app.persistirInfo.Cancelar, onPress: () => { } };
        Alert.alert(labels.app.persistirInfo.SairSemSalvar, labels.app.persistirInfo.Mensagem, [alertSairSemSalvar, alertCancel]);
    }

    setNpc =  (npc: Npc): void => {
        if (npc != null) {
            let idx: number = this.state.npcs.findIndex(x => x.id == npc.id && x.active);
            this.state.npcs[idx] = npc;
            this.setState({ npcs: this.state.npcs });
        }
    }

    getNpc = (idNpc: number): Npc => {
        let idx: number = this.state.npcs.findIndex(x => x.id == idNpc && x.active);
        return this.state.npcs[idx];
    }


    render() {

        return <SafeAreaView style={css.bodyContainer}>
            <StatusBar />

            <HeaderPage sair={this.handleSairClick} sortList={this.handleSortTurnButtonClick} nextTurn={this.handleNextTurnButtonClick} previousTurn={this.handlePreviousTurnButtonClick} getTurn={this.handleGetTurn} addNpc={this.handleAddNcpButtonClick} clearAllNpc={this.handleClearAllNpcButtonClick} addTextChange={this.handleAddTextChange} clearAllList={this.handleClearAllLongClick} />

            <NpcListPage npcs={this.obterNpcsAtivos()} idSelected={this.state.headerInfo.idSelected} setNpc={this.setNpc} getNpc={this.getNpc} >
            </NpcListPage>

            <FooterPage sortList={this.handleSortTurnButtonClick} nextTurn={this.handleNextTurnButtonClick} previousTurn={this.handlePreviousTurnButtonClick} getTurn={this.handleGetTurn} addNpc={this.handleAddNcpButtonClick} clearAllNpc={this.handleClearAllNpcButtonClick} addTextChange={this.handleAddTextChange} clearAllList={this.handleClearAllLongClick} />
        </SafeAreaView >
    }
}