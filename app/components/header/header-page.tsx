import { Pressable, SafeAreaView, Text, TextInput, View } from 'react-native';
import { labels } from "../../models/labels";
import React, { Component } from 'react';
import { cssHeader as css } from "./header-style";



export default class HeaderPage extends Component<{ sair(), sortList(), nextTurn(), previousTurn(), getTurn(), addNpc(), clearAllNpc(), addTextChange(text: string), clearAllList() }> {


    render() {

        return (
            <SafeAreaView style={css.vwHeader} >
                <Text style={css.lblHeaderTitle}>{labels.initiative.title}</Text>
                <SafeAreaView style={css.vwSair}>
 
                    <Pressable style={css.btnSair} onPress={this.props.sair}  >
                        <Text style={css.lblBtnSair}>{labels.header.btnSair}</Text>
                    </Pressable> 
                </SafeAreaView>

                <SafeAreaView style={css.vwHeaderRowTurno} >
                    <SafeAreaView style={css.vwHeaderTurnoCtrl} >
                        <Pressable style={css.btnPreviousTurno} onPress={this.props.previousTurn}  >
                            <Text style={css.lblBtnPreviousTurno}>{labels.header.btnPreviousTurnLabel}</Text>
                        </Pressable>

                        <Pressable style={css.btnNextTurno} onPress={this.props.nextTurn}  >
                            <Text style={css.lblBtnNextTurno}> {labels.header.btnNextTurnLabel}</Text>
                        </Pressable>

                        <Text style={css.lblTurno}>{labels.header.lblTurno} {this.props.getTurn()}</Text>
                    </SafeAreaView>


                    <Pressable style={css.btnSortNpcs} onPress={this.props.sortList} >
                        <Text style={css.lblBtnSortNpcs}>{labels.header.btnSortTurnLabel}</Text>
                    </Pressable>

                </SafeAreaView>

                <SafeAreaView style={css.vwHeaderAddCtrl} >
                    <Pressable style={css.btnAddNpc} onPress={this.props.addNpc}  >
                        <Text style={css.lblBtnAddNpc}>{labels.header.btnAddNpcLabel}</Text>
                    </Pressable>

                    <TextInput style={css.txtAddNpc} selectTextOnFocus onChangeText={this.props.addTextChange}></TextInput>
                </SafeAreaView>


            </SafeAreaView>
        )
    }
}
