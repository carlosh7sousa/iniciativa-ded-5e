import React, { Component } from 'react';
import Npc from '../../models/npc';
import { View, TextInput, Pressable, Text } from 'react-native';
import { cssNpc as css } from "./npc-style";
import { labels } from "../../models/labels";

export default class NpcPage extends Component<{ npc: Npc }, { ini, pv, npc }> {

    constructor(props) {
        super(props);
        this.state = {
            ini: this.props.npc.initiativeModifier.toString(),
            pv: this.props.npc.currentHp.toString(),
            npc: this.props.npc.name
        };

    }

    getNpcView() {
        let npcView = css.npcViewCtrl;
        if (this.props.npc.isPlayer) {
            return css.playerViewCtrl;
        }

        return npcView;
    }

    getNpcViewLabel() {
        let npcViewLabel = css.npcViewLabelCtrl;
        if (this.props.npc.isPlayer) {
            return css.playerViewLabelCtrl;
        }

        return npcViewLabel;
    }

    getNpcCtrlViewLabel() {
        let npcControlViewLabel = css.npcControlViewLabelCtrl;
        if (this.props.npc.isPlayer) {
            return css.playerControlViewLabelCtrl;
        }

        return npcControlViewLabel;
    }


    handlePvTextChange = (pv) => {
        this.setState({ pv });
    };

    handleIniTextChange = (ini) => {
        this.setState({ ini });
    };

    handleNpcTextChange = (npc) => {
        this.setState({ npc });
    };



    handleNpcDetailsButtonClick = () => {

    };


    render() {

        return (
            <>
                <View style={this.getNpcView()}>
                    <TextInput style={css.initTxtCtrl} onChangeText={this.handleIniTextChange} value={this.state.ini} keyboardType='number-pad' />
                    <TextInput style={css.nameTxtCtrl} onChangeText={this.handleNpcTextChange} value={this.state.npc} />
                    <TextInput style={css.hpTxtCtrl} onChangeText={this.handlePvTextChange} value={this.state.pv} keyboardType='number-pad' />

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


