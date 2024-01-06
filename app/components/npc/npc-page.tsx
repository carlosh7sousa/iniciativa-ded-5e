import React, { Component } from 'react';
import Npc from '../../models/npc';
import { View, TextInput, Pressable, Text } from 'react-native';
import { cssNpc as css } from "./npc-style";
import { labels } from "../../models/labels";

export default class NpcPage extends Component<{ index: number, handlerSetNpc(npc: Npc, index: number): void, handlerGetNpc(index: number): Npc, handlerPvButtonClick(index: number): void }, { visible: boolean }> {


    constructor(props) {
        super(props);
        this.handlerSetNpc = this.handlerSetNpc.bind(this);
        this.handlerGetNpc = this.handlerGetNpc.bind(this);
        this.handlerHpClick = this.handlerHpClick.bind(this);
        this.state = {
            visible: false
        }
    }

    handlerSetNpc(npc: Npc, index: number): void {
        this.handlerSetNpc(npc, index);
    }

    handlerGetNpc(index: number): Npc {
        return this.props.handlerGetNpc(index);
    }



    getNpcView() {

        let npc: Npc = this.props.handlerGetNpc(this.props.index);
        let npcView = css.npcViewCtrl;
        if (npc != null) {
            if (npc.isPlayer) {
                return css.playerViewCtrl;
            }
        }

        return npcView;
    }

    getNpcViewLabel() {
        let npc: Npc = this.props.handlerGetNpc(this.props.index);
        let npcViewLabel = css.npcViewLabelCtrl;

        if (npc != null) {
            if (npc.isPlayer) {
                return css.playerViewLabelCtrl;
            }
        }

        return npcViewLabel;
    }

    getNpcCtrlViewLabel() {
        let npc: Npc = this.props.handlerGetNpc(this.props.index);
        if (npc != null) {
            let npcControlViewLabel = css.npcControlViewLabelCtrl;
            if (npc.isPlayer) {
                return css.playerControlViewLabelCtrl;
            }

            return npcControlViewLabel;
        }
    }


    handlePvTextChange = (strNewValue: string) => {
        let npc: Npc = this.props.handlerGetNpc(this.props.index);

        if (npc != null) {
            let cur: number = npc.currentHp;
            let newValue: number = parseInt(strNewValue);

            if (isNaN(newValue)) {
                newValue = 0;
            }

            if (isNaN(cur)){
                cur = 0;
            }

            cur = newValue;
            npc.currentHp = cur;

            this.props.handlerSetNpc(npc, this.props.index);
        }
    };

    handleIniTextChange = (strNewValue: string) => {

        let npc: Npc = this.props.handlerGetNpc(this.props.index);
        if (npc != null) {
            let initiativeModifier: number = npc.initiativeModifier;

            let newValue: number = parseInt(strNewValue);

            if (isNaN(newValue)) {
                newValue = 0;
            }

            initiativeModifier = newValue;
            npc.initiativeModifier = initiativeModifier;

            this.props.handlerSetNpc(npc, this.props.index);
        }
    };

    handleNpcTextChange = (strNewValue: string) => {

        let npc: Npc = this.props.handlerGetNpc(this.props.index);
        if (npc != null) {
            npc.name = strNewValue;

            this.props.handlerSetNpc(npc, this.props.index);
        }
    };



    handleNpcDetailsButtonClick = () => {

    };

    handlerHpClick = (): void => {
        this.props.handlerPvButtonClick(this.props.index);
    };







    render() {

        return (
            <>
                <View style={this.getNpcView()}>
                    <TextInput selectTextOnFocus style={css.initTxtCtrl} onChangeText={this.handleIniTextChange} keyboardType='number-pad' value={this.props.handlerGetNpc(this.props.index).initiativeModifier.toString()} />
                    <TextInput selectTextOnFocus style={css.nameTxtCtrl} onChangeText={this.handleNpcTextChange} value={this.props.handlerGetNpc(this.props.index).name} />

                    <Pressable style={css.hpTxtCtrl} onPress={this.handlerHpClick} >
                        <Text style={css.hpTxtCtrl} >{this.props.handlerGetNpc(this.props.index).currentHp.toString()}</Text>
                    </Pressable>

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


