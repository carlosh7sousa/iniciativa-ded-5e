import React, { Component } from 'react';
import Npc from '../../models/npc';
import { View, TextInput, Pressable, Text, Button } from 'react-native';
import { cssNpc as css } from "./npc-style";
import { labels } from "../../models/labels";
import HpModalPage from '../hp/hp-modal-page';

export default class NpcPage extends Component<{ index: number, handlerSetNpc(npc: Npc, index: number): void, handlerGetNpc(index: number): Npc }, {visible: boolean}> {


    constructor(props) {
        super(props);
        this.handlerSetNpc = this.handlerSetNpc.bind(this);
        this.handlerGetNpc = this.handlerGetNpc.bind(this);
        this.state = {
            visible: false
        }
    }



    getNpcView() {

        let npc: Npc = this.props.handlerGetNpc(this.props.index);
        let npcView = css.npcViewCtrl;
        if (npc.isPlayer) {
            return css.playerViewCtrl;
        }

        return npcView;
    }

    getNpcViewLabel() {
        let npc: Npc = this.props.handlerGetNpc(this.props.index);
        let npcViewLabel = css.npcViewLabelCtrl;
        if (npc.isPlayer) {
            return css.playerViewLabelCtrl;
        }

        return npcViewLabel;
    }

    getNpcCtrlViewLabel() {
        let npc: Npc = this.props.handlerGetNpc(this.props.index);
        let npcControlViewLabel = css.npcControlViewLabelCtrl;
        if (npc.isPlayer) {
            return css.playerControlViewLabelCtrl;
        }

        return npcControlViewLabel;
    }


    handlePvTextChange = (strNewValue: string) => {
        let npc: Npc = this.props.handlerGetNpc(this.props.index);
        let currentHp: number = npc.currentHp;

        let newValue: number = parseInt(strNewValue);

        if (isNaN(newValue)) {
            newValue = 0;
        }


        currentHp = newValue;
        npc.currentHp = currentHp;

        this.props.handlerSetNpc(npc, this.props.index);
    };

    handleIniTextChange = (strNewValue: string) => {

        let npc: Npc = this.props.handlerGetNpc(this.props.index);
        let initiativeModifier: number = npc.initiativeModifier;

        let newValue: number = parseInt(strNewValue);

        if (isNaN(newValue)) {
            newValue = 0;
        }

        initiativeModifier = newValue;
        npc.initiativeModifier = initiativeModifier;

        this.props.handlerSetNpc(npc, this.props.index);
    };

    handleNpcTextChange = (strNewValue: string) => {

        let npc: Npc = this.props.handlerGetNpc(this.props.index);
        npc.name = strNewValue;

        this.props.handlerSetNpc(npc, this.props.index);

    };



    handleNpcDetailsButtonClick = () => {

    };

    handlePvButtonClick = () => {
        let npc: Npc = this.props.handlerGetNpc(this.props.index);
        npc.showModal = this.state.visible;
        this.props.handlerSetNpc(npc, this.props.index);
        
    };



    handlerSetNpc(npc: Npc, index: number): void {
        this.props.handlerSetNpc(npc, this.props.index);
    }

    handlerGetNpc(index: number): Npc {
        return this.props.handlerGetNpc(index);
    }



    render() {

        return (
            <>
                <View style={this.getNpcView()}>
                    <TextInput selectTextOnFocus style={css.initTxtCtrl} onChangeText={this.handleIniTextChange} keyboardType='number-pad' value={this.props.handlerGetNpc(this.props.index).initiativeModifier.toString()} />
                    <TextInput selectTextOnFocus style={css.nameTxtCtrl} onChangeText={this.handleNpcTextChange} value={this.props.handlerGetNpc(this.props.index).name} />

                    <Pressable style={css.hpTxtCtrl} onPress={this.handlePvButtonClick} >
                        <Text style={css.hpTxtCtrl} >{this.props.handlerGetNpc(this.props.index).currentHp.toString()}</Text>
                    </Pressable>
                    <HpModalPage handlerSetNpc={this.handlerSetNpc} handlerGetNpc={this.handlerGetNpc} index={this.props.index} />


                    <View style={this.getNpcCtrlViewLabel()}>
                        <Pressable style={css.btnCtrl} onPress={this.handleNpcDetailsButtonClick}  >
                            <Text style={css.btnLabelCtrl}>{labels.npc.buttonLabel}</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={this.getNpcViewLabel()}>
                    <Text style={css.iniLblCtrl}>INI</Text>
                    <Text style={css.nameLblCtrl}></Text>
                    <Text style={css.hpLblCtrl}>PV</Text>
                </View>
            </>
        )
    }




}


