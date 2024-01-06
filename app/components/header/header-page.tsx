import { Pressable, SafeAreaView, Text, TextInput, View } from 'react-native';
import { labels } from "../../models/labels";
import React, { Component } from 'react';
import { cssHeader as css } from "./header-style";



export default class HeaderPage extends Component<{ sortList(), nextTurn(), previousTurn(), getTurn(), addNpc(), clearAllNpc(), addTextChange(text: string), clearAllList() }> {


    render() {

        return (
            <SafeAreaView style={css.vwHeader} >
                <Text style={css.lblHeaderTitle}>{labels.initiative.title}</Text>


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

                   
                    <Pressable style={css.btnSortNpcs}  >
                        <Text style={css.lblBtnSortNpcs}>{labels.header.btnSortTurnLabel}</Text>
                    </Pressable>

                </SafeAreaView> 

            </SafeAreaView>
        )
    }
}
