import React, { Component } from 'react';
import Npc from "../../models/npc";
import { Modal, Pressable, ScrollView, TextInput, View, Text } from "react-native";
import NpcPage from "../npc/npc-page";
import { cssNpcList as css } from "./npc-list-style";
import { labels } from "../../models/labels";


export default class NpcListPage extends Component<{ npcs: Npc[] }, { npcs: Npc[], indexModal: number, oldModalPv: number, newModalPv: number }> {

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
        if (npc) {
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






    handlePvAtribuir = () => {

        let npc: Npc = this.handlerGetNpc(this.state.indexModal);
        if (npc != null) {
            let newPv: number = this.state.newModalPv;
            if (isNaN(newPv)) {
                newPv = 0;
            }

            npc.currentHp = newPv;
            this.handlerSetNpc(npc, this.state.indexModal);
            this.setState({ indexModal: -1 });
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
            this.setState({ indexModal: -1 })
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
            this.setState({ indexModal: -1 })
        }
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
            <>

                <ScrollView style={css.listaNpcsView}>
                    {this.props.npcs.map((npc: Npc, index: number) => { return (<NpcPage key={index} index={index} handlerGetNpc={this.handlerGetNpc} handlerSetNpc={this.handlerSetNpc} handlerPvButtonClick={this.handlerPvButtonClick} npcsReadonly={this.props.npcs}/>) })}
                </ScrollView>

                <Modal visible={this.isVisibleModalPv(this.state.indexModal)}>
                    <View style={css.modalView}>
                        <Text style={css.modalPvLblCtrl}>{this.handleModalNpcNameValue()} {labels.modalNpc.labelPv}: {this.handleModalNpcPvValue()}</Text>
                        <TextInput style={css.modalPvTxtCtrl} selectTextOnFocus onChangeText={this.handleModalPvTextChange} keyboardType='number-pad' />
                        <View style={css.modalViewControls}>
                            <Pressable style={css.modalSetBtnCtrl}
                                onPress={this.handlePvAtribuir}>
                                <Text style={css.modalLblSetBtnCtrl}>{labels.modalNpc.btnSet}</Text>
                            </Pressable>
                            <Pressable style={css.modalSubtractBtnCtrl}
                                onPress={this.handlePvSubtrair}>
                                <Text style={css.modalLblSubtractBtnCtrl}>{labels.modalNpc.btnSubtract}</Text>
                            </Pressable>
                            <Pressable style={css.modalAddBtnCtrl}
                                onPress={this.handlePvSomar}>
                                <Text style={css.modalLblAddBtnCtrl}>{labels.modalNpc.btnAdd}</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </>

        );
    }
}
