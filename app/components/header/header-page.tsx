import { Pressable, Text, TextInput, View } from 'react-native';
import { labels } from "../../models/labels";
import React, { Component } from 'react';
import { cssHeader as css } from "./header-style";



export default class HeaderPage extends Component<{ sortList(), nextTurn(), previousTurn(), getTurn(), addNpc(), clearAllNpc(), addTextChange(text: string), clearAllList() }> {


    render() {

        return (
            <View style={css.vwHeader} >
                <Text style={css.lblHeaderTitle}>{labels.initiative.title}</Text>


                <View style={css.vwHeaderRowTurno} >
                    <View style={css.vwHeaderTurnoCtrl} >
                        <Pressable style={css.btnPreviousTurno} onPress={this.props.previousTurn}  >
                            <Text style={css.lblBtnPreviousTurno}>{labels.header.btnPreviousTurnLabel}</Text>
                        </Pressable>

                        <Pressable style={css.btnNextTurno} onPress={this.props.nextTurn}  >
                            <Text style={css.lblBtnNextTurno}>{labels.header.btnNextTurnLabel}</Text>
                        </Pressable>

                        <Text style={css.lblTurno}>Turno: {this.props.getTurn()}</Text>                       
                    </View>

                   
                    <Pressable style={css.btnSortNpcs}  >
                        <Text style={css.lblBtnSortNpcs}>{labels.header.btnSortTurnLabel}</Text>
                    </Pressable>

                </View>


                <View style={css.vwHeaderRowAddLimpar}>

                    <View style={css.vwHeaderAddCtrl} >
                        <Pressable style={css.btnAddNpc} onPress={this.props.addNpc}  >
                            <Text style={css.lblBtnAddNpc}>{labels.header.btnAddNpcLabel}</Text>
                        </Pressable>

                        <TextInput style={css.txtAddNpc} keyboardType="default" onChangeText={this.props.addTextChange}></TextInput>
                    </View>
                    
                    <Pressable style={css.btnLimpar} onPress={this.props.clearAllNpc} onLongPress={this.props.clearAllList} >
                        <Text style={css.lblBtnLimpar}>{labels.header.btnDelNpcLabel}</Text>
                    </Pressable>
                    
                </View>

            </View>
        )
    }
}
