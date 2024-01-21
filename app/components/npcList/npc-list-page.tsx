import React, { Component } from 'react';
import Npc from "../../models/npc";
import { Modal, Pressable, ScrollView, TextInput, View, Text, SafeAreaView, Switch } from "react-native";
import NpcPage from "../npc/npc-page";
import { cssNpcList as css } from "./npc-list-style";
import { labels } from "../../models/labels";

export default class NpcListPage extends Component<{ npcs: Npc[], idSelected: number, triggerParentUpdate(idNpc: number, upd: Npc): void }, { npcs: Npc[], idNpcModalPv: number, oldModalPv: number, newModalPv: number, idNpcModalVer: number, modalVerDetailNpcNew: Npc, modalVerDetailNpcOld: Npc }> {

    constructor(props) {
        super(props);
        this.state = {
            npcs: this.props.npcs,

            oldModalPv: 0,
            newModalPv: 0,
            idNpcModalPv: -1,

            modalVerDetailNpcOld: null,
            modalVerDetailNpcNew: null,
            idNpcModalVer: -1
        };

        this.handlerSetNpc = this.handlerSetNpc.bind(this);
        this.handlerGetNpc = this.handlerGetNpc.bind(this);
        this.handlerPvButtonClick = this.handlerPvButtonClick.bind(this);
        this.handlerNpcVerDetailsButtonClick = this.handlerNpcVerDetailsButtonClick.bind(this);
    }


    handlerSetNpc = (npc: Npc, idNpc: number): void => {
        if (npc && idNpc >= 0) {
            let idx: number = this.props.npcs.findIndex(x => x.id == idNpc && x.active);            
            this.props.npcs[idx] = npc;
            this.setState({ npcs: this.props.npcs });

            this.props.triggerParentUpdate(idNpc, npc);
        }
    }

    handlerGetNpc = (idNpc: number): Npc => {
        
        let idx: number = this.props.npcs.findIndex(x => x.id === idNpc && x.active);        
        return this.props.npcs[idx];
    }

    handlerPvButtonClick = (): void => {

        let npc: Npc = this.handlerGetNpc(this.props.idSelected);

        if(npc != null)
        {
            let oldPv: number = 0;
            if (npc != null) {
                oldPv = npc.currentHp;
            }
    
            this.setState({ idNpcModalPv: npc.id, oldModalPv: oldPv });
        }
    }


    handlerNpcVerDetailsButtonClick = (): void => {

        let idx: number = this.props.npcs.findIndex(x => x.id == this.props.idSelected && x.active);
        let npcVer: Npc = this.props.npcs[idx];

        if (npcVer != null) {
            this.setState({ idNpcModalVer: npcVer.id });
            this.setState({ modalVerDetailNpcNew: this.createClone(npcVer) });
            this.setState({ modalVerDetailNpcOld: this.createClone(npcVer) });
        }
    }

    createClone(npc: Npc) {
        let clone: Npc = { ...npc };
        clone.details = { ...npc.details };
        clone.details.skill1 = { ...clone.details.skill1 };
        clone.details.skill2 = { ...clone.details.skill2 };
        clone.details.skill3 = { ...clone.details.skill3 };
        clone.details.attack1 = { ...clone.details.attack1 };
        clone.details.attack2 = { ...clone.details.attack2 };
        clone.details.attack3 = { ...clone.details.attack3 };
        return clone;
    }

    handleModalPvTextChange = (strNewValue: string) => {
        let npc: Npc = this.handlerGetNpc(this.state.idNpcModalPv);
        let newPv: number = parseInt(strNewValue);
        if (isNaN(newPv)) {
            newPv = 0;
        }

        this.setState({ newModalPv: newPv });
        this.handlerSetNpc(npc, this.state.idNpcModalPv);
    }

    isVisibleModalPv = (idNpc: number): boolean => {

        let idx: number = this.state.npcs.findIndex(x => x.id == idNpc);
        if (idx < 0) {
            return false;
        }

        return true;
    }

