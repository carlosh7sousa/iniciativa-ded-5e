import { Pressable, Text, TextInput, View } from 'react-native';
import { labels } from "../../models/labels";
import React, { Component } from 'react';
import Npc from '../../models/npc';
import Ctx from '../../models/context';
import { cssHeader as css } from "./header-style";



export default class HeaderPage extends Component<{ ctx: Ctx }, { turno: number }> {

    constructor(props) {
        super(props);
        this.state = {
            turno: 0
        };

    }

    handleTurnValueChange = (turno) => {
        if (this.state.turno <= 0) {
            turno = 0;
        }

        this.setState({ turno });
    };

    handleNextTurnButtonClick = () => {
        let turno: number = this.state.turno;
        turno += 1;
        this.handleTurnValueChange(turno);
    };

    handlePreviousTurnButtonClick = () => {
        let turno: number = this.state.turno;
        turno -= 1;
        this.handleTurnValueChange(turno);
    };

    handleSortTurnButtonClick = () => {

        this.props.ctx.npcs.sort((a: Npc, b: Npc) => {
            return a.initiativeModifier - b.initiativeModifier;
        });
    }

    render() {

        return (
        <>
           
            <View style={css.headerView}>

                <Pressable style={css.btnPreviousTurnBtnCtrl} onPress={this.handlePreviousTurnButtonClick}  >
                    <Text style={css.btnPreviousTurnLabelCtrl}>{labels.header.btnPreviousTurnLabel}</Text>
                </Pressable>

                <Text style={css.lblTurnoLabelCtrl}>Turno: {this.state.turno}</Text>

                <Pressable style={css.btnNextTurnBtnCtrl} onPress={this.handleNextTurnButtonClick}  >
                    <Text style={css.btnNextTurnLabelCtrl}>{labels.header.btnNextTurnLabel}</Text>
                </Pressable>

                <Pressable style={css.btnSortTurnBtnCtrl} onPress={this.handleSortTurnButtonClick}  >
                    <Text style={css.btnSortTurnLabelCtrl}>{labels.header.btnSortTurnLabel}</Text>
                </Pressable>
            </View>
            
            <Text style={css.lblHeaderTitle}>{labels.npc.lblListTitle}</Text>
        </>
        )
    }
}
