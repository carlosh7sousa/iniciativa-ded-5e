import { Pressable, Text, TextInput, View } from 'react-native';
import { labels } from "../../models/labels";
import React, { Component } from 'react';
import { cssHeader as css } from "./header-style";



export default class HeaderPage extends Component<{ sortList(), nextTurn(), previousTurn(), getTurn(), addNpc(), clearAllNpc(), addTextChange(text:string), clearAllList() }  > {


    render() {

        return (
            <>
                <View style={css.headerView1}>
                    <Pressable style={css.btnPreviousTurnBtnCtrl} onPress={this.props.previousTurn}  >
                        <Text style={css.btnPreviousTurnLabelCtrl}>{labels.header.btnPreviousTurnLabel}</Text>
                    </Pressable>

                    <Text style={css.lblTurnoLabelCtrl}>Turno: {this.props.getTurn()}</Text>

                    <Pressable style={css.btnNextTurnBtnCtrl} onPress={this.props.nextTurn}  >
                        <Text style={css.btnNextTurnLabelCtrl}>{labels.header.btnNextTurnLabel}</Text>
                    </Pressable>
                    <Pressable style={css.btnSortTurnBtnCtrl}  >
                        <Text style={css.btnSortTurnLabelCtrl}>{labels.header.btnSortTurnLabel}</Text>
                    </Pressable>
                </View>

                <View style={css.headerView2}>
                    <Pressable style={css.btnAddNpcBtnCtrl} onPress={this.props.addNpc}  >
                        <Text style={css.btnAddNpcLabelCtrl}>{labels.header.btnAddNpcLabel}</Text>
                    </Pressable>
                    <TextInput style={css.txtAddNpc} keyboardType="default" onChangeText={this.props.addTextChange}></TextInput>
                    <Pressable style={css.btnClearAllNpcBtnCtrl} onPress={this.props.clearAllNpc} onLongPress={this.props.clearAllList} >
                        <Text style={css.btnDelNpcLabelCtrl}>{labels.header.btnDelNpcLabel}</Text>
                    </Pressable>
                </View>

                <View style={css.headerView3}>
                    <Text style={css.lblListaLabel}>{labels.npc.lblListTitle}</Text>
                </View>
            </>
        )
    }
}