    isVisibleModalVer = (idNpc: number): boolean => {
                
        let idx: number = this.state.npcs.findIndex(x => x.id == idNpc);
        if (idx < 0) {
            return false;
        }

        return true;
    }

    resetModalState = () => {
        this.setState({ idNpcModalPv: -1 });
        this.setState({ newModalPv: 0 });
        this.setState({ oldModalPv: 0 });
    }

    resetModalVerState = () => {
        this.setState({ idNpcModalVer: -1 });
        this.setState({ modalVerDetailNpcOld: null });
        this.setState({ modalVerDetailNpcNew: null });
    }


    handlePvAtribuir = () => {

        let npc: Npc = this.handlerGetNpc(this.state.idNpcModalPv);
        if (npc != null) {
            let newPv: number = this.state.newModalPv;
            if (isNaN(newPv)) {
                newPv = 0;
            }

            npc.currentHp = newPv;
            this.handlerSetNpc(npc, this.state.idNpcModalPv);
            this.resetModalState();
        }
    }

    handlePvSomar = () => {

        let npc: Npc = this.handlerGetNpc(this.state.idNpcModalPv);
        if (npc != null) {
            let newPv: number = this.state.newModalPv;
            if (isNaN(newPv)) {
                newPv = 0;
            }

            if (isNaN(npc.currentHp)) {
                npc.currentHp = 0;
            }

            npc.currentHp = this.state.oldModalPv + this.state.newModalPv;
            this.handlerSetNpc(npc, this.state.idNpcModalPv);
            this.resetModalState();
        }
    }


    handlePvSubtrair = () => {

        let npc: Npc = this.handlerGetNpc(this.state.idNpcModalPv);

        if (npc != null) {
            let newPv: number = this.state.newModalPv;
            if (isNaN(newPv)) {
                newPv = 0;
            }

            npc.currentHp = this.state.oldModalPv - this.state.newModalPv;
            this.handlerSetNpc(npc, this.state.idNpcModalPv);
            this.resetModalState();
        }
    }

    handleDetailsAtribuir = () => {

        let npc: Npc = this.handlerGetNpc(this.state.idNpcModalVer);
        if (npc != null) {
            let newPv: number = this.state.newModalPv;
            if (isNaN(newPv)) {
                newPv = 0;
            }

            npc.currentHp = newPv;
            this.handlerSetNpc(npc, this.state.idNpcModalVer);
            this.resetModalState();
        }
    }
 
    handleCloseModal = () => {
        this.resetModalState();
    }

    handleModalNpcNameValue = (): string => {
        let npc: Npc = this.handlerGetNpc(this.state.idNpcModalVer);
        if (npc != null) {
            return npc.name + labels.modalNpc.separador1;
        }

        return "";
    }

    handleModalNpcPvValue = (): string => {
        return this.state.oldModalPv.toString();
    }



    handleModalVerNameValue = (): string => {
        let npc: Npc = this.handlerGetNpc(this.state.idNpcModalVer);
        if (npc != null) {
            return npc.name;
        }

        return "";
    }


    handleModalVerAtualizar = () => {
        let updatedNpc: Npc = this.state.modalVerDetailNpcNew;
        this.handlerSetNpc(updatedNpc, this.state.idNpcModalVer);
        this.resetModalVerState();
    }

    handleModalVerCancelar = () => {
        let updatedNpc: Npc = this.state.modalVerDetailNpcOld;

        this.handlerSetNpc(updatedNpc, this.state.idNpcModalVer);
        this.resetModalVerState();
    }


    existeNpcDetails(npc: Npc): boolean {
        return npc != null && npc.details != null;
    }



