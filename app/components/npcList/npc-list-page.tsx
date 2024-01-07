import React, { Component } from 'react';
import Npc from "../../models/npc";
import { Modal, Pressable, ScrollView, TextInput, View, Text, SafeAreaView } from "react-native";
import NpcPage from "../npc/npc-page";
import { cssNpcList as css } from "./npc-list-style";
import { labels } from "../../models/labels";


export default class NpcListPage extends Component<{ npcs: Npc[], idSelected: number }, { npcs: Npc[], indexModal: number, oldModalPv: number, newModalPv: number }> {

    constructor(props) {
        super(props);
        this.state = {
            npcs: this.props.npcs,
            oldModalPv: 0,
            newModalPv: 0,
            indexModal: -1
        };

        this.handlerSetNpc = this.handlerSetNpc.bind(this);
        this.handlerGetNpc = this.handlerGetNpc.bind(this);
        this.handlerPvButtonClick = this.handlerPvButtonClick.bind(this);
    }

    handlerSetNpc(npc: Npc, index: number): void {
        if (npc && index > 0) {
            this.props.npcs[index] = npc;
            this.setState({ npcs: this.props.npcs });
        }
    }

    handlerGetNpc(index: number): Npc {
        return this.props.npcs[index];
    }

    handlerPvButtonClick(index: number): void {

        let npc: Npc = this.handlerGetNpc(index);
        let oldPv: number = 0;
        if (npc != null) {
            oldPv = npc.currentHp;
        }

        this.setState({ indexModal: index, oldModalPv: oldPv });
    }





    handleModalPvTextChange = (strNewValue: string) => {
        let npc: Npc = this.handlerGetNpc(this.state.indexModal);
        let newPv: number = parseInt(strNewValue);
        if (isNaN(newPv)) {
            newPv = 0;
        }

        this.setState({ newModalPv: newPv });
        this.handlerSetNpc(npc, this.state.indexModal);
    }

    isVisibleModalPv = (index: number): boolean => {

        if (index < 0) {
            return false;
        }

        return true;
    }



    resetModalState = () => {
        this.setState({ indexModal: -1 });
        this.setState({ newModalPv: 0 });
        this.setState({ oldModalPv: 0 });
    }


    handlePvAtribuir = () => {

        let npc: Npc = this.handlerGetNpc(this.state.indexModal);
        if (npc != null) {
            let newPv: number = this.state.newModalPv;
            if (isNaN(newPv)) {
                newPv = 0;
            }

            npc.currentHp = newPv;
            this.handlerSetNpc(npc, this.state.indexModal);
            this.resetModalState();
        }
    }


    handlePvSomar = () => {

        let npc: Npc = this.handlerGetNpc(this.state.indexModal);
        if (npc != null) {
            let newPv: number = this.state.newModalPv;
            if (isNaN(newPv)) {
                newPv = 0;
            }

            if (isNaN(npc.currentHp)) {
                npc.currentHp = 0;
            }

            npc.currentHp = this.state.oldModalPv + this.state.newModalPv;
            this.handlerSetNpc(npc, this.state.indexModal);
            this.resetModalState();
        }
    }


    handlePvSubtrair = () => {

        let npc: Npc = this.handlerGetNpc(this.state.indexModal);

        if (npc != null) {
            let newPv: number = this.state.newModalPv;
            if (isNaN(newPv)) {
                newPv = 0;
            }

            npc.currentHp = this.state.oldModalPv - this.state.newModalPv;
            this.handlerSetNpc(npc, this.state.indexModal);
            this.resetModalState();
        }
    }


    handleCloseModal = () => {
        this.resetModalState();
    }


    handleModalNpcNameValue = (): string => {
        let npc: Npc = this.handlerGetNpc(this.state.indexModal);
        if (npc != null) {
            return npc.name + ": - ";
        }

        return "";
    }

    handleModalNpcPvValue = (): string => {
        return this.state.oldModalPv.toString();
    }

    render() {

        return (
            <SafeAreaView>
                <SafeAreaView style={css.vwNpcListComponent}>

                    <View style={css.headerView3}>
                        <Text style={css.lblListaLabel}>{labels.npc.lblListTitle}</Text>
                    </View>

                    <ScrollView style={css.listaNpcsView}>
                        {this.props.npcs.map((npc: Npc, index: number) => { return (<NpcPage key={index} index={index} handlerGetNpc={this.handlerGetNpc} handlerSetNpc={this.handlerSetNpc} handlerPvButtonClick={this.handlerPvButtonClick} npcsReadonly={this.props.npcs} />) })}
                    </ScrollView>

                </SafeAreaView>


                <Modal visible={this.isVisibleModalPv(this.state.indexModal)} transparent={true}>

                    <View style={css.modalView}>
                        <View style={css.modalArea}>

                            <View style={css.modalRow1}>
                                <Text style={css.modalLblTitulo}>{labels.modalNpc.titulo}</Text>
                                <Pressable style={css.modalBtnClose}
                                    onPress={this.handleCloseModal}>
                                    <Text style={css.modalLblBtnClose}>{labels.modalNpc.btnClose}</Text>
                                </Pressable>
                            </View>
                            <View style={css.modalRow2}>
                                <Text style={css.modalLblName}>{this.handleModalNpcNameValue()} {labels.modalNpc.labelPv}: {this.handleModalNpcPvValue()}</Text>

                            </View>
                            <View style={css.modalRow3}>
                                <TextInput style={css.modalTxtPv} selectTextOnFocus onChangeText={this.handleModalPvTextChange} keyboardType='number-pad' maxLength={4} />
                            </View>
                            <View style={css.modalRow4}>

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
                            </View>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>

        );
    }
}
