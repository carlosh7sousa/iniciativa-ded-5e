import React, { Component } from 'react';
import Npc from "../../models/npc";
import { Modal, Pressable, ScrollView, TextInput, View, Text, SafeAreaView, Switch } from "react-native";
import NpcPage from "../npc/npc-page";
import { cssNpcList as css } from "./npc-list-style";
import { labels } from "../../models/labels";


export default class NpcListPage extends Component<{ npcs: Npc[], idSelected: number }, { npcs: Npc[], indexModalPv: number, oldModalPv: number, newModalPv: number, indexModalVer: number, modalVerDetailNpcNew: Npc, modalVerDetailNpcOld: Npc }> {

    constructor(props) {
        super(props);
        this.state = {
            npcs: this.props.npcs,

            oldModalPv: 0,
            newModalPv: 0,
            indexModalPv: -1,

            modalVerDetailNpcOld: null,
            modalVerDetailNpcNew: null,
            indexModalVer: -1
        };

        this.handlerSetNpc = this.handlerSetNpc.bind(this);
        this.handlerGetNpc = this.handlerGetNpc.bind(this);
        this.handlerPvButtonClick = this.handlerPvButtonClick.bind(this);
        this.handlerNpcDetailsButtonClick = this.handlerNpcDetailsButtonClick.bind(this);
        this.handleModalVerDetailPer1NameTextChange = this.handleModalVerDetailPer1NameTextChange.bind(this);
    }

    handlerSetNpc = (npc: Npc, index: number): void => {
        if (npc && index >= 0) {
            this.props.npcs[index] = npc;
            this.setState({ npcs: this.props.npcs });
        }
    }

    handlerGetNpc = (index: number): Npc => {
        return this.props.npcs[index];
    }

    handlerPvButtonClick = (index: number): void => {

        let npc: Npc = this.handlerGetNpc(index);
        let oldPv: number = 0;
        if (npc != null) {
            oldPv = npc.currentHp;
        }

        this.setState({ indexModalPv: index, oldModalPv: oldPv });
    }


    handlerNpcDetailsButtonClick = (index: number): void => {

        this.setState({ indexModalVer: index });
        let npcVer: Npc = this.handlerGetNpc(index);

        this.setState({ modalVerDetailNpcNew: this.createClone(npcVer) });
        this.setState({ modalVerDetailNpcOld: this.createClone(npcVer) });
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
        let npc: Npc = this.handlerGetNpc(this.state.indexModalPv);
        let newPv: number = parseInt(strNewValue);
        if (isNaN(newPv)) {
            newPv = 0;
        }

        this.setState({ newModalPv: newPv });
        this.handlerSetNpc(npc, this.state.indexModalPv);
    }

    isVisibleModalPv = (index: number): boolean => {

        if (index < 0) {
            return false;
        }

        return true;
    }

    isVisibleModalVer = (index: number): boolean => {

        if (index < 0) {
            return false;
        }

        return true;
    }



    resetModalState = () => {
        this.setState({ indexModalPv: -1 });
        this.setState({ newModalPv: 0 });
        this.setState({ oldModalPv: 0 });
    }

    resetModalVerState = () => {
        this.setState({ indexModalVer: -1 });
        this.setState({ modalVerDetailNpcOld: null });
        this.setState({ modalVerDetailNpcNew: null });
    }


    handlePvAtribuir = () => {

        let npc: Npc = this.handlerGetNpc(this.state.indexModalPv);
        if (npc != null) {
            let newPv: number = this.state.newModalPv;
            if (isNaN(newPv)) {
                newPv = 0;
            }

            npc.currentHp = newPv;
            this.handlerSetNpc(npc, this.state.indexModalPv);
            this.resetModalState();
        }
    }

    handleDetailsAtribuir = () => {

        let npc: Npc = this.handlerGetNpc(this.state.indexModalPv);
        if (npc != null) {
            let newPv: number = this.state.newModalPv;
            if (isNaN(newPv)) {
                newPv = 0;
            }

            npc.currentHp = newPv;
            this.handlerSetNpc(npc, this.state.indexModalPv);
            this.resetModalState();
        }
    }


    handlePvSomar = () => {

        let npc: Npc = this.handlerGetNpc(this.state.indexModalPv);
        if (npc != null) {
            let newPv: number = this.state.newModalPv;
            if (isNaN(newPv)) {
                newPv = 0;
            }

            if (isNaN(npc.currentHp)) {
                npc.currentHp = 0;
            }

            npc.currentHp = this.state.oldModalPv + this.state.newModalPv;
            this.handlerSetNpc(npc, this.state.indexModalPv);
            this.resetModalState();
        }
    }


