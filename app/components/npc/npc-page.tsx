import React, { Component } from 'react';
import Npc from '../../models/npc';
import { TextInput, Pressable, Text, SafeAreaView } from 'react-native';
import { cssNpc as css } from "./npc-style";
import { labels } from "../../models/labels";

export default class NpcPage extends Component<{ index: number, handlerSetNpc(npc: Npc, index: number): void, handlerGetNpc(index: number): Npc, handlerPvButtonClick(index: number): void, npcsReadonly: Npc[], handlerNpcDetailsButtonClick(index: number): void }, { visible: boolean }> {


    constructor(props) {
        super(props);
        this.handlerSetNpc = this.handlerSetNpc.bind(this);
        this.handlerGetNpc = this.handlerGetNpc.bind(this);
        this.handlerHpClick = this.handlerHpClick.bind(this);
        this.handleIniTextChange = this.handleIniTextChange.bind(this);
        this.handlerNpcDetailsButtonClick = this.handlerNpcDetailsButtonClick.bind(this);

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




    handleExcluirNpcButtonClick = () => {
        let npc: Npc = this.props.handlerGetNpc(this.props.index);
        if (npc != null) {
            npc.active = false;
            this.props.handlerSetNpc(npc, this.props.index);
        }
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

        sortedNpc = sortedNpc.filter(x => x != null && x.active);
        if (sortedNpc.length > 1) {
            return sortedNpc[0];
        }
        else {
            return null;
        }
    }


    obterRowBg = () => {

        let npc: Npc = this.props.handlerGetNpc(this.props.index);
        
        if (npc != null) {
            if (npc.seuTurno) {
                return css.yellow;
            }
            else if (npc.isPlayer) {
                return css.green;
            }
            else {
                return css.red;
            }
        }

        this.handlerSetNpc(npc, this.props.index);
    }


    handlerNpcDetailsButtonClick = () => {
        this.props.handlerNpcDetailsButtonClick(this.props.index);
    };


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
                        <TextInput selectTextOnFocus style={css.txtIni} onChangeText={this.handleIniTextChange} inputMode='numeric' value={this.props.handlerGetNpc(this.props.index).initiativeModifier.toString()} maxLength={2} ></TextInput>
                        <TextInput selectTextOnFocus style={css.txtNomeNpc} onChangeText={this.handleNpcTextChange} value={this.props.handlerGetNpc(this.props.index).name} maxLength={20}  ></TextInput>

                        <Pressable style={css.btnPv} onPress={this.handlerHpClick} >
                            <Text style={css.lblBtnPv} >{this.props.handlerGetNpc(this.props.index).currentHp.toString()}</Text>
                        </Pressable>
                    </SafeAreaView>

                    <SafeAreaView style={[css.vwNpcGroupCtrl2, this.obterRowBg()]}>
                        <Pressable style={css.btnVer} onPress={this.handlerNpcDetailsButtonClick} >
                            <Text style={css.lblBtnVer}>{labels.npc.verButtonLabel}</Text>
                        </Pressable>

                        <Pressable style={css.btnExcluir} onPress={this.handleExcluirNpcButtonClick}  >
                            <Text style={css.lblBtnExcluir}>{labels.npc.excluirButtonLabel}</Text>
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