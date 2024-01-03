import { Pressable, Text, TextInput, View } from 'react-native';
import { labels } from "../../models/labels";
import React, { Component } from 'react';
import Npc from '../../models/npc';
import Ctx from '../../models/context';
import { cssHeader as css } from "./header-style";



export default class HeaderPage extends Component<{ sortList(), nextTurn(), previousTurn(), getTurn()  } > {

    
    render() {

        return (
        <>           
            <View style={css.headerView}>

                <Pressable style={css.btnPreviousTurnBtnCtrl} onPress={this.props.previousTurn}  >
                    <Text style={css.btnPreviousTurnLabelCtrl}>{labels.header.btnPreviousTurnLabel}</Text>
                </Pressable>

                <Text style={css.lblTurnoLabelCtrl}>Turno: {this.props.getTurn()}</Text>

                <Pressable style={css.btnNextTurnBtnCtrl} onPress={this.props.nextTurn}  >
                    <Text style={css.btnNextTurnLabelCtrl}>{labels.header.btnNextTurnLabel}</Text>
                </Pressable>

                <Pressable style={css.btnSortTurnBtnCtrl} onPress={this.props.sortList}  >
                    <Text style={css.btnSortTurnLabelCtrl}>{labels.header.btnSortTurnLabel}</Text>
                </Pressable>
            </View>
            
            <Text style={css.lblHeaderTitle}>{labels.npc.lblListTitle}</Text>
        </>
        )
    }
}