    handlePvSubtrair = () => {

        let npc: Npc = this.handlerGetNpc(this.state.indexModalPv);

        if (npc != null) {
            let newPv: number = this.state.newModalPv;
            if (isNaN(newPv)) {
                newPv = 0;
            }

            npc.currentHp = this.state.oldModalPv - this.state.newModalPv;
            this.handlerSetNpc(npc, this.state.indexModalPv);
            this.resetModalState();
        }
    }


    handleCloseModal = () => {
        this.resetModalState();
    }



    handleModalNpcNameValue = (): string => {
        let npc: Npc = this.handlerGetNpc(this.state.indexModalPv);
        if (npc != null) {
            return npc.name + labels.modalNpc.separador1;
        }

        return "";
    }

    handleModalNpcPvValue = (): string => {
        return this.state.oldModalPv.toString();
    }



    handleModalVerNameValue = (): string => {
        let npc: Npc = this.handlerGetNpc(this.state.indexModalVer);
        if (npc != null) {
            return npc.name;
        }

        return "";
    }


    handleModalVerAtualizar = () => {
        let updatedNpc: Npc = this.state.modalVerDetailNpcNew;
        this.handlerSetNpc(updatedNpc, this.state.indexModalVer);
        this.resetModalVerState();
    }

    handleModalVerCancelar = () => {
        let updatedNpc: Npc = this.state.modalVerDetailNpcOld;

        this.handlerSetNpc(updatedNpc, this.state.indexModalVer);
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

    handleModalVerDetailNoteTextChange = (newText: string) => {
        let mNpc: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(mNpc)) {
            mNpc.details.notes = newText;
            this.setState({ modalVerDetailNpcNew: mNpc });
        }
    }