    handleModalVerDetailDeslocTextChange = (newText: string) => {
        let mNpc: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(mNpc)) {

            let newValue: number = parseInt(newText);
            if (isNaN(newValue)) {
                newValue = 0;
            }

            mNpc.details.movement = newValue;
            this.setState({ modalVerDetailNpcNew: mNpc });
        }
    }

    handleModalVerDetailDeslocValue = (): string => {
        let npcTemp: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(npcTemp)) {
            return this.state.modalVerDetailNpcNew.details.movement.toString();
        }

        return "";
    }

    handleModalVerDetailPvsTextChange = (newText: string) => {
        let mNpc: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(mNpc)) {

            let newValue: number = parseInt(newText);
            if (isNaN(newValue)) {
                newValue = 0;
            }

            mNpc.currentHp = newValue;
            this.setState({ modalVerDetailNpcNew: mNpc });
        }
    }

    handleModalVerDetailPvsValue = (): string => {
        let npcTemp: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(npcTemp)) {
            return this.state.modalVerDetailNpcNew.currentHp.toString();
        }

        return "";
    }

    handleModalVerDetailCaTextChange = (newText: string) => {
        let mNpc: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(mNpc)) {

            let newValue: number = parseInt(newText);
            if (isNaN(newValue)) {
                newValue = 0;
            }

            mNpc.details.armorClass = newValue;
            this.setState({ modalVerDetailNpcNew: mNpc });
        }
    }

    handleModalVerDetailCaValue = (): string => {
        let npcTemp: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(npcTemp)) {
            return this.state.modalVerDetailNpcNew.details.armorClass.toString();
        }

        return "";
    }



    handleModalVerDetailEJogadorValueChange = (selected: boolean) => {
        let mNpc: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(mNpc)) {
            mNpc.isPlayer = selected;
            this.setState({ modalVerDetailNpcNew: mNpc });
        }
    }

    handleModalVerDetailEJogadorValue = (): boolean => {
        let npcTemp: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(npcTemp)) {
            return this.state.modalVerDetailNpcNew.isPlayer;
        }

        return false;
    }

    handleModalVerDetailPer1NameTextChange = (newText: string) => {
        let mNpc: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(mNpc)) {
            mNpc.details.skill1.name = newText;
            this.setState({ modalVerDetailNpcNew: mNpc });
        }
    }

    handleModalVerDetailPer1NameValue = (): string => {
        let npcTemp: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(npcTemp)) {
            return this.state.modalVerDetailNpcNew.details.skill1.name;
        }

        return "";
    }

    handleModalVerDetailPer1ModTextChange = (newText: string) => {
        let mNpc: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(mNpc)) {
            mNpc.details.skill1.modifier = newText;
            this.setState({ modalVerDetailNpcNew: mNpc });
        }
    }

    handleModalVerDetailPer1ModValue = (): string => {
        let npcTemp: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(npcTemp)) {
            return this.state.modalVerDetailNpcNew.details.skill1.modifier;
        }

        return "";
    }

    handleModalVerDetailPer2NameTextChange = (newText: string) => {
        let mNpc: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(mNpc)) {
            mNpc.details.skill2.name = newText;
            this.setState({ modalVerDetailNpcNew: mNpc });
        }
    }


    handleModalVerDetailPer2NameValue = (): string => {
        let npcTemp: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(npcTemp)) {
            return this.state.modalVerDetailNpcNew.details.skill2.name;
        }

        return "";
    }

    handleModalVerDetailPer2ModTextChange = (newText: string) => {
        let mNpc: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(mNpc)) {
            mNpc.details.skill2.modifier = newText;
            this.setState({ modalVerDetailNpcNew: mNpc });
        }
    }

    handleModalVerDetailPer2ModValue = (): string => {
        let npcTemp: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(npcTemp)) {
            return this.state.modalVerDetailNpcNew.details.skill2.modifier;
        }

        return "";
    }




    handleModalVerDetailPer3NameTextChange = (newText: string) => {
        let mNpc: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(mNpc)) {
            mNpc.details.skill3.name = newText;
            this.setState({ modalVerDetailNpcNew: mNpc });
        }
    }


    handleModalVerDetailPer3NameValue = (): string => {
        let npcTemp: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(npcTemp)) {
            return this.state.modalVerDetailNpcNew.details.skill3.name;
        }

        return "";
    }

    handleModalVerDetailAttack1NameTextChange = (newText: string) => {
        let mNpc: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(mNpc)) {
            mNpc.details.attack1.weapon = newText;
            this.setState({ modalVerDetailNpcNew: mNpc });
        }
    }


    handleModalVerDetailAttack1NameValue = (): string => {
        let npcTemp: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(npcTemp)) {
            return this.state.modalVerDetailNpcNew.details.attack1.weapon;
        }

        return "";
    }

    handleModalVerDetailAttack2NameTextChange = (newText: string) => {
        let mNpc: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(mNpc)) {
            mNpc.details.attack2.weapon = newText;
            this.setState({ modalVerDetailNpcNew: mNpc });
        }
    }


    handleModalVerDetailAttack2NameValue = (): string => {
        let npcTemp: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(npcTemp)) {
            return this.state.modalVerDetailNpcNew.details.attack2.weapon;
        }

        return "";
    }


    handleModalVerDetailAttack3NameTextChange = (newText: string) => {
        let mNpc: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(mNpc)) {
            mNpc.details.attack3.weapon = newText;
            this.setState({ modalVerDetailNpcNew: mNpc });
        }
    }


    handleModalVerDetailAttack3NameValue = (): string => {
        let npcTemp: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(npcTemp)) {
            return this.state.modalVerDetailNpcNew.details.attack3.weapon;
        }

        return "";
    }


    handleModalVerDetailPer3ModTextChange = (newText: string) => {
        let mNpc: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(mNpc)) {
            mNpc.details.skill3.modifier = newText;
            this.setState({ modalVerDetailNpcNew: mNpc });
        }
    }

    handleModalVerDetailPer3ModValue = (): string => {
        let npcTemp: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(npcTemp)) {
            return this.state.modalVerDetailNpcNew.details.skill3.modifier;
        }

        return "";
    }

    handleModalVerDetailAttack1ModTextChange = (newText: string) => {
        let mNpc: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(mNpc)) {

            mNpc.details.attack1.modifier = newText;
            this.setState({ modalVerDetailNpcNew: mNpc });
        }
    }

    handleModalVerDetailAttack1ModValue = (): string => {
        let npcTemp: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(npcTemp)) {
            return this.state.modalVerDetailNpcNew.details.attack1.modifier;
        }

        return "";
    }

    handleModalVerDetailAttack2ModTextChange = (newText: string) => {
        let mNpc: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(mNpc)) {
            mNpc.details.attack2.modifier = newText;
            this.setState({ modalVerDetailNpcNew: mNpc });
        }
    }

    handleModalVerDetailAttack2ModValue = (): string => {
        let npcTemp: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(npcTemp)) {
            return this.state.modalVerDetailNpcNew.details.attack2.modifier;
        }

        return "";
    }

    handleModalVerDetailAttack3ModTextChange = (newText: string) => {
        let mNpc: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(mNpc)) {
            mNpc.details.attack3.modifier = newText
            this.setState({ modalVerDetailNpcNew: mNpc });
        }
    }

    handleModalVerDetailAttack3ModValue = (): string => {
        let npcTemp: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(npcTemp)) {
            return this.state.modalVerDetailNpcNew.details.attack3.modifier;
        }

        return "";
    }


    handleModalVerDetailAttack1DmgTextChange = (newText: string) => {
        let mNpc: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(mNpc)) {
            mNpc.details.attack1.damage = newText;
            this.setState({ modalVerDetailNpcNew: mNpc });
        }
    }


    handleModalVerDetailAttack1DmgValue = (): string => {
        let npcTemp: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(npcTemp)) {
            return this.state.modalVerDetailNpcNew.details.attack1.damage;
        }

        return "";
    }

    handleModalVerDetailAttack2DmgTextChange = (newText: string) => {
        let mNpc: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(mNpc)) {
            mNpc.details.attack2.damage = newText;
            this.setState({ modalVerDetailNpcNew: mNpc });
        }
    }


    handleModalVerDetailAttack2DmgValue = (): string => {
        let npcTemp: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(npcTemp)) {
            return this.state.modalVerDetailNpcNew.details.attack2.damage;
        }

        return "";
    }

    handleModalVerDetailAttack3DmgTextChange = (newText: string) => {
        let mNpc: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(mNpc)) {
            mNpc.details.attack3.damage = newText;
            this.setState({ modalVerDetailNpcNew: mNpc });
        }
    }

    handleModalVerDetailAttack3DmgValue = (): string => {
        let npcTemp: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(npcTemp)) {
            return this.state.modalVerDetailNpcNew.details.attack3.damage;
        }

        return "";
    }

    handleModalVerDetailNote1TextChange = (newText: string) => {
        let mNpc: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(mNpc)) {
            mNpc.details.note1 = newText;
            this.setState({ modalVerDetailNpcNew: mNpc });
        }
    }

    handleModalVerDetailNote1Value = (): string => {
        let npcTemp: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(npcTemp)) {
            return this.state.modalVerDetailNpcNew.details.note1;
        }

        return "";
    }

    handleModalVerDetailNote2TextChange = (newText: string) => {
        let mNpc: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(mNpc)) {
            mNpc.details.note2 = newText;
            this.setState({ modalVerDetailNpcNew: mNpc });
        }
    }

    handleModalVerDetailNote2Value = (): string => {
        let npcTemp: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(npcTemp)) {
            return this.state.modalVerDetailNpcNew.details.note2;
        }

        return "";
    }

    handleModalVerDetailNote3TextChange = (newText: string) => {
        let mNpc: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(mNpc)) {
            mNpc.details.note3 = newText;
            this.setState({ modalVerDetailNpcNew: mNpc });
        }
    }

    handleModalVerDetailNote3Value = (): string => {
        let npcTemp: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(npcTemp)) {
            return this.state.modalVerDetailNpcNew.details.note3;
        }

        return "";
    }

    handleModalVerDetailNote4TextChange = (newText: string) => {
        let mNpc: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(mNpc)) {
            mNpc.details.note4 = newText;
            this.setState({ modalVerDetailNpcNew: mNpc });
        }
    }

    handleModalVerDetailNote4Value = (): string => {
        let npcTemp: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(npcTemp)) {
            return this.state.modalVerDetailNpcNew.details.note4;
        }

        return "";
    }

    handleModalVerDetailNote5TextChange = (newText: string) => {
        let mNpc: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(mNpc)) {
            mNpc.details.note5 = newText;
            this.setState({ modalVerDetailNpcNew: mNpc });
        }
    }

    handleModalVerDetailNote5Value = (): string => {
        let npcTemp: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(npcTemp)) {
            return this.state.modalVerDetailNpcNew.details.note5;
        }

        return "";
    }

    handleModalVerDetailNote6TextChange = (newText: string) => {
        let mNpc: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(mNpc)) {
            mNpc.details.note6 = newText;
            this.setState({ modalVerDetailNpcNew: mNpc });
        }
    }

    handleModalVerDetailNote6Value = (): string => {
        let npcTemp: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(npcTemp)) {
            return this.state.modalVerDetailNpcNew.details.note6;
        }

        return "";
    }

    render() {

        return (
            <SafeAreaView>
                <SafeAreaView style={css.vwNpcListComponent}>

                    <SafeAreaView style={css.headerView3}>
                        <Text style={css.lblListaLabel}>{labels.npc.lblListTitle}</Text>
                    </SafeAreaView>

                    <ScrollView style={css.listaNpcsView}>
                        {this.props.npcs.map((npc: Npc, index: number) => {
                            if (npc.active) {
                                return (<NpcPage key={index} idNpc={npc.id} handlerGetNpc={this.handlerGetNpc} handlerSetNpc={this.handlerSetNpc} handlerPvButtonClick={this.handlerPvButtonClick} npcsReadonly={this.props.npcs} handlerNpcVerDetailsButtonClick={this.handlerNpcVerDetailsButtonClick} />)
                            }

                            return ("");
                        })}
                    </ScrollView>

                </SafeAreaView>


                <Modal visible={this.isVisibleModalPv(this.state.idNpcModalPv)} transparent={true}>
                    <SafeAreaView style={css.modalView}>
                        <SafeAreaView style={css.modalArea}>

                            <SafeAreaView style={css.modalRow1}>
                                <Text style={css.modalLblTitulo}>{labels.modalNpc.titulo}</Text>
                                <Pressable style={css.modalBtnClose}
                                    onPress={this.handleCloseModal}>

                                    <Text style={css.modalLblBtnClose}>{labels.modalNpc.btnClose}</Text>
                                </Pressable>
                            </SafeAreaView>

                            <SafeAreaView style={css.modalRow2}>
                                <Text style={css.modalLblName}>{this.handleModalNpcNameValue()} {labels.modalNpc.labelPv}{labels.modalNpc.separador2} {this.handleModalNpcPvValue()}</Text>
                            </SafeAreaView>
                            <SafeAreaView style={css.modalRow3}>
                                <TextInput style={css.modalTxtPv} selectTextOnFocus onChangeText={this.handleModalPvTextChange} inputMode='numeric' maxLength={4} >
                                </TextInput>
                            </SafeAreaView>
                            <SafeAreaView style={css.modalRow4}>

                                <Pressable style={css.modalBtnSubtract}
                                    onPress={this.handlePvSubtrair}>
                                    <Text style={css.modalLblBtnSubtract}>{labels.modalNpc.btnSubtract}</Text>
                                </Pressable>
                                <Pressable style={css.modalBtnAdd}
                                    onPress={this.handlePvSomar}>
                                    <Text style={css.modalLblBtnAdd}>{labels.modalNpc.btnAdd}</Text>
                                </Pressable>
                                <Pressable style={css.modalBtnSet}
                                    onPress={this.handlePvAtribuir}>
                                    <Text style={css.modalLblBtnSet}>{labels.modalNpc.btnSet}</Text>
                                </Pressable>
                            </SafeAreaView>
                        </SafeAreaView>
                    </SafeAreaView>
                </Modal>


                <Modal visible={this.isVisibleModalVer(this.state.idNpcModalVer)} transparent={true}>
                    <SafeAreaView style={css.modalVerView}>
                        <SafeAreaView style={css.modalVerArea}>

                            <SafeAreaView style={css.modalVerRowTitulo}>
                                <Text style={css.modalVerLblTitulo}>{labels.modalVer.titulo}</Text>
                            </SafeAreaView>

                            <SafeAreaView style={css.modalVerRowTitulo}>
                                <Text style={css.modalVerLblNpcNome}>{this.handleModalVerNameValue()} </Text>
                            </SafeAreaView>

                            <SafeAreaView style={css.modalVerRow2}>
                                <Text style={css.modalVerLblDeslocamento} >{labels.modalVer.lblDeslocamento}</Text>
                                <TextInput style={css.modalVerTxtDeslocamento} selectTextOnFocus maxLength={4} inputMode='numeric' onChangeText={this.handleModalVerDetailDeslocTextChange} value={this.handleModalVerDetailDeslocValue()}>
                                </TextInput>
                                <Text style={css.modalVerLblAnotacoes}> </Text>
                            </SafeAreaView>

                            <SafeAreaView style={css.modalVerRow2}>

                                <Text style={css.modalVerLblEJogador}>{labels.modalVer.lblEJogador}</Text>
                                <Switch style={css.modalVerOptEJogador} onValueChange={this.handleModalVerDetailEJogadorValueChange} value={this.handleModalVerDetailEJogadorValue()}>
                                </Switch>
                                <Text style={css.modalVerLblAnotacoes}>{labels.modalVer.lblAnotacoes}</Text>

                            </SafeAreaView>

                            <SafeAreaView style={css.modalVerRow2}>
                                <Text style={css.modalVerLblPVs}>{labels.modalVer.labelPv}{labels.modalVer.separador2} </Text>
                                <TextInput style={css.modalVertxtPvs} selectTextOnFocus inputMode='numeric' maxLength={4} onChangeText={this.handleModalVerDetailPvsTextChange} value={this.handleModalVerDetailPvsValue()}>
                                </TextInput>


                                <TextInput style={css.modalVertxtAnotacao} selectTextOnFocus maxLength={12} onChangeText={this.handleModalVerDetailNote1TextChange} value={this.handleModalVerDetailNote1Value()}>
                                </TextInput>
                            </SafeAreaView>

                            <SafeAreaView style={css.modalVerRow2}>
                                <Text style={css.modalVerLblCa}>{labels.modalVer.lblCa}</Text>
                                <TextInput style={css.modalVerTxtCa} maxLength={4} inputMode='numeric' onChangeText={this.handleModalVerDetailCaTextChange} value={this.handleModalVerDetailCaValue()}>
                                </TextInput>


                                <TextInput style={css.modalVertxtAnotacao} selectTextOnFocus maxLength={12} onChangeText={this.handleModalVerDetailNote2TextChange} value={this.handleModalVerDetailNote2Value()}>
                                </TextInput>
                            </SafeAreaView>


                            <SafeAreaView style={css.modalVerRowPericia}>
                                <Text style={css.modalVerLblPericiaTitulo}>{labels.modalVer.lblPericiaHeader}</Text>
                                <Text style={css.modalVerLblModPericiaTitulo}>{labels.modalVer.lblPericiaModHeader}</Text>

                                <TextInput style={css.modalVertxtAnotacao} selectTextOnFocus maxLength={12} onChangeText={this.handleModalVerDetailNote3TextChange} value={this.handleModalVerDetailNote3Value()}>
                                </TextInput>
                            </SafeAreaView>

                            <SafeAreaView style={css.modalVerRowPericia}>
                                <TextInput style={css.modalVerTxtPericia} selectTextOnFocus maxLength={16} onChangeText={this.handleModalVerDetailPer1NameTextChange} value={this.handleModalVerDetailPer1NameValue()} >
                                </TextInput>
                                <TextInput style={css.modalVerTxtModPericia} selectTextOnFocus inputMode='numeric' maxLength={4} onChangeText={this.handleModalVerDetailPer1ModTextChange} value={this.handleModalVerDetailPer1ModValue()}>
                                </TextInput>

                                <TextInput style={css.modalVertxtAnotacao} selectTextOnFocus maxLength={12} onChangeText={this.handleModalVerDetailNote4TextChange} value={this.handleModalVerDetailNote4Value()}>
                                </TextInput>

                            </SafeAreaView>
                            <SafeAreaView style={css.modalVerRowPericia}>
                                <TextInput style={css.modalVerTxtPericia} selectTextOnFocus maxLength={16} onChangeText={this.handleModalVerDetailPer2NameTextChange} value={this.handleModalVerDetailPer2NameValue()}>
                                </TextInput>
                                <TextInput style={css.modalVerTxtModPericia} selectTextOnFocus inputMode='numeric' maxLength={4} onChangeText={this.handleModalVerDetailPer2ModTextChange} value={this.handleModalVerDetailPer2ModValue()}>
                                </TextInput>

                                <TextInput style={css.modalVertxtAnotacao} selectTextOnFocus maxLength={12} onChangeText={this.handleModalVerDetailNote5TextChange} value={this.handleModalVerDetailNote5Value()}>
                                </TextInput>

                            </SafeAreaView>
                            <SafeAreaView style={css.modalVerRowPericia}>
                                <TextInput style={css.modalVerTxtPericia} selectTextOnFocus maxLength={16} onChangeText={this.handleModalVerDetailPer3NameTextChange} value={this.handleModalVerDetailPer3NameValue()} >
                                </TextInput>
                                <TextInput style={css.modalVerTxtModPericia} selectTextOnFocus inputMode='numeric' maxLength={4} onChangeText={this.handleModalVerDetailPer3ModTextChange} value={this.handleModalVerDetailPer3ModValue()}>
                                </TextInput>

                                <TextInput style={css.modalVertxtAnotacao} selectTextOnFocus maxLength={12} onChangeText={this.handleModalVerDetailNote6TextChange} value={this.handleModalVerDetailNote6Value()}>
                                </TextInput>

                            </SafeAreaView>

                            <SafeAreaView style={css.modalVerRowAtaque}>
                                <Text style={css.modalVerLblAtaqueTitulo}>{labels.modalVer.lblAtaqueHeader}</Text>
                                <Text style={css.modalVerLblModTitulo}>{labels.modalVer.lblAtaqueModHeader}</Text>
                                <Text style={css.modalVerLblDanoTitulo}>{labels.modalVer.lblAtaqueDanoHeader}</Text>
                            </SafeAreaView>

                            <SafeAreaView style={css.modalVerRowAtaque}>
                                <TextInput style={css.modalVerTxtAtaque} maxLength={16} selectTextOnFocus onChangeText={this.handleModalVerDetailAttack1NameTextChange} value={this.handleModalVerDetailAttack1NameValue()} >
                                </TextInput>
                                <TextInput style={css.modalVerTxtMod} maxLength={4} selectTextOnFocus inputMode='numeric' onChangeText={this.handleModalVerDetailAttack1ModTextChange} value={this.handleModalVerDetailAttack1ModValue()} >
                                </TextInput>
                                <TextInput style={css.modalVerTxtDano} maxLength={12} selectTextOnFocus onChangeText={this.handleModalVerDetailAttack1DmgTextChange} value={this.handleModalVerDetailAttack1DmgValue()}>
                                </TextInput>
                            </SafeAreaView>

                            <SafeAreaView style={css.modalVerRowAtaque}>
                                <TextInput style={css.modalVerTxtAtaque} maxLength={16} selectTextOnFocus onChangeText={this.handleModalVerDetailAttack2NameTextChange} value={this.handleModalVerDetailAttack2NameValue()}>
                                </TextInput>
                                <TextInput style={css.modalVerTxtMod} maxLength={4} selectTextOnFocus inputMode='numeric' onChangeText={this.handleModalVerDetailAttack2ModTextChange} value={this.handleModalVerDetailAttack2ModValue()}>
                                </TextInput>
                                <TextInput style={css.modalVerTxtDano} maxLength={12} selectTextOnFocus onChangeText={this.handleModalVerDetailAttack2DmgTextChange} value={this.handleModalVerDetailAttack2DmgValue()}>
                                </TextInput>
                            </SafeAreaView>

                            <SafeAreaView style={css.modalVerRowAtaque}>
                                <TextInput style={css.modalVerTxtAtaque} maxLength={16} selectTextOnFocus onChangeText={this.handleModalVerDetailAttack3NameTextChange} value={this.handleModalVerDetailAttack3NameValue()}>
                                </TextInput>
                                <TextInput style={css.modalVerTxtMod} maxLength={4} selectTextOnFocus inputMode='numeric' onChangeText={this.handleModalVerDetailAttack3ModTextChange} value={this.handleModalVerDetailAttack3ModValue()}>
                                </TextInput>
                                <TextInput style={css.modalVerTxtDano} maxLength={12} selectTextOnFocus onChangeText={this.handleModalVerDetailAttack3DmgTextChange} value={this.handleModalVerDetailAttack3DmgValue()}>
                                </TextInput>
                            </SafeAreaView>

                            <SafeAreaView style={css.modalVerRowBotoes}>

                                <Pressable style={css.modalVerBtnAtualizar} onPress={this.handleModalVerAtualizar}>
                                    <Text style={css.modalVerLblBtnAtualizar}>{labels.modalVer.Atualizar}</Text>
                                </Pressable>

                                <Pressable style={css.modalVerBtnCancelar} onPress={this.handleModalVerCancelar}>
                                    <Text style={css.modalVerLblBtnCancelar}>{labels.modalVer.Cancelar}</Text>
                                </Pressable>
                            </SafeAreaView>
                        </SafeAreaView>
                    </SafeAreaView>
                </Modal>
            </SafeAreaView>
        )
    }
}

