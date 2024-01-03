import { Text, SafeAreaView, StatusBar, FlatList } from 'react-native';
import { labels } from "../../models/labels";
import { cssInitiative as css } from "./initiative-style";
import React, { Component } from 'react';
import Ctx from '../../models/context';
import NpcPage from "../npc/npc-page";
import HeaderPage from '../header/header-page';
import Npc from '../../models/npc';
import NpcListPage from '../npcList/npc-list-page';

export default class InitiativePage extends  Component<{}, {npcs: Npc[], turno: number}> {


    constructor(props) {
        super(props);
        let ctx = new Ctx();
       
        this.state = {
            npcs: ctx.npcs,
            turno: 0
        }; 

        this.handleGetNpcs.bind(this);
    }

  

    handleTurnValueChange = (turno) => {
        this.setState({ turno });
    }; 

    handleGetNpcs = (): Npc[] => {
        return this.state.npcs;
    }

    handleSetNpcs = (npcs: Npc[]) => {
        this.setState({npcs});
    }   

    handleGetTurn = (): number => {

        return this.state.turno;

    }
    
    handleSortTurnButtonClick = () => {
        
        let npcs:Npc[] = this.handleGetNpcs();

        npcs = npcs.sort((a: Npc, b: Npc) => {
            
            if (a.initiativeModifier == b.initiativeModifier){
                return 0
            }
            else if (a.initiativeModifier < b.initiativeModifier){
                    return 1
            }
            else
            {
                return -1;
            }
        });        

        this.handleSetNpcs(npcs);
    }

    handleNextTurnButtonClick = () => {
        let turno: number = this.state.turno;
        turno += 1;
        this.handleTurnValueChange(turno);
    };

    handlePreviousTurnButtonClick = () => {
        let turno: number = this.state.turno;
        turno -= 1;

        if (turno == -1)
        {
            turno = 0;
        }

        this.handleTurnValueChange(turno);
    };

   

    render() {

        return <SafeAreaView style={css.bodyContainer} >
            <StatusBar />
            <Text style={css.lblTitle}>{labels.initiative.title}</Text>
            <HeaderPage sortList={this.handleSortTurnButtonClick} nextTurn={this.handleNextTurnButtonClick} previousTurn ={this.handlePreviousTurnButtonClick} getTurn={this.handleGetTurn} />
            
            <NpcListPage npcs={this.handleGetNpcs()}>
            </NpcListPage>   
 
        </SafeAreaView>
    }
}