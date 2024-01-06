import React, { Component } from 'react';
import Npc from "../../models/npc";
import { Modal, Pressable, ScrollView, TextInput, View, Text } from "react-native";
import NpcPage from "../npc/npc-page";
import { cssNpcList as css } from "./npc-list-style";
import { labels } from "../../models/labels";


export default class NpcListPage extends Component<{ npcs: Npc[] }, { npcs: Npc[], indexModal: number }> {

    constructor(props) {
        super(props);
        this.state = {
            npcs: this.props.npcs,
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
        this.setState({ indexModal: index });
    }





    handleModalPvTextChange = (strNewValue: string) => {

        let npc: Npc = this.handlerGetNpc(this.state.indexModal);

        if (npc != null) {
            let newPv: number = parseInt(strNewValue);
            if (isNaN(newPv)) {
                newPv = 0;
            }

            npc.currentHp = newPv;
            this.handlerSetNpc(npc, this.state.indexModal);
            this.setState({ indexModal: -1 });
        }
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
            let newPv: number = npc.currentHp;
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
            let newPv: number = npc.currentHp;
            if (isNaN(newPv)) {
                newPv = 0;
            }

            if (isNaN(npc.currentHp)){
                npc.currentHp = 0;
            }

            npc.currentHp = npc.currentHp + newPv;
            this.handlerSetNpc(npc, this.state.indexModal);
            this.setState({ indexModal: -1 })
        }
    }


    handlePvSubtrair = () => {

        let npc: Npc = this.handlerGetNpc(this.state.indexModal);
        
        if (npc != null) {
            let newPv: number = npc.currentHp;
            if (isNaN(newPv)) {
                newPv = 0;
            }

            npc.currentHp = npc.currentHp - newPv;
            this.handlerSetNpc(npc, this.state.indexModal);
            this.setState({ indexModal: -1 })
        }
    }


    render() {

        return (
            <>

                <ScrollView style={css.listaNpcsView}>
                    {this.props.npcs.map((npc: Npc, index: number) => { return (<NpcPage key={index} index={index} handlerGetNpc={this.handlerGetNpc} handlerSetNpc={this.handlerSetNpc} handlerPvButtonClick={this.handlerPvButtonClick} />) })}
                </ScrollView>

                <Modal visible={this.isVisibleModalPv(this.state.indexModal)}>
                    <View>
                        <TextInput selectTextOnFocus onChangeText={this.handleModalPvTextChange} value={this.handlerGetNpc(this.state.indexModal).currentHp.toString()} keyboardType='number-pad' />
                        <Pressable
                            onPress={this.handlePvAtribuir}>
                            <Text>{labels.modalNpc.btnSet}</Text>
                        </Pressable>
                        <Pressable
                            onPress={this.handlePvSomar}>
                            <Text>{labels.modalNpc.btnSubtract}</Text>
                        </Pressable>
                        <Pressable
                            onPress={this.handlePvSubtrair}>
                            <Text>{labels.modalNpc.btnAdd}</Text>
                        </Pressable>
                    </View>
                </Modal>
            </>

        );
    }
}
