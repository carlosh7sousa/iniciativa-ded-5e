import React, { Component } from 'react';
import Npc from '../../models/npc';
import { View, TextInput, Pressable, Text, SafeAreaView } from 'react-native';
import { cssNpc as css } from "./npc-style";
import { labels } from "../../models/labels";

export default class NpcPage extends Component<{ index: number, handlerSetNpc(npc: Npc, index: number): void, handlerGetNpc(index: number): Npc, handlerPvButtonClick(index: number): void, npcsReadonly: Npc[] }, { visible: boolean }> {


    constructor(props) {
        super(props);
        this.handlerSetNpc = this.handlerSetNpc.bind(this);
        this.handlerGetNpc = this.handlerGetNpc.bind(this);
        this.handlerHpClick = this.handlerHpClick.bind(this);
        this.handleIniTextChange = this.handleIniTextChange.bind(this);

        this.state = {
            visible: false
        }
    }

    handlerSetNpc = (npc: Npc, index: number): void => {
        this.props.handlerSetNpc(npc, index);

    }

    handlerGetNpc = (index: number): Npc => {
        return this.props.handlerGetNpc(index);
    }



    // getNpcView() {

    //     let npc: Npc = this.props.handlerGetNpc(this.props.index);
    //     let npcView = css.npcViewCtrl;

    // }

    // getNpcViewLabel() {
    //     let npc: Npc = this.props.handlerGetNpc(this.props.index);
    //     let npcViewLabel = css.npcViewLabelCtrl;

    //     if (npc != null) {

    //         if (!npc.isPlayer && npc.seuTurno) {
    //             return css.npcViewLabelCtrlSelected;
    //         }

    //         if (npc.isPlayer && npc.seuTurno) {
    //             return css.playerViewLabelCtrlSelected;
    //         }

    //         if (npc.isPlayer && !npc.seuTurno) {
    //             return css.playerViewLabelCtrl;
    //         }
    //     }

    //     return npcViewLabel;
    // }

    // getNpcCtrlViewLabel() {
    //     let npc: Npc = this.props.handlerGetNpc(this.props.index);
    //     let npcControlViewLabel = css.npcControlViewLabelCtrl;

    //     if (npc != null) {
    //         if (!npc.isPlayer && npc.seuTurno) {
    //             return css.npcControlViewLabelCtrlSelected;
    //         }

    //         if (npc.isPlayer && npc.seuTurno) {
    //             return css.playerControlViewLabelCtrlSelected;
    //         }

    //         if (npc.isPlayer && !npc.seuTurno) {
    //             return css.playerControlViewLabelCtrl;
    //         }

    //         return npcControlViewLabel;
    //     }
    // }

    handlePvTextChange = (strNewValue: string) => {
        let npc: Npc = this.props.handlerGetNpc(this.props.index);

        if (npc != null) {
            let cur: number = npc.currentHp;
            let newValue: number = parseInt(strNewValue);

            if (isNaN(newValue)) {
                newValue = 0;
            }

            if (isNaN(cur)) {
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
            let newValue: number = parseInt(strNewValue);

            if (isNaN(newValue)) {
                newValue = 0;
            }

            npc.initiativeModifier = newValue;

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


    handlerTurnoDe = (): string => {

        let npc: Npc = this.props.handlerGetNpc(this.props.index);

        if (npc != null && npc.seuTurno) {
            return labels.npc.token + " " + npc.name
        }

        if (npc != null && npc.seuTurno && npc.name.length > 20) {
            return labels.npc.token + " " + npc.name.substring(0, 20) + "..."
        }

        return "";

    }

    obterNpcMaiorIniciativa = (): Npc => {
        let sortedNpc: Npc[] = this.props.npcsReadonly;

        sortedNpc.sort((a: Npc, b: Npc) => {

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

        sortedNpc = sortedNpc.filter(x => x != null);
        if (sortedNpc.length > 1) {
            return sortedNpc[0];
        }
        else {
            return null;
        }
    }
 

    obterRowBg = ()=> {
        
        let npc: Npc = this.props.handlerGetNpc(this.props.index);
         
        if (npc != null && npc.seuTurno){
            return css.yellow;
        }

        if (npc != null && !npc.seuTurno && npc.isPlayer)
        {
            return css.green;
        }        
        
        return css.red;
    }

    render() {

        return (
            <SafeAreaView style={css.vwNpcComponent}>

                <SafeAreaView style={[css.vwNpcRow0, this.obterRowBg()]}>

                    <SafeAreaView style={css.vwNpcGroupCtrl1}>
                        <Text style={css.lblIni}> </Text>
                        <Text style={css.lblTurnoDe}>{this.handlerTurnoDe()}</Text>
                        <Text style={css.lblPv}></Text>
                    </SafeAreaView>

                    <SafeAreaView style={css.vwNpcGroupCtrl2}>
                    </SafeAreaView>
                </SafeAreaView>


                <SafeAreaView style={[css.vwNpcRow1, this.obterRowBg()]}>

                    <SafeAreaView style={css.vwNpcGroupCtrl1}>
                        <TextInput selectTextOnFocus style={css.txtIni} onChangeText={this.handleIniTextChange} keyboardType='number-pad' value={this.props.handlerGetNpc(this.props.index).initiativeModifier.toString()} maxLength={2} />
                        <TextInput selectTextOnFocus style={css.txtNomeNpc} onChangeText={this.handleNpcTextChange} value={this.props.handlerGetNpc(this.props.index).name} maxLength={20} />

                        <Pressable style={css.btnPv} onPress={this.handlerHpClick} >
                            <Text style={css.lblBtnPv} >{this.props.handlerGetNpc(this.props.index).currentHp.toString()}</Text>
                        </Pressable>
                    </SafeAreaView>

                    <SafeAreaView style={[css.vwNpcRow2, this.obterRowBg()]}>
                        <Pressable style={css.btnVer} onPress={this.handleNpcDetailsButtonClick}  >
                            <Text style={css.lblBtnVer}>{labels.npc.buttonLabel}</Text>
                        </Pressable>
                    </SafeAreaView>
                </SafeAreaView>


                <SafeAreaView style={[css.vwNpcRow3, this.obterRowBg()]}>
                    <SafeAreaView style={css.vwNpcGroupCtrl1}>
                        <Text style={css.lblIni}>{labels.npc.iniLabel}</Text>
                        <Text style={css.lblTurnoDe}> </Text>
                        <Text style={css.lblPv}>{labels.npc.hpLabel}</Text>
                    </SafeAreaView>
                    <SafeAreaView style={css.vwNpcGroupCtrl2}>

                    </SafeAreaView>
                </SafeAreaView>


            </SafeAreaView>
        )
    }




}


