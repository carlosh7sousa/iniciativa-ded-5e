import React, { Component } from 'react';
import Npc from "../../models/npc";
import { ScrollView } from "react-native";
import NpcPage from "../npc/npc-page";
import { cssNpcList as css } from "./npc-list-style";


export default class NpcListPage extends Component<{ npcs: Npc[] }, {npcs:Npc[]}> {

    constructor(props) {
        super(props);
        this.state = {
            npcs: this.props.npcs
        }

        this.handlerSetNpc = this.handlerSetNpc.bind(this);
        this.handlerGetNpc = this.handlerGetNpc.bind(this);
    }

    handlerSetNpc(npc: Npc, index: number): void {
        
        this.props.npcs[index] = npc;
        this.setState({npcs: this.props.npcs}) ;
    }

    handlerGetNpc(index: number): Npc {
        return this.props.npcs[index];
    }


    render() {

        return (
            <ScrollView style={css.listaNpcsView}>
                {this.props.npcs.map((npc: Npc, index: number) => <NpcPage key={index} index={index} handlerGetNpc={this.handlerGetNpc} handlerSetNpc={this.handlerSetNpc}  />)}
            </ScrollView>
        );
    }
}