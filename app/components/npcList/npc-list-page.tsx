import React, { Component } from 'react';
import Npc from "../../models/npc";
import { Modal, Pressable, ScrollView, TextInput, View, Text, SafeAreaView, Switch } from "react-native";
import NpcPage from "../npc/npc-page";
import { cssNpcList as css } from "./npc-list-style";
import { labels } from "../../models/labels";


export default class NpcListPage extends Component<{ npcs: Npc[], idSelected: number }, { npcs: Npc[], indexModalPv: number, oldModalPv: number, newModalPv: number, indexModalVer: number }> {

    constructor(props) {
        super(props);
        this.state = {
            npcs: this.props.npcs,

            oldModalPv: 0,
            newModalPv: 0,
            indexModalPv: -1,


            indexModalVer: -1
        };

        this.handlerSetNpc = this.handlerSetNpc.bind(this);
        this.handlerGetNpc = this.handlerGetNpc.bind(this);
        this.handlerPvButtonClick = this.handlerPvButtonClick.bind(this);
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

    handleCloseModalVer = () => {
        this.resetModalVerState();
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
            return npc.name + labels.modalVer.separador1;
        }

        return "";
    }


    handleModalAtualizar = () => {

        // let npc: Npc = this.handlerGetNpc(this.state.indexModalPv);
        // if (npc != null) {
        //     let newPv: number = this.state.newModalPv;
        //     if (isNaN(newPv)) {
        //         newPv = 0;
        //     }

        //     npc.currentHp = newPv;
        //     this.handlerSetNpc(npc, this.state.indexModalPv);
        //     this.resetModalState();

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
                            if (npc.ativo) {
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
                                <TextInput style={css.modalTxtPv} selectTextOnFocus onChangeText={this.handleModalPvTextChange} keyboardType='number-pad' maxLength={4} />
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

                            <View style={css.modalVerRow1}>
                                <Text style={css.modalVerLblTitulo}>{labels.modalVer.titulo} </Text>
                                <Pressable style={css.modalVerBtnClose} onPress={this.handleCloseModalVer}>
                                    <Text style={css.modalVerLblBtnClose}>{labels.modalVer.btnClose}</Text>
                                </Pressable>
                            </View>

                            <View style={css.modalVerRow3}>
                                <Text style={css.modalVerLblTitulo}> {this.handleModalVerNameValue()} </Text>
                            </View>

                            <View style={css.modalVerRow2}>
                                <Text style={css.modalVerLblEJogador}>É Jogador</Text>
                                <Switch />
                            </View>

                            <View style={css.modalVerRow2}>

                                <Text style={css.modalVerLblDeslocamento}>Deslocamento:</Text>
                                <TextInput style={css.modalVerTxtDeslocamento}>9m</TextInput>
                                <Text style={css.modalVerLblCa}>CA</Text>
                                <TextInput style={css.modalVerTxtCa}>19</TextInput>
                            </View>


                            <View style={css.modalVerRow2}>
                                <Text style={css.modalVerLblAtaqueTitulo}>Ataque</Text>
                                <Text style={css.modalVerLblModTitulo}>Mod</Text>
                                <Text style={css.modalVerLblDanoTitulo}>Dano</Text>
                            </View>

                            <View style={css.modalVerRow2}>
                                <TextInput style={css.modalVerTxtAtaque}>Espada longa</TextInput>
                                <TextInput style={css.modalVerTxtMod}>+5</TextInput>
                                <TextInput style={css.modalVerTxtDano}>1d8+5 </TextInput>
                            </View>

                            <View style={css.modalVerRow2}>
                                <TextInput style={css.modalVerTxtAtaque} maxLength={18}>Machado de Batalha</TextInput>
                                <TextInput style={css.modalVerTxtMod} maxLength={3}>+5</TextInput>
                                <TextInput style={css.modalVerTxtDano} maxLength={18}>1d10+15 / 2d10+15</TextInput>
                            </View>

                            <View style={css.modalVerRow2}>
                                <TextInput style={css.modalVerTxtAtaque}>Arco composto</TextInput>
                                <TextInput style={css.modalVerTxtMod}>+3</TextInput>
                                <TextInput style={css.modalVerTxtDano}>1d10+4 </TextInput>
                            </View>

                            <View style={css.modalVerRow2}>
                                <Text style={css.modalVerLblPericiaTitulo}>Pericias</Text>
                                <Text style={css.modalVerLblModPericiaTitulo}>Mod</Text>
                            </View>

                            <View style={css.modalVerRow2}>
                                <TextInput style={css.modalVerTxtPericia}>Percepção </TextInput>
                                <TextInput style={css.modalVerTxtModPericia}> -1</TextInput>
                            </View>
                            <View style={css.modalVerRow2}>
                                <TextInput style={css.modalVerTxtPericia}>Furtividade </TextInput>
                                <TextInput style={css.modalVerTxtModPericia}> +2</TextInput>
                            </View>
                            <View style={css.modalVerRow2}>
                                <TextInput style={css.modalVerTxtPericia}>Atletismo </TextInput>
                                <TextInput style={css.modalVerTxtModPericia}> +5</TextInput>
                            </View>

                            <View style={css.modalVerRow2}>
                                <Text style={css.modalVerLblDescricaoModTempTitulo}>Descrição</Text>
                                <Text style={css.modalVerLblModTempTitulo}>Mod</Text>
                                <Text style={css.modalVerLblDuracaoTitulo}>Duração</Text>
                            </View>

                            <View style={css.modalVerRow2}>
                                <TextInput style={css.modalVerTxtDescricaoModTemp}>Atordoado</TextInput>
                                <TextInput style={css.modalVerTxtModTemp}>-1</TextInput>
                                <TextInput style={css.modalVerTxtDuracao}>10</TextInput>
                            </View>

                            <View style={css.modalVerRow2}>
                                <TextInput style={css.modalVerTxtDescricaoModTemp}></TextInput>
                                <TextInput style={css.modalVerTxtModTemp}></TextInput>
                                <TextInput style={css.modalVerTxtDuracao}></TextInput>
                            </View>
                            <View style={css.modalVerRow2}>
                                <Text style={css.modalVerLblAnotacoes}>Anotações:</Text>
                            </View>

                            <View style={css.modalVerRow2}>
                                <TextInput style={css.modalVertxtAnotacoes}>NPC está com o tesouro.</TextInput>
                            </View>

                            <View style={css.modalVerRow2}>
                                <Pressable style={css.modalBtnSet} onPress={this.handleModalAtualizar}>
                                    <Text style={css.modalVerLblBtnAtualizar}>{labels.modalVer.Atualizar}</Text>
                                </Pressable>
                            </View>

                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        )
    }
}