    handleModalVerDetailNoteValue = (): string => {
        let npcTemp: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(npcTemp)) {
            return this.state.modalVerDetailNpcNew.details.notes;
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

            let mod: number = parseInt(newText);
            if (isNaN(mod)) {
                mod = 0;
            }

            mNpc.details.skill1.modifier = mod;
            this.setState({ modalVerDetailNpcNew: mNpc });
        }
    }

    handleModalVerDetailPer1ModValue = (): string => {
        let npcTemp: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(npcTemp)) {
            return this.state.modalVerDetailNpcNew.details.skill1.modifier.toString();
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

            let mod: number = parseInt(newText);
            if (isNaN(mod)) {
                mod = 0;
            }

            mNpc.details.skill2.modifier = mod;
            this.setState({ modalVerDetailNpcNew: mNpc });
        }
    }

    handleModalVerDetailPer2ModValue = (): string => {
        let npcTemp: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(npcTemp)) {
            return this.state.modalVerDetailNpcNew.details.skill2.modifier.toString();
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

            let mod: number = parseInt(newText);
            if (isNaN(mod)) {
                mod = 0;
            }

            mNpc.details.skill3.modifier = mod;
            this.setState({ modalVerDetailNpcNew: mNpc });
        }
    }

    handleModalVerDetailPer3ModValue = (): string => {
        let npcTemp: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(npcTemp)) {
            return this.state.modalVerDetailNpcNew.details.skill3.modifier.toString();
        }

        return "";
    }

    handleModalVerDetailAttack1ModTextChange = (newText: string) => {
        let mNpc: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(mNpc)) {

            let mod: number = parseInt(newText);
            if (isNaN(mod)) {
                mod = 0;
            }

            mNpc.details.attack1.modifier = mod;
            this.setState({ modalVerDetailNpcNew: mNpc });
        }
    }

    handleModalVerDetailAttack1ModValue = (): string => {
        let npcTemp: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(npcTemp)) {
            return this.state.modalVerDetailNpcNew.details.attack1.modifier.toString();
        }

        return "";
    }

    handleModalVerDetailAttack2ModTextChange = (newText: string) => {
        let mNpc: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(mNpc)) {

            let mod: number = parseInt(newText);
            if (isNaN(mod)) {
                mod = 0;
            }

            mNpc.details.attack2.modifier = mod;
            this.setState({ modalVerDetailNpcNew: mNpc });
        }
    }

    handleModalVerDetailAttack2ModValue = (): string => {
        let npcTemp: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(npcTemp)) {
            return this.state.modalVerDetailNpcNew.details.attack2.modifier.toString();
        }

        return "";
    }

    handleModalVerDetailAttack3ModTextChange = (newText: string) => {
        let mNpc: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(mNpc)) {

            let mod: number = parseInt(newText);
            if (isNaN(mod)) {
                mod = 0;
            }

            mNpc.details.attack3.modifier = mod;
            this.setState({ modalVerDetailNpcNew: mNpc });
        }
    }

    handleModalVerDetailAttack3ModValue = (): string => {
        let npcTemp: Npc = this.state.modalVerDetailNpcNew;

        if (this.existeNpcDetails(npcTemp)) {
            return this.state.modalVerDetailNpcNew.details.attack3.modifier.toString();
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
                                return (<NpcPage key={index} index={index} handlerGetNpc={this.handlerGetNpc} handlerSetNpc={this.handlerSetNpc} handlerPvButtonClick={this.handlerPvButtonClick} npcsReadonly={this.props.npcs} handlerNpcDetailsButtonClick={this.handlerNpcDetailsButtonClick} />)
                            }

                            return ("");
                        })}
                    </ScrollView>

                </SafeAreaView>


                <Modal visible={this.isVisibleModalPv(this.state.indexModalPv)} transparent={true}>
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
                                <TextInput style={css.modalTxtPv} selectTextOnFocus onChangeText={this.handleModalPvTextChange} inputMode='numeric' maxLength={4} />
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


                <Modal visible={this.isVisibleModalVer(this.state.indexModalVer)} transparent={true}>
                    <View style={css.modalVerView}>
                        <View style={css.modalVerArea}>

                            <View style={css.modalVerRowTitulo}>
                                <Text style={css.modalVerLblTitulo}>{labels.modalVer.titulo}</Text>
                            </View>

                            <View style={css.modalVerRowTitulo}>
                                <Text style={css.modalVerLblNpcNome}>{this.handleModalVerNameValue()} </Text>
                            </View>

                            <View style={css.modalVerRow2}>
                                <Text style={css.modalVerLblDeslocamento} >{labels.modalVer.lblDeslocamento}</Text>
                                <TextInput style={css.modalVerTxtDeslocamento} selectTextOnFocus maxLength={4} inputMode='numeric' onChangeText={this.handleModalVerDetailDeslocTextChange} value={this.handleModalVerDetailDeslocValue()}>
                                </TextInput>
                                <Text style={css.modalVerLblAnotacoes}>{labels.modalVer.lblAnotacoes}</Text>
                            </View>

                            <View style={css.modalVerRow2}>

                                <Text style={css.modalVerLblEJogador}>{labels.modalVer.lblEJogador}</Text>
                                <Switch style={css.modalVerOptEJogador} onValueChange={this.handleModalVerDetailEJogadorValueChange} value={this.handleModalVerDetailEJogadorValue()}>
                                </Switch>
                                <TextInput style={css.modalVertxtAnotacoes} multiline={true} onChangeText={this.handleModalVerDetailNoteTextChange} value={this.handleModalVerDetailNoteValue()}> 
                                </TextInput>
                            </View>

                            <View style={css.modalVerRow2}>
                                <Text style={css.modalVerLblPVs}>{labels.modalVer.labelPv}{labels.modalVer.separador2} </Text>
                                <TextInput style={css.modalVertxtPvs} selectTextOnFocus inputMode='numeric' maxLength={4} onChangeText={this.handleModalVerDetailPvsTextChange} value={this.handleModalVerDetailPvsValue()}>
                                </TextInput>
                            </View>

                            <View style={css.modalVerRow2}>
                                <Text style={css.modalVerLblCa}>{labels.modalVer.lblCa}</Text>
                                <TextInput style={css.modalVerTxtCa} maxLength={4} inputMode='numeric' onChangeText={this.handleModalVerDetailCaTextChange} value={this.handleModalVerDetailCaValue()}>  
                                </TextInput>
                            </View>

                            <View style={css.modalVerRowEmpty}>

                            </View>

                            <View style={css.modalVerRowPericia}>
                                <Text style={css.modalVerLblPericiaTitulo}>{labels.modalVer.lblPericiaHeader}</Text>
                                <Text style={css.modalVerLblModPericiaTitulo}>{labels.modalVer.lblPericiaModHeader}</Text>
                            </View>

                            <View style={css.modalVerRowPericia}>
                                <TextInput style={css.modalVerTxtPericia} selectTextOnFocus maxLength={18} onChangeText={this.handleModalVerDetailPer1NameTextChange} value={this.handleModalVerDetailPer1NameValue()} ></TextInput>
                                <TextInput style={css.modalVerTxtModPericia} selectTextOnFocus inputMode='numeric' maxLength={4} onChangeText={this.handleModalVerDetailPer1ModTextChange} value={this.handleModalVerDetailPer1ModValue()}></TextInput>
                            </View>
                            <View style={css.modalVerRowPericia}>
                                <TextInput style={css.modalVerTxtPericia} selectTextOnFocus maxLength={18} onChangeText={this.handleModalVerDetailPer2NameTextChange} value={this.handleModalVerDetailPer2NameValue()}> </TextInput>
                                <TextInput style={css.modalVerTxtModPericia} selectTextOnFocus inputMode='numeric' maxLength={4} onChangeText={this.handleModalVerDetailPer2ModTextChange} value={this.handleModalVerDetailPer2ModValue()}></TextInput>
                            </View>
                            <View style={css.modalVerRowPericia}>
                                <TextInput style={css.modalVerTxtPericia} selectTextOnFocus maxLength={18} onChangeText={this.handleModalVerDetailPer3NameTextChange} value={this.handleModalVerDetailPer3NameValue()} ></TextInput>
                                <TextInput style={css.modalVerTxtModPericia} selectTextOnFocus inputMode='numeric' maxLength={4} onChangeText={this.handleModalVerDetailPer3ModTextChange} value={this.handleModalVerDetailPer3ModValue()}></TextInput>
                            </View>

                            <View style={css.modalVerRowAtaque}>
                                <Text style={css.modalVerLblAtaqueTitulo}>{labels.modalVer.lblAtaqueHeader}</Text>
                                <Text style={css.modalVerLblModTitulo}>{labels.modalVer.lblAtaqueModHeader}</Text>
                                <Text style={css.modalVerLblDanoTitulo}>{labels.modalVer.lblAtaqueDanoHeader}</Text>
                            </View>

                            <View style={css.modalVerRowAtaque}>
                                <TextInput style={css.modalVerTxtAtaque} maxLength={18} selectTextOnFocus onChangeText={this.handleModalVerDetailAttack1NameTextChange} value={this.handleModalVerDetailAttack1NameValue()} > </TextInput>
                                <TextInput style={css.modalVerTxtMod} maxLength={3} selectTextOnFocus inputMode='numeric' onChangeText={this.handleModalVerDetailAttack1ModTextChange} value={this.handleModalVerDetailAttack1ModValue()} ></TextInput>
                                <TextInput style={css.modalVerTxtDano} maxLength={18} selectTextOnFocus onChangeText={this.handleModalVerDetailAttack1DmgTextChange} value={this.handleModalVerDetailAttack1DmgValue()}> </TextInput>
                            </View>

                            <View style={css.modalVerRowAtaque}>
                                <TextInput style={css.modalVerTxtAtaque} maxLength={18} selectTextOnFocus onChangeText={this.handleModalVerDetailAttack2NameTextChange} value={this.handleModalVerDetailAttack2NameValue()}> </TextInput>
                                <TextInput style={css.modalVerTxtMod} maxLength={3} selectTextOnFocus inputMode='numeric' onChangeText={this.handleModalVerDetailAttack2ModTextChange} value={this.handleModalVerDetailAttack2ModValue()}> 
                                </TextInput>
                                <TextInput style={css.modalVerTxtDano} maxLength={18} selectTextOnFocus onChangeText={this.handleModalVerDetailAttack2DmgTextChange} value={this.handleModalVerDetailAttack2DmgValue()}>
                                </TextInput>
                            </View>

                            <View style={css.modalVerRowAtaque}>
                                <TextInput style={css.modalVerTxtAtaque} maxLength={18} selectTextOnFocus onChangeText={this.handleModalVerDetailAttack3NameTextChange} value={this.handleModalVerDetailAttack3NameValue()}> 
                                </TextInput>
                                <TextInput style={css.modalVerTxtMod} maxLength={3} selectTextOnFocus inputMode='numeric' onChangeText={this.handleModalVerDetailAttack3ModTextChange} value={this.handleModalVerDetailAttack3ModValue()}>
                                </TextInput>
                                <TextInput style={css.modalVerTxtDano} maxLength={18} selectTextOnFocus onChangeText={this.handleModalVerDetailAttack3DmgTextChange} value={this.handleModalVerDetailAttack3DmgValue()}>
                                </TextInput>
                            </View>

                            <SafeAreaView style={css.modalVerRowBotoes}>

                                <Pressable style={css.modalVerBtnAtualizar} onPress={this.handleModalVerAtualizar}>
                                    <Text style={css.modalVerLblBtnAtualizar}>{labels.modalVer.Atualizar}</Text>
                                </Pressable>

                                <Pressable style={css.modalVerBtnCancelar} onPress={this.handleModalVerCancelar}>
                                    <Text style={css.modalVerLblBtnCancelar}>{labels.modalVer.Cancelar}</Text>
                                </Pressable>
                            </SafeAreaView>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        )
    }
}